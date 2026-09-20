"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";

const primaryTabs = [
  {
    href: "/",
    label: "홈",
    icon: (active: boolean) => (
      <path
        d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5h3a1 1 0 0 0 1-1v-9"
        fill="none"
        stroke="currentColor"
        strokeWidth={active ? 2.2 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/audio",
    label: "주간 찬양",
    icon: (active: boolean) => (
      <path
        d="M9 18V6.4L19 4v11.6M9 18a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 9 18Zm10-2.4a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.5 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={active ? 2.2 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/notices",
    label: "공지사항",
    icon: (active: boolean) => (
      <path
        d="M18 9a6 6 0 1 0-12 0c0 5.5-2 6.5-2 6.5h16s-2-1-2-6.5ZM10 19.5a2 2 0 0 0 4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={active ? 2.2 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TabBar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreItems = navItems.filter(
    (item) => !primaryTabs.some((t) => t.href === item.href),
  );
  const moreActive = moreItems.some((item) => pathname === item.href);

  return (
    <>
      {moreOpen && (
        <button
          type="button"
          aria-label="닫기"
          onClick={() => setMoreOpen(false)}
          className="fixed inset-0 z-40 bg-primary-dark/40 backdrop-blur-[2px] sm:hidden"
        />
      )}

      {moreOpen && (
        <div className="fixed inset-x-0 bottom-16 z-50 mx-3 mb-2 overflow-hidden rounded-2xl border border-white/60 bg-background/85 shadow-xl backdrop-blur-xl backdrop-saturate-150 sm:hidden">
          <ul className="divide-y divide-border">
            {moreItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className="block px-5 py-3.5 text-[15px] font-medium text-foreground active:bg-background-alt"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav
        aria-label="주요 메뉴"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-background/75 pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_20px_-4px_rgba(76,29,149,0.15)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/55 sm:hidden"
      >
        <ul className="flex items-stretch justify-around">
          {primaryTabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <li key={tab.href} className="flex-1">
                <Link
                  href={tab.href}
                  className={`flex min-h-[52px] flex-col items-center justify-center gap-0.5 py-1.5 transition-transform active:scale-90 ${
                    active ? "text-accent" : "text-foreground-muted"
                  }`}
                >
                  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden>
                    {tab.icon(active)}
                  </svg>
                  <span className="text-[11px] font-medium">{tab.label}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex-1">
            <button
              type="button"
              aria-label="더보기"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className={`flex min-h-[52px] w-full flex-col items-center justify-center gap-0.5 py-1.5 transition-transform active:scale-90 ${
                moreOpen || moreActive ? "text-accent" : "text-foreground-muted"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                width={24}
                height={24}
                aria-hidden
                fill="currentColor"
              >
                <circle cx={5} cy={12} r={1.9} />
                <circle cx={12} cy={12} r={1.9} />
                <circle cx={19} cy={12} r={1.9} />
              </svg>
              <span className="text-[11px] font-medium">더보기</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
