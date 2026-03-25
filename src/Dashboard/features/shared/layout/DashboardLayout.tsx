"use client";

import { SidebarDashboard } from "@Dashboard/features/Home/Sidebar/SidebarDashboard";
import {
    SidebarInset,
    SidebarProvider,
} from "@shared/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <SidebarDashboard variant="inset" />
            <SidebarInset>
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}