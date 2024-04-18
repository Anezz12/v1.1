import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const layout = {
  title: "AmikomConnect",
  description: "Next 14 Social Media App",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} relative`}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            src="/assets/vidio.mp4"
          />
          <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
            <main className="max-w-4xl mx-auto px-1 py-7 bg-white bg-opacity-0 rounded-lg shadow-lg p-4">
              {children}
            </main>
          </div>
          <div className="text-center text-white py-1 relative z-10">
            <p>
              &copy; {new Date().getFullYear()} AmikomConnect. All rights
              reserved.
            </p>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
