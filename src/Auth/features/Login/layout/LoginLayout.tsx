export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`antialiased`}>
            {children}
        </div>
    );
}