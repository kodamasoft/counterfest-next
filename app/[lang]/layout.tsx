import type { Metadata } from "next";
import "./globals.css";
import layoutStyles from "@/components/layout.module.css";
import Footer from "@/components/footer";


export const metadata: Metadata = {
    title: "COUNTERFEST RECORDS",
    description: "COUNTERFEST RECORDS is the Bootleg Sub-Label for KodamaSounds, offering free albums and artistic freedom for unique and experimental music projects. Join us for a more leftfield environment and support for all kinds of music and counter cultures.",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}>) {
    const { lang } = await params;
    return (
        <html lang={lang}>
            <body
                className={`antialiased bg-white text-black dark:bg-black dark:text-white`}
            >
                <div className={layoutStyles.main_container}>
                    <div className={layoutStyles.main + " " + " min-h-screen"}>
                        <main>{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
