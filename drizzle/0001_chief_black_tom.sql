CREATE TYPE "public"."AccountStatus" AS ENUM('active', 'paused', 'error', 'disconnected');--> statement-breakpoint
CREATE TYPE "public"."BillingAttemptStatus" AS ENUM('created', 'completed', 'failed');--> statement-breakpoint
CREATE TYPE "public"."CareerJobStatus" AS ENUM('open', 'closed');--> statement-breakpoint
CREATE TYPE "public"."JobStatus" AS ENUM('idle', 'running', 'stopped', 'done', 'error');--> statement-breakpoint
CREATE TYPE "public"."Plan" AS ENUM('free', 'pro', 'max');--> statement-breakpoint
CREATE TYPE "public"."SubscriptionStatus" AS ENUM('created', 'authenticated', 'active', 'pending', 'halted', 'cancelled', 'completed', 'expired');--> statement-breakpoint
CREATE TYPE "public"."UsageMetric" AS ENUM('message_attempt');--> statement-breakpoint
CREATE TYPE "public"."WebhookProcessStatus" AS ENUM('received', 'processed', 'failed');--> statement-breakpoint
CREATE TABLE "automation_jobs" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"ig_account_id" text NOT NULL,
	"status" "JobStatus" DEFAULT 'idle' NOT NULL,
	"total_targets" integer DEFAULT 0 NOT NULL,
	"sent" integer DEFAULT 0 NOT NULL,
	"failed" integer DEFAULT 0 NOT NULL,
	"started_at" timestamp(3),
	"stopped_at" timestamp(3),
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"default_message" text,
	"total_tokens" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "billing_attempts" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"subscription_id" text,
	"target_plan" "Plan" NOT NULL,
	"provider" text DEFAULT 'razorpay' NOT NULL,
	"status" "BillingAttemptStatus" DEFAULT 'created' NOT NULL,
	"idempotency_key" text NOT NULL,
	"provider_subscription_id" text,
	"provider_payment_id" text,
	"error_code" text,
	"error_description" text,
	"metadata" jsonb,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "career_applications" (
	"id" text PRIMARY KEY NOT NULL,
	"job_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"answers" jsonb NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "career_jobs" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	"location" text NOT NULL,
	"description" text NOT NULL,
	"highlights" jsonb NOT NULL,
	"skills" jsonb NOT NULL,
	"questions" jsonb NOT NULL,
	"status" "CareerJobStatus" DEFAULT 'open' NOT NULL,
	"theme" text DEFAULT 'orange' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "daily_usage_counters" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"usage_date" date NOT NULL,
	"metric" "UsageMetric" NOT NULL,
	"used" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ig_accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"username" text NOT NULL,
	"proxy" text,
	"status" "AccountStatus" DEFAULT 'active' NOT NULL,
	"last_active_at" timestamp(3),
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "job_logs" (
	"id" text PRIMARY KEY NOT NULL,
	"job_id" text NOT NULL,
	"level" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "message_records" (
	"id" text PRIMARY KEY NOT NULL,
	"job_id" text NOT NULL,
	"username" text NOT NULL,
	"message_sent" text,
	"status" text NOT NULL,
	"token_count" integer DEFAULT 0 NOT NULL,
	"error_reason" text,
	"sent_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"replied" boolean DEFAULT false NOT NULL,
	"replied_at" timestamp(3),
	"reply_preview" text,
	"seen" boolean DEFAULT false NOT NULL,
	"seen_at" timestamp(3)
);
--> statement-breakpoint
CREATE TABLE "_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp with time zone,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"plan" "Plan" NOT NULL,
	"provider" text DEFAULT 'razorpay' NOT NULL,
	"status" "SubscriptionStatus" DEFAULT 'created' NOT NULL,
	"provider_subscription_id" text,
	"provider_customer_id" text,
	"short_url" text,
	"current_start" timestamp(3),
	"current_end" timestamp(3),
	"cancel_at_cycle_end" boolean DEFAULT false NOT NULL,
	"last_payment_id" text,
	"metadata" jsonb,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "usage_events" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"counter_id" text NOT NULL,
	"metric" "UsageMetric" NOT NULL,
	"usage_date" date NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"idempotency_key" text NOT NULL,
	"metadata" jsonb,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"plan" "Plan" DEFAULT 'free' NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"message_sender_name" text,
	"message_tone" text,
	"message_prompt" text
);
--> statement-breakpoint
CREATE TABLE "webhook_events" (
	"id" text PRIMARY KEY NOT NULL,
	"provider" text DEFAULT 'razorpay' NOT NULL,
	"event_id" text NOT NULL,
	"event_type" text NOT NULL,
	"signature" text,
	"status" "WebhookProcessStatus" DEFAULT 'received' NOT NULL,
	"payload" jsonb NOT NULL,
	"error" text,
	"processed_at" timestamp(3),
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE "automation_jobs" ADD CONSTRAINT "automation_jobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "automation_jobs" ADD CONSTRAINT "automation_jobs_ig_account_id_fkey" FOREIGN KEY ("ig_account_id") REFERENCES "public"."ig_accounts"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "billing_attempts" ADD CONSTRAINT "billing_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "billing_attempts" ADD CONSTRAINT "billing_attempts_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "public"."subscriptions"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "career_applications" ADD CONSTRAINT "career_applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."career_jobs"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "daily_usage_counters" ADD CONSTRAINT "daily_usage_counters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ig_accounts" ADD CONSTRAINT "ig_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "job_logs" ADD CONSTRAINT "job_logs_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."automation_jobs"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "message_records" ADD CONSTRAINT "message_records_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."automation_jobs"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "usage_events" ADD CONSTRAINT "usage_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "usage_events" ADD CONSTRAINT "usage_events_counter_id_fkey" FOREIGN KEY ("counter_id") REFERENCES "public"."daily_usage_counters"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX "automation_jobs_user_id_status_idx" ON "automation_jobs" USING btree ("user_id" text_ops,"status" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "billing_attempts_idempotency_key_key" ON "billing_attempts" USING btree ("idempotency_key" text_ops);--> statement-breakpoint
CREATE INDEX "billing_attempts_user_id_created_at_idx" ON "billing_attempts" USING btree ("user_id" text_ops,"created_at" text_ops);--> statement-breakpoint
CREATE INDEX "career_applications_job_id_idx" ON "career_applications" USING btree ("job_id" text_ops);--> statement-breakpoint
CREATE INDEX "daily_usage_counters_user_id_usage_date_idx" ON "daily_usage_counters" USING btree ("user_id" date_ops,"usage_date" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "daily_usage_counters_user_id_usage_date_metric_key" ON "daily_usage_counters" USING btree ("user_id" text_ops,"usage_date" text_ops,"metric" text_ops);--> statement-breakpoint
CREATE INDEX "ig_accounts_user_id_idx" ON "ig_accounts" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ig_accounts_user_id_username_key" ON "ig_accounts" USING btree ("user_id" text_ops,"username" text_ops);--> statement-breakpoint
CREATE INDEX "job_logs_job_id_created_at_idx" ON "job_logs" USING btree ("job_id" text_ops,"created_at" text_ops);--> statement-breakpoint
CREATE INDEX "message_records_job_id_idx" ON "message_records" USING btree ("job_id" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "subscriptions_provider_subscription_id_key" ON "subscriptions" USING btree ("provider_subscription_id" text_ops);--> statement-breakpoint
CREATE INDEX "subscriptions_user_id_created_at_idx" ON "subscriptions" USING btree ("user_id" text_ops,"created_at" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "usage_events_idempotency_key_key" ON "usage_events" USING btree ("idempotency_key" text_ops);--> statement-breakpoint
CREATE INDEX "usage_events_user_id_usage_date_idx" ON "usage_events" USING btree ("user_id" date_ops,"usage_date" date_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_key" ON "users" USING btree ("email" text_ops);--> statement-breakpoint
CREATE INDEX "webhook_events_event_type_created_at_idx" ON "webhook_events" USING btree ("event_type" text_ops,"created_at" timestamp_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "webhook_events_provider_event_id_key" ON "webhook_events" USING btree ("provider" text_ops,"event_id" text_ops);