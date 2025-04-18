"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/app/lib/supabase-browser";


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
    <Button variant="outline" size="icon" className="rounded-full bg-black hover:bg-gray-800 cursor-pointer" onClick={handleSignIn}>
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
       <path d="M10 11.5V8.5L19.8883 8.5C19.9619 8.98929 20 9.49019 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.7614 0 15.2614 1.11929 17.0711 2.92893L14.9497 5.05025C13.683 3.7835 11.933 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.3511 17 16.1522 14.6452 16.8389 11.5H10Z" fill="white"/>
     </svg>
    </Button>
  );
};

export default SignInWithGoogleButton;
