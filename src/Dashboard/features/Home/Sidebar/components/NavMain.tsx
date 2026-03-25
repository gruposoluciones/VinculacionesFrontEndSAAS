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

interface NavMainProps {
    items: MenuItem[]
}

export function NavMain({
    items,
}: NavMainProps
) {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton tooltip={item.name}>
                                {/* {item.icon && <item.icon />} */}
                                <span>{item.name}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
