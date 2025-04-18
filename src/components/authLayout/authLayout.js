// src/components/AuthLayout.jsx

"use client"; // ✅ This file is allowed to use useEffect, useState

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Login from "@/app/(public)/login/page"; // Adjust path if needed
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
