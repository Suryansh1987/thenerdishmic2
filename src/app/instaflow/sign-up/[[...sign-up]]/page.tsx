import { SignUp } from "@clerk/nextjs";
import { AuthShell, clerkAppearance } from "@/components/instaflow/AuthShell";

export default function InstaFlowSignUpPage() {
  return (
    <AuthShell
      title="Create your InstaFlow account."
      body="Start with the InstaFlow sign-up flow, then land back on the product page while the app workspace is still being built."
    >
      <SignUp
        appearance={clerkAppearance}
        fallbackRedirectUrl="/instaflow"
        signInUrl="/instaflow/sign-in"
      />
    </AuthShell>
  );
}
