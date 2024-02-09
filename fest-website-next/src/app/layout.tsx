import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "67thMilestone",
  description: "67thMilestone Event by BMU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative overflow-x-hidden">
          <Navbar />
          <Image
            src={"/assets/background.jpg"}
            alt="website background"
            width={1920}
            height={1400}
            className="absolute object-cover top-0 left-0 w-full h-full z-[-2] bg-fixed bg-center bg-cover bgGrad scroll-smooth"
          ></Image>
          <div className="absolute z-[-1] bg-[#000000A0] top-0 left-0 w-full h-full"></div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
