"use server";
import { cookies } from "next/headers";
// import { createSupabaseClient } from "@/app/lib/supabase/server";
import { createServerClient } from "@supabase/ssr";

export async function createSupabaseClient() {
  const cookieStore = await cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value
      },
      set(name, value, options) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // Safe fallback for Server Components
        }
      },
      remove(name, options) {
        try {
          cookieStore.set({ name, value: '', ...options })
        } catch (error) {
          // Safe fallback
        }
      }
    }
  })
}