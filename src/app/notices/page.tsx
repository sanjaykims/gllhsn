import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { notices } from "@/data/notices";

export const metadata: Metadata = {
  title: `공지사항 | ${site.choirName}`,
};

export default function NoticesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SectionHeading title="공지사항" />

      <div className="mt-10 divide-y divide-border border-y border-border">
        {notices.map((n) => (
          <details key={n.id} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center gap-4">
              <span className="shrink-0 border border-accent/40 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                {n.category}
              </span>
              <span className="font-medium text-primary">{n.title}</span>
              <span className="ml-auto shrink-0 text-xs text-foreground-muted">
                {n.date}
              </span>
            </summary>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-muted">
              {n.body}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
