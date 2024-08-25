import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Header from "../components/Header";
import { AnimatedTabs } from "../components/Nav";
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
              <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full bg-neutral-200 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
              <main className="flex flex-col relative mx-auto mb-14 w-full max-w-screen-sm px-4 pb-8 pt-2 dark:text-white">
                <Header />
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}