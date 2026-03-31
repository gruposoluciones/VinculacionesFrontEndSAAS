"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@shared/components/ui/button"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@shared/components/ui/sidebar"
import { MenuItem } from "@shared/types/MenuItem"
import { useRouter } from "next/navigation"

interface NavMainProps {
    items: MenuItem[]
}

export function NavMain({
    items,
}: NavMainProps
) {
    const router = useRouter();
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.MenuName}>
                            <SidebarMenuButton className="hover:cursor-pointer"
                                tooltip={item.MenuName} onClick={() => router.push(item.Route)} >
                                {/* {item.icon && <item.icon />} */}
                                <span>{item.MenuName}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
