import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/provider";
import constants from "@/utils/constants";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({subsets: ["latin"]});

export async function generateMetadata(): Promise<Metadata> {
    const title = "Aaron Driesch | Portfolio";
    const description = "Das Portfolio von Aaron Driesch. Hier findest du alle Informationen zu meinen Projekten und mir. Meine Benutzernamen, VipexDE , VipexDev und rgxdev";

    return {
        title: title,
        description: description,
        metadataBase: new URL(constants.links.default),
        openGraph: {
            siteName: title,
            locale: "de_DE",
            url: "https://d-aaron.dev",
            type: "website",
            title: title,
            description:
            description,
            images: [
                {
                    url: "https://d-aaron.dev/images/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Aarons Logo"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description:
            description,
            creator: "@rgxdev",
            site: "@rgxdev",
            images: [
                {
                    url: "https://d-aaron.dev/images/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Aarons Logo"
                }
            ]
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
            googleBot: "index, follow"
        },
        alternates: {
            canonical: constants.links.default,
            types: {
                "application/rss+xml": "https://d-aaron.dev/rss.xml"
            }
        },
        applicationName: title,
        appleWebApp: {
            title: title,
            statusBarStyle: "default",
            capable: true
        },
        icons: {
            icon: [
                {
                    url: "/favicon.ico",
                    type: "image/x-icon"
                },
                {
                    url: "/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png"
                }
                // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
            ],
            shortcut: [
                {
                    url: "/favicon.ico",
                    type: "image/x-icon"
                }
            ],
            apple: [
                {
                    url: "/apple-icon-57x57.png",
                    sizes: "57x57",
                    type: "image/png"
                },
                {
                    url: "/apple-icon-60x60.png",
                    sizes: "60x60",
                    type: "image/png"
                }
                // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
            ]
        }
    };
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-black-100`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                innerStyle={{
                    backgroundColor: '#fff'
                }}
                outerStyle={{
                    border: '3px solid #c5d4eb'
                }}
            />
        </ThemeProvider>
        </body>
        </html>
    );
}
