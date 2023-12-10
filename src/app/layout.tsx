import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
// import { AuthProvider } from "../Context/AuthContext";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Review App",
  description: "A college review app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      {/* <AuthProvider> */}
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
      {/* </AuthProvider> */}
    </ClerkProvider>
  );
}
