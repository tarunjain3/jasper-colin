"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboard, Folder, FolderCheck, Settings, MessageSquareDot, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { title: "Overview", icon: SunIcon, url: "#" },
    { title: "Home", icon: HomeIcon, url: "#" },
    { title: "Dashboard", icon: LayoutDashboard, url: "#" },
    { title: "Projects", icon: Folder, url: "#" },
    { title: "Tasks", icon: FolderCheck, url: "#" },
    { title: "Settings", icon: Settings, url: "#" },
    { title: "Messages", icon: MessageSquareDot, url: "#" },
];

export function CustomSidebarRail() {
    return (
        <div
            className={cn(
                "flex h-screen w-16 flex-col items-center justify-between border-r bg-muted pt-2 pb-4 transition-all fixed left-0 top-0 bottom-0 z-10"
            )}
        >
            <div className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                    <Link key={item.title} href={item.url} passHref className="">
                        <Button variant="ghost" size="icon" className="relative group">
                            <item.icon className="h-5 w-5" />
                        </Button>
                    </Link>
                ))}
            </div>
            <Avatar>
                <AvatarImage src="/avatars/shadcn.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </div>
    );
}
