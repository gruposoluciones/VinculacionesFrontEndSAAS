export default function RegistrarLayout({
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