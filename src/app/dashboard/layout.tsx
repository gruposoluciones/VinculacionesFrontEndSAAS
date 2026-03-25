import DashboardLayout from "../../Dashboard/features/shared/layout/DashboardLayout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}