import { SignUp } from "@clerk/nextjs";
import { AuthShell, clerkAppearance } from "@/components/instaflow/AuthShell";

export default function InstaFlowSignUpPage() {
  return (
    <AuthShell
      title="Create your InstaFlow account."
      body="Start with the InstaFlow sign-up flow, then jump straight to the latest desktop builds while the full workspace is still being built."
    >
      <SignUp
        appearance={clerkAppearance}
        fallbackRedirectUrl="/instaflow/downloads"
        signInUrl="/instaflow/sign-in"
      />
    </AuthShell>
  );
}
