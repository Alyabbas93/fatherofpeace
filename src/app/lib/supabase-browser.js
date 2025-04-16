import { createBrowserClient } from "@supabase/ssr";
// import { cookies } from "next/headers";
import { createClient as createServerClient } from "../../utils/supabase/server";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
