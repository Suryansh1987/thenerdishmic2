import { relations } from "drizzle-orm/relations";
import {
  automationJobs,
  billingAttempts,
  careerApplications,
  careerJobs,
  dailyUsageCounters,
  igAccounts,
  jobLogs,
  messageRecords,
  subscriptions,
  usageEvents,
  users,
} from "./schema";

export const igAccountsRelations = relations(igAccounts, ({ one, many }) => ({
  user: one(users, {
    fields: [igAccounts.userId],
    references: [users.id],
  }),
  automationJobs: many(automationJobs),
}));

export const usersRelations = relations(users, ({ many }) => ({
  igAccounts: many(igAccounts),
  automationJobs: many(automationJobs),
  subscriptions: many(subscriptions),
  billingAttempts: many(billingAttempts),
  dailyUsageCounters: many(dailyUsageCounters),
  usageEvents: many(usageEvents),
}));

export const jobLogsRelations = relations(jobLogs, ({ one }) => ({
  automationJob: one(automationJobs, {
    fields: [jobLogs.jobId],
    references: [automationJobs.id],
  }),
}));

export const automationJobsRelations = relations(automationJobs, ({ one, many }) => ({
  jobLogs: many(jobLogs),
  user: one(users, {
    fields: [automationJobs.userId],
    references: [users.id],
  }),
  igAccount: one(igAccounts, {
    fields: [automationJobs.igAccountId],
    references: [igAccounts.id],
  }),
  messageRecords: many(messageRecords),
}));

export const messageRecordsRelations = relations(messageRecords, ({ one }) => ({
  automationJob: one(automationJobs, {
    fields: [messageRecords.jobId],
    references: [automationJobs.id],
  }),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one, many }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id],
  }),
  billingAttempts: many(billingAttempts),
}));

export const billingAttemptsRelations = relations(billingAttempts, ({ one }) => ({
  user: one(users, {
    fields: [billingAttempts.userId],
    references: [users.id],
  }),
  subscription: one(subscriptions, {
    fields: [billingAttempts.subscriptionId],
    references: [subscriptions.id],
  }),
}));

export const dailyUsageCountersRelations = relations(dailyUsageCounters, ({ one, many }) => ({
  user: one(users, {
    fields: [dailyUsageCounters.userId],
    references: [users.id],
  }),
  usageEvents: many(usageEvents),
}));

export const usageEventsRelations = relations(usageEvents, ({ one }) => ({
  user: one(users, {
    fields: [usageEvents.userId],
    references: [users.id],
  }),
  dailyUsageCounter: one(dailyUsageCounters, {
    fields: [usageEvents.counterId],
    references: [dailyUsageCounters.id],
  }),
}));

export const careerJobsRelations = relations(careerJobs, ({ many }) => ({
  applications: many(careerApplications),
}));

export const careerApplicationsRelations = relations(careerApplications, ({ one }) => ({
  job: one(careerJobs, {
    fields: [careerApplications.jobId],
    references: [careerJobs.id],
  }),
}));
