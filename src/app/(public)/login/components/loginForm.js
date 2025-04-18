"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { login, signup } from "@/app/lib/auth-actions";
import { Eye, Facebook,  Globe } from "lucide-react";
import { useState } from "react";
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import SignUpPage from "../../signup/page";
;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="mx-auto max-w-sm rounded-2xl shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Log In</CardTitle>
        <CardDescription className="text-sm mt-2">
          You’ll be up & running in 2 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
          <div className="grid gap-4">
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Enter your email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="justtellme@gmail.com"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Enter your password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pr-10"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Remember me + Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Link
                href="#"
                className="text-red-500 hover:underline text-sm font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              formAction={login}
              className="w-full flex justify-center items-center gap-2"
            >
              Continue →
            </Button>
          </div>
        </form>
        <div className="mt-2 text-[#929292] text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="underline font-medium">
  Get started here
</Link>


        </div>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-400 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6">
  <Button variant="outline" size="icon" className="rounded-full  bg-black hover:bg-gray-800 cursor-pointer">
    <Facebook className="h-5 w-5 " color="white" />
  </Button>
  
  <SignInWithGoogleButton/> 
</div>



      </CardContent>
    </Card>
  );
}
