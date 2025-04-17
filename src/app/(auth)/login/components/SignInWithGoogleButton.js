"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/app/lib/supabase-browser";
import { Globe } from "lucide-react";

const SignInWithGoogleButton = () => {
  const handleSignIn = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
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
    }
  };

  return (
    <Button variant="outline" size="icon" className="rounded-full" onClick={handleSignIn}>
      <Globe className="h-5 w-5" />
    </Button>
  );
};

export default SignInWithGoogleButton;
