"use client"

import { useEffect } from "react"
import { LoginForm } from "./components/loginForm"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

const Login = () => {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  return (
    <div className="flex h-svh">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <LoginForm />
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <Image src="/assets/Rectangle1082.png" alt="Turn ideas into reality" fill className="object-cover" />
      </div>
    </div>
  )
}

export default Login
