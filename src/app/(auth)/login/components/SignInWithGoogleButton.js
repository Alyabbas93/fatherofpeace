"use client";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/app/lib/auth-actions";

const SignInWithGoogleButton = () => {
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
      // Handle error (show toast, etc.)
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleSignIn}
    >
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;