import { SignIn } from "@clerk/nextjs";
import { AuthShell, clerkAppearance } from "@/components/instaflow/AuthShell";

export default function InstaFlowSignInPage() {
  return (
    <AuthShell
      title="Sign in to InstaFlow."
      body="Access your outreach workspace, versioned desktop releases, and future account tools from one place."
    >
      <SignIn
        appearance={clerkAppearance}
        fallbackRedirectUrl="/instaflow"
        signUpUrl="/instaflow/sign-up"
      />
    </AuthShell>
  );
}
