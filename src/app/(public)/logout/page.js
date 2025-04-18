// app/logout/page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function LogoutPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      // Clear any user-related data from localStorage if needed
      localStorage.removeItem("profileImage");
      // Force refresh to clear any cached data
      window.location.href = "/login";
    };
    
    logout();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p>Logging out...</p>
      </div>
    </div>
  );
}