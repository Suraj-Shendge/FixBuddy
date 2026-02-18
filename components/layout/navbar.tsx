"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/customer/home", "Customer"],
  ["/worker/dashboard", "Worker"],
  ["/admin/dashboard", "Admin"]
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-brand-neon">FixBuddy</Link>
        <div className="flex gap-2">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm ${pathname.startsWith(href) ? "bg-brand-electric text-white" : "text-slate-300"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
