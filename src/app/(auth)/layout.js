// app/(auth)/layout.jsx
"use client";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Header from "@/components/header";

export default function AuthLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    // Check auth state
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      const path = window.location.pathname

        if((path === "/login" || path === "/signup") && (!user || error)){
          setLoading(false);
          return;
        }

      
      if (error || !user) {
        router.push("/login");
        return;
      }
      
      setUser(user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          router.push("/login");
        }
        setUser(session?.user ?? null);
      }
    );

    return () => subscription?.unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
   <SessionContextProvider
   initailSession={session}>
    {
      loading ? <div>Loading ... </div> : <>{children}</>
    }

   </SessionContextProvider>
  );
}