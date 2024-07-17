import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/ThemeProvider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Mhaske | Developer",
  description: "Vaibhav is a full-stack developer from Pune, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
