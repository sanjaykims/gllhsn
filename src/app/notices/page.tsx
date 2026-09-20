import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { notices } from "@/data/notices";

export const metadata: Metadata = {
  title: `공지사항 | ${site.choirName}`,
};

export default function NoticesPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading eyebrow="Notice" title="공지사항" />

      <div className="mt-10 space-y-3">
        {notices.map((n) => (
          <details
            key={n.id}
            className="group rounded-2xl border border-border bg-white/60 p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4">
              <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary-dark">
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
