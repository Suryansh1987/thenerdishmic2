CREATE TABLE "app_versions" (
	"id" serial PRIMARY KEY NOT NULL,
	"version" text NOT NULL,
	"platform" text NOT NULL,
	"download_url" text NOT NULL,
	"release_notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
