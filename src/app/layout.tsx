import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/navbar";

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
        {/* Shared navigation across all public pages */}
        <Navbar />

        {/* Current page content */}
        {children}
      </body>
    </html>
  );
}
