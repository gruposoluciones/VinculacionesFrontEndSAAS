import { Metadata } from "next";
import { LoginMetadata } from "@Auth/features/Login/LoginPage.metadata";
import RegisterLayout from "@Auth/features/Registrar/layout/RegistrarLayout";

export const metadata: Metadata = LoginMetadata;

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <RegisterLayout>
            {children}
        </RegisterLayout>
    );
}