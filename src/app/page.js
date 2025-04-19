"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return <div className="w-screen h-screen bg-white"></div>;
}






