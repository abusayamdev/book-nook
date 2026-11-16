import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Website metadata for browser tabs and search engines
export const metadata: Metadata = {
  title: {
    default: "BookNook | Discover Your Next Favorite Book",
    template: "%s | BookNook",
  },
  description:
    "Discover new stories, explore books and enjoy a better reading experience with BookNook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Shared navigation across all pages */}
        <Navbar />

        {/* Current page content */}
        <main>{children}</main>

        {/* Shared footer across all pages */}
        <Footer />
      </body>
    </html>
  );
}
