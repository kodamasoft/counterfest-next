import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "COUNTERFEST RECORDS",
    description: "COUNTERFEST RECORDS is the Bootleg Sub-Label for KodamaSounds, offering free albums and artistic freedom for unique and experimental music projects. Join us for a more leftfield environment and support for all kinds of music and counter cultures.",
    icons: {
        icon: [
          {
            media: '(prefers-color-scheme: light)',
            url: '/icons/Logo_DarkOrange_Transparent.png',
            href: '/icons/Logo_DarkOrange_Transparent.png',
          },
          {
            media: '(prefers-color-scheme: dark)',
            url: '/icons/Logo_Orange_Transparent.png',
            href: '/icons/Logo_Orange_Transparent.png',
          },
        ],
      },
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { lang } = await params;
    return (
        <html lang={lang}>
            <body
                className={`antialiased bg-white text-black dark:bg-black dark:text-white`}
            >
                {children}
            </body>
        </html>
    );
}
