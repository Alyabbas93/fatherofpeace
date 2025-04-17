// app/(auth)/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Login from "@/app/(auth)/login/page";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Header from "@/components/header";

export default function AuthLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex bg-[#f8f8f8]">
      <SidebarProvider>
        <AppSidebar className="relative" />
        <main className="w-full">
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}