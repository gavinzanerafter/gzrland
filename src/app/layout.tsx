import { Navbar } from "@/components/navbar";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Coding Blog",
  description: "A blog + coding environment",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
