export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                }}
            >{children}</body>
        </html>
    );
}
