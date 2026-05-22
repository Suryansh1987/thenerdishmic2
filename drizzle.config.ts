import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "drizzle-kit";

function readEnvFileValue(key: string) {
  const envPath = resolve(process.cwd(), ".env");

  if (!existsSync(envPath)) {
    return undefined;
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const currentKey = trimmed.slice(0, separatorIndex).trim();

    if (currentKey !== key) {
      continue;
    }

    return trimmed.slice(separatorIndex + 1).trim();
  }

  return undefined;
}

const databaseUrl = process.env.DATABASE_URL ?? readEnvFileValue("DATABASE_URL");

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required for Drizzle.");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  strict: true,
  verbose: true,
});
