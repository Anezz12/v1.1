import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import TopBar from "@components/layout/TopBar";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
  title: "AmikomConnect",
  description: "Generated by Next.js",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v4"],
    shortcut: ["/favicon-16x16.png"],
  },
  mainfest: "/site.webmanifest",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 text-light-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
      <Analytics />
    </ClerkProvider>
  );
}
