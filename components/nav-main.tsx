"use client"

import { Minus, PlusIcon, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"


type SidebarItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

const NavMain = ({
  items,
}: {
  items: SidebarItem[]
}) => {
  const pathname = usePathname()

  const isActiveTab = (url: string) => pathname.includes(url)
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items?.map((item) => (
          <SidebarMenuItem key={item.title}>
            {item?.items?.length ? (
              <Collapsible
                asChild
                defaultOpen={isActiveTab(item.url)}
                className="group/collapsible"
              >
                <div>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <PlusIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto transition-transform duration-200 hidden group-data-[state=open]/collapsible:block" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={isActiveTab(item.url + subItem.url)}>
                            <a href={item.url + subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ) : (
              <SidebarMenuButton asChild isActive={isActiveTab(item.url)}>
                <a href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavMain