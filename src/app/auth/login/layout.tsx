import { Metadata } from "next";
import LoginLayout from "@Auth/features/Login/layout/LoginLayout";
import { LoginMetadata } from "@Auth/features/Login/LoginPage.metadata";

export const metadata: Metadata = LoginMetadata;

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LoginLayout>
            {children}
        </LoginLayout>
    );
}