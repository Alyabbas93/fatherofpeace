"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/app/lib/supabase-browser";

const SignInWithGoogleButton = () => {
  const handleSignIn = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Google sign-in error:", error);
    } else {
      // Redirect user to the auth page
      window.location.href = data.url;
    }
  };

  return (
    <Button type="button" variant="outline" className="w-full" onClick={handleSignIn}>
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
