import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  foreignKey,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const accountStatus = pgEnum("AccountStatus", ["active", "paused", "error", "disconnected"]);
export const billingAttemptStatus = pgEnum("BillingAttemptStatus", ["created", "completed", "failed"]);
export const jobStatus = pgEnum("JobStatus", ["idle", "running", "stopped", "done", "error"]);
export const plan = pgEnum("Plan", ["free", "pro", "max"]);
export const subscriptionStatus = pgEnum("SubscriptionStatus", ["created", "authenticated", "active", "pending", "halted", "cancelled", "completed", "expired"]);
export const usageMetric = pgEnum("UsageMetric", ["message_attempt"]);
export const webhookProcessStatus = pgEnum("WebhookProcessStatus", ["received", "processed", "failed"]);

export const prismaMigrations = pgTable("_prisma_migrations", {
  id: varchar({ length: 36 }).primaryKey().notNull(),
  checksum: varchar({ length: 64 }).notNull(),
  finishedAt: timestamp("finished_at", { withTimezone: true, mode: "string" }),
  migrationName: varchar("migration_name", { length: 255 }).notNull(),
  logs: text(),
  rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: "string" }),
  startedAt: timestamp("started_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const appVersions = pgTable("app_versions", {
  id: serial().primaryKey().notNull(),
  version: text().notNull(),
  platform: text().notNull(),
  downloadUrl: text("download_url").notNull(),
  releaseNotes: text("release_notes"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: text().primaryKey().notNull(),
  email: text().notNull(),
  plan: plan().default("free").notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }).notNull(),
  messageSenderName: text("message_sender_name"),
  messageTone: text("message_tone"),
  messagePrompt: text("message_prompt"),
}, (table) => [
  uniqueIndex("users_email_key").using("btree", table.email.asc().nullsLast().op("text_ops")),
]);

export const igAccounts = pgTable("ig_accounts", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  username: text().notNull(),
  proxy: text(),
  status: accountStatus().default("active").notNull(),
  lastActiveAt: timestamp("last_active_at", { precision: 3, mode: "string" }),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
  index("ig_accounts_user_id_idx").using("btree", table.userId.asc().nullsLast().op("text_ops")),
  uniqueIndex("ig_accounts_user_id_username_key").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.username.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "ig_accounts_user_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);

export const automationJobs = pgTable("automation_jobs", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  igAccountId: text("ig_account_id").notNull(),
  status: jobStatus().default("idle").notNull(),
  totalTargets: integer("total_targets").default(0).notNull(),
  sent: integer().default(0).notNull(),
  failed: integer().default(0).notNull(),
  startedAt: timestamp("started_at", { precision: 3, mode: "string" }),
  stoppedAt: timestamp("stopped_at", { precision: 3, mode: "string" }),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  defaultMessage: text("default_message"),
  totalTokens: integer("total_tokens").default(0).notNull(),
}, (table) => [
  index("automation_jobs_user_id_status_idx").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.status.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "automation_jobs_user_id_fkey",
  }).onUpdate("cascade").onDelete("restrict"),
  foreignKey({
    columns: [table.igAccountId],
    foreignColumns: [igAccounts.id],
    name: "automation_jobs_ig_account_id_fkey",
  }).onUpdate("cascade").onDelete("restrict"),
]);

export const jobLogs = pgTable("job_logs", {
  id: text().primaryKey().notNull(),
  jobId: text("job_id").notNull(),
  level: text().notNull(),
  message: text().notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
  index("job_logs_job_id_created_at_idx").using("btree", table.jobId.asc().nullsLast().op("text_ops"), table.createdAt.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.jobId],
    foreignColumns: [automationJobs.id],
    name: "job_logs_job_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);

export const messageRecords = pgTable("message_records", {
  id: text().primaryKey().notNull(),
  jobId: text("job_id").notNull(),
  username: text().notNull(),
  messageSent: text("message_sent"),
  status: text().notNull(),
  tokenCount: integer("token_count").default(0).notNull(),
  errorReason: text("error_reason"),
  sentAt: timestamp("sent_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  replied: boolean().default(false).notNull(),
  repliedAt: timestamp("replied_at", { precision: 3, mode: "string" }),
  replyPreview: text("reply_preview"),
  seen: boolean().default(false).notNull(),
  seenAt: timestamp("seen_at", { precision: 3, mode: "string" }),
}, (table) => [
  index("message_records_job_id_idx").using("btree", table.jobId.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.jobId],
    foreignColumns: [automationJobs.id],
    name: "message_records_job_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);

export const webhookEvents = pgTable("webhook_events", {
  id: text().primaryKey().notNull(),
  provider: text().default("razorpay").notNull(),
  eventId: text("event_id").notNull(),
  eventType: text("event_type").notNull(),
  signature: text(),
  status: webhookProcessStatus().default("received").notNull(),
  payload: jsonb().notNull(),
  error: text(),
  processedAt: timestamp("processed_at", { precision: 3, mode: "string" }),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
  index("webhook_events_event_type_created_at_idx").using("btree", table.eventType.asc().nullsLast().op("text_ops"), table.createdAt.asc().nullsLast().op("timestamp_ops")),
  uniqueIndex("webhook_events_provider_event_id_key").using("btree", table.provider.asc().nullsLast().op("text_ops"), table.eventId.asc().nullsLast().op("text_ops")),
]);

export const subscriptions = pgTable("subscriptions", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  plan: plan().notNull(),
  provider: text().default("razorpay").notNull(),
  status: subscriptionStatus().default("created").notNull(),
  providerSubscriptionId: text("provider_subscription_id"),
  providerCustomerId: text("provider_customer_id"),
  shortUrl: text("short_url"),
  currentStart: timestamp("current_start", { precision: 3, mode: "string" }),
  currentEnd: timestamp("current_end", { precision: 3, mode: "string" }),
  cancelAtCycleEnd: boolean("cancel_at_cycle_end").default(false).notNull(),
  lastPaymentId: text("last_payment_id"),
  metadata: jsonb(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }).notNull(),
}, (table) => [
  uniqueIndex("subscriptions_provider_subscription_id_key").using("btree", table.providerSubscriptionId.asc().nullsLast().op("text_ops")),
  index("subscriptions_user_id_created_at_idx").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.createdAt.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "subscriptions_user_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);

export const billingAttempts = pgTable("billing_attempts", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  subscriptionId: text("subscription_id"),
  targetPlan: plan("target_plan").notNull(),
  provider: text().default("razorpay").notNull(),
  status: billingAttemptStatus().default("created").notNull(),
  idempotencyKey: text("idempotency_key").notNull(),
  providerSubscriptionId: text("provider_subscription_id"),
  providerPaymentId: text("provider_payment_id"),
  errorCode: text("error_code"),
  errorDescription: text("error_description"),
  metadata: jsonb(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }).notNull(),
}, (table) => [
  uniqueIndex("billing_attempts_idempotency_key_key").using("btree", table.idempotencyKey.asc().nullsLast().op("text_ops")),
  index("billing_attempts_user_id_created_at_idx").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.createdAt.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "billing_attempts_user_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
  foreignKey({
    columns: [table.subscriptionId],
    foreignColumns: [subscriptions.id],
    name: "billing_attempts_subscription_id_fkey",
  }).onUpdate("cascade").onDelete("set null"),
]);

export const dailyUsageCounters = pgTable("daily_usage_counters", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  usageDate: date("usage_date").notNull(),
  metric: usageMetric().notNull(),
  used: integer().default(0).notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }).notNull(),
}, (table) => [
  index("daily_usage_counters_user_id_usage_date_idx").using("btree", table.userId.asc().nullsLast().op("date_ops"), table.usageDate.asc().nullsLast().op("text_ops")),
  uniqueIndex("daily_usage_counters_user_id_usage_date_metric_key").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.usageDate.asc().nullsLast().op("text_ops"), table.metric.asc().nullsLast().op("text_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "daily_usage_counters_user_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);

export const usageEvents = pgTable("usage_events", {
  id: text().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  counterId: text("counter_id").notNull(),
  metric: usageMetric().notNull(),
  usageDate: date("usage_date").notNull(),
  quantity: integer().default(1).notNull(),
  idempotencyKey: text("idempotency_key").notNull(),
  metadata: jsonb(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
  uniqueIndex("usage_events_idempotency_key_key").using("btree", table.idempotencyKey.asc().nullsLast().op("text_ops")),
  index("usage_events_user_id_usage_date_idx").using("btree", table.userId.asc().nullsLast().op("date_ops"), table.usageDate.asc().nullsLast().op("date_ops")),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: "usage_events_user_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
  foreignKey({
    columns: [table.counterId],
    foreignColumns: [dailyUsageCounters.id],
    name: "usage_events_counter_id_fkey",
  }).onUpdate("cascade").onDelete("cascade"),
]);
