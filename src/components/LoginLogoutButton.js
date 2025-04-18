"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/app/lib/auth-actions";
import {  LogOut } from "lucide-react";

const LoginButton = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const supabase = createClient();





  
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    return (
      <Button className="text-black cursor-pointer text-center font-[Readex_Pro] text-base not-italic font-normal leading-normal w-full mt-5" variant="outline"
        onClick={() => {
          signout();
          setUser(null);
        }}
      >
       <LogOut/>
       <h3 className="text-black text-center font-[Readex_Pro] text-base not-italic font-normal leading-normal">Log out</h3> 
      </Button>
    );
  }
  return (
    <Button className="text-black cursor-pointer text-center font-[Readex_Pro] text-base not-italic font-normal leading-normal w-full mt-5"      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
