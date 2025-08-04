import type { Metadata } from "next";
import { Geist, Geist_Mono, Inconsolata } from "next/font/google";
import "../styles/globals.scss";
// import Header from "@/components/Header";
import { ThemeProvider } from 'next-themes'
// import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: "--font-inconsolata", // Assign a CSS variable name for Inconsolata
    display: 'swap', // Recommended for better performance and reduced layout shift
});

export const metadata: Metadata = {
  title: "Kevin's online portfolio",
  description: "Built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} container`}>
        <ThemeProvider>
          {/* <Header /> */}
            {/* <Providers>{children}</Providers> */}
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
