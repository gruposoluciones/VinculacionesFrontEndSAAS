import AuthLayout from "@Auth/features/shared/layout/AuthLayout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
