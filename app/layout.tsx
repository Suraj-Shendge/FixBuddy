import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";

export const metadata = {
  title: "FixBuddy",
  description: "Trust-driven blue-collar marketplace MVP"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
