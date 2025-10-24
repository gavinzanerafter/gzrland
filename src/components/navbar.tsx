"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          MyBlog
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/code">
            <Button variant="outline">Code</Button>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
