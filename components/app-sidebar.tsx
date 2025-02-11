"use client"

import * as React from "react"
import {
  Folder,
  FolderCheck,
  HomeIcon,
  LayoutDashboard,
  MessageSquareDot,
  Settings,
} from "lucide-react"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SearchForm } from "./search-form"
import NavMain from "./nav-main"

const data = {
  user: {
    name: "user",
    email: "user@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: "Tab 1",
          url: "/tab1",
        },
        {
          title: "tab 2",
          url: "/tab2",
        },
        {
          title: "tab 3",
          url: "/tab3",
        },
      ],
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      items: [
        {
          title: "page 1",
          url: "/page1",
        },
        {
          title: "page 2",
          url: "/page2",
        },
      ],
    },
    {
      title: "Project",
      url: "/project",
      icon: Folder,
      items: [
        {
          title: "Project 1",
          url: "/project-1",
        },
        {
          title: "Project 2",
          url: "/project-2",
        },
        {
          title: "Project 3",
          url: "/project-3",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: FolderCheck,
      items: [
        {
          title: "Task 1",
          url: "/task-1",
        },
        {
          title: "Task 2",
          url: "/task-2",
        },
        {
          title: "Task 3",
          url: "/task-3",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "My details",
          url: "/my-details",
        },
        {
          title: "My profile",
          url: "/my-profile",
        },
        {
          title: "Security",
          url: "/security",
        },
        {
          title: "Integrations",
          url: "/integrations",
        },
        {
          title: "Billings",
          url: "/billings",
        },

      ],
    },
    {
      title: "Messages",
      url: "/messages",
      icon: MessageSquareDot,
      items: [],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="font-bold px-3 text-lg">Overview</div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
