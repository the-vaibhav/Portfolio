import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { AnimatedTabs } from "../components/AnimatedTabs";
import Header from "../components/Header";
import Nav from "../components/Navbar";
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
    <html lang="en" >
      <body className={myFont.className}>
        <Providers>
          <div className="max-w-7xl mx-auto min-h-screen lg:flex lg:justify-center lg:items-center">
            <div className="flex">
              {/* <Nav /> */}
              <AnimatedTabs />
              <main className="grow overflow-hidden px-6 mb-10 pb-10">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col relative">
                  <Header />
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}