import type { Metadata } from "next";
import { Forum, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const forum = Forum({
  variable: "--font-forum",
  weight: "400",
  subsets: ["latin"],
});

const poppinsLight = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Low",
  description: "Justin Low's Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${forum.variable} ${poppinsLight.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
