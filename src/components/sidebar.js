"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  MessageCircle,
  Trophy,
  User,
  Menu,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState({ Achievements: false, Profile: false });

  const menuItems = [
    { name: "Dashboard", url: "/", icon: <Home className="mr-3 h-6 w-6" /> },
    { name: "Ask True Mother", url: "/askTrueMother", icon: <MessageCircle className="mr-3 h-5 w-5" /> },
    { name: "Social", url: "/social", icon: <Home className="mr-3 h-5 w-5" /> },
    {
      name: "Achievements",
      url: "/achievements",
      icon: <Trophy className="mr-3 h-5 w-5" />,
      subLinks: [
        { name: "All Achievements", url: "/allAchievements" },
        { name: "Monthly Challenges", url: "/monthlyChallenges" },
        { name: "Leaderboard", url: "/leaderboard" },
      ],
    },
    {
      name: "Profile",
      url: "/profile",
      icon: <User className="mr-3 h-5 w-5" />,
      subLinks: [
        { name: "Account Setting", url: "/accountSettings" },
        { name: "Privacy", url: "/privacy" },
        { name: "Notifications", url: "/notifications" },
      ],
    },
  ];

  const handleClick = (item) => {
    if (item.subLinks) {
      setOpenItems((prev) => ({ ...prev, [item.name]: !prev[item.name] })); 
    }
    if (item.url) {
      router.push(item.url); 
    }
  };

  return (
    <Sidebar className="h-screen bg-white p-2 border-r">
      <SidebarHeader className="mb-6 flex flex-row justify-between">
        <span className="text-lg font-bold">FAMILY FEDERATION</span>
        <div className="h-7 w-7 flex items-center justify-center bg-gray-800 rounded">
          <Menu className="h-4 w-4 text-white" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <p className="text-[16px] px-2 font-medium">Main Menu</p>
        <SidebarMenu>
          {menuItems.map((item) => (
            <div key={item.name}>
              <SidebarMenuButton
                className={`flex items-center p-4 rounded-md text-[15px] py-[20px] font-medium text-gray-700 hover:bg-gray-100 w-full transition ${
                  pathname === item.url ? "bg-gray-200 font-semibold" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item.icon}
                {item.name}
                {item.subLinks &&
                  (openItems[item.name] ? (
                    <ChevronDown className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  ))}
              </SidebarMenuButton>

              {item.subLinks && openItems[item.name] && (
                <div className="ml-6">
                  {item.subLinks.map((sub) => (
                    <SidebarMenuItem key={sub.name}>
                      <Link href={sub.url} passHref>
                        <SidebarMenuButton className="p-3 text-[14px] text-gray-600 hover:bg-gray-100 rounded-md w-full">
                          {sub.name}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
