"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  MessageCircle,
  Trophy,
  User,
  PanelLeftIcon,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const pathname = usePathname(); // Get current path
  const [openItems, setOpenItems] = useState({
    Achievements: false,
    Profile: false,
  });

  const menuItems = [
    { name: "Dashboard", url: "/", icon: <Home className="mr-2 h-4 w-4" /> },
    {
      name: "Ask True Mother",
      icon: <MessageCircle className="mr-2 h-4 w-4" />,
      url: "/askTrueMother",
    },
    {
      name: "Achievements",
      icon: <Trophy className="mr-2 h-4 w-4" />,
      subLinks: [
        { name: "All Achievements", url: "/allAchievements" },
        { name: "Monthly Challenges", url: "/monthlyChallenges" },
        { name: "Leaderboard", url: "/leaderboard" },
      ],
    },
    {
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
      subLinks: [
        { name: "Account Setting", url: "/accountSettings" },
        { name: "Privacy", url: "/privacy" },
        { name: "Notifications", url: "/notifications" },
      ],
    },
  ];

  const toggleItem = (itemName) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <Sidebar className="h-screen bg-[#ffffff]" collapsible="icon">
      <SidebarHeader className="flex   p-4">
        <SidebarContent className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
          FAMILY FEDERATION
        </SidebarContent>
        <SidebarTrigger className="md:hidden">
          <PanelLeftIcon className="h-5 w-5" />
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <div key={item.name}>
                <SidebarMenuItem>
                  {item.url ? (
                    <Link href={item.url}>
                      <SidebarMenuButton className="flex items-center cursor-pointer justify-between p-2 rounded-md w-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                        <div className="flex items-center">
                          {item.icon}
                          <span className="group-data-[collapsible=icon]:hidden">
                            {item.name}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </Link>
                  ) : (
                    <SidebarMenuButton
                      className="flex cursor-pointer items-center justify-between p-2 rounded-md w-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      onClick={() => toggleItem(item.name)}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.name}
                        </span>
                      </div>
                      {item.subLinks &&
                        (openItems[item.name] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        ))}
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>

                {item.subLinks && openItems[item.name] && (
                  <div className="ml-6">
                    {item.subLinks.map((subLink) => (
                      <SidebarMenuItem key={subLink.name}>
                        <Link href={subLink.url}>
                          <SidebarMenuButton className="p-2 cursor-pointer text-sm rounded-md w-full flex items-center gap-2 text-gray-500 hover:bg-gray-200 transition-colors duration-200">
                          {pathname === subLink.url && (
                              <ChevronRight className="h-4 w-4 " />
                            )}
                            {subLink.name}
                           
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-sm text-gray-500 group-data-[collapsible=icon]:hidden">
        © 2023 Family Federation
      </SidebarFooter>
    </Sidebar>
  );
}
