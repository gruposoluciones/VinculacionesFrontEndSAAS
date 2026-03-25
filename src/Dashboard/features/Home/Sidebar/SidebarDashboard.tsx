"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@shared/components/ui/sidebar'
import React from 'react'
import { NavMain } from './components/NavMain'
import { IconInnerShadowTop } from '@tabler/icons-react'
import { NavUser } from './components/NavUser'
import { useSidebar } from './hooks/useSidebar'

export const SidebarDashboard = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { menu, user, logout } = useSidebar();
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!">
                            <a href="#">
                                <IconInnerShadowTop className="size-5!" />
                                <span className="text-base font-semibold">Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={menu} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} logout={logout} />
            </SidebarFooter>
        </Sidebar>
    )
}
