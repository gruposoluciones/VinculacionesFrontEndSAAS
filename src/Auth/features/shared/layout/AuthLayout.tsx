import { AuthNavbar } from "@Auth/features/shared/components/AuthNavbar";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="Auth_layout">
            <AuthNavbar />
            {children}
        </div>
    );
}
