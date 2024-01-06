import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Montserrat({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "Disney Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}, "overflow-y-hidden
      dark:bg-[#1A1C29] bg-white"`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <Navbar />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
