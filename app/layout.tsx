import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { Divider, Link } from "@nextui-org/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full flex-grow">{children}</main>
            <Button
              isIconOnly
              aria-label="theme-switch"
              className="fixed bottom-4 right-4"
            >
              <ThemeSwitch />
            </Button>
            <footer className="w-full py-8">
              <div className="w-full flex flex-row items-center justify-center text-default-600">
                <p>©&ensp;Chloe De Los Santos&emsp;{new Date().getFullYear()}</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
