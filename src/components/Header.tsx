"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-background/80 shadow-[0_1px_20px_-4px_rgba(76,29,149,0.15)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 font-display text-sm font-bold text-primary">
            호
          </span>
          <span className="h-8 w-px bg-border" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-[0.15em] text-primary">
              {site.choirName.split("").join(" ")}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted">
              {site.churchName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="hidden h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 sm:flex lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-foreground/85 hover:bg-background-alt hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
