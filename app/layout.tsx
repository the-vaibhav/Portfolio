import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Providers } from "../components/ThemeProvider";
import "../styles/globals.css";

const myFont = M_PLUS_Rounded_1c({ weight: ["400", "700", "800"], subsets: ["latin"], variable: "--my-font-family" });

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
      <body className={myFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
