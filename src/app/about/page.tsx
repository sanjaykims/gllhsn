import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { leadership, parts } from "@/data/members";

export const metadata: Metadata = {
  title: `성가대 소개 | ${site.choirName}`,
};

export default function AboutPage() {
  const totalMembers = parts.reduce((sum, p) => sum + p.count, 0);

  return (
    <div>
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            title="성가대 소개"
            description={`${site.churchName} ${site.service}에서 찬양을 섬기는 ${site.choirName}입니다.`}
          />
        </div>
      </section>

      {/* Leadership — a masthead-style credits list, not identical cards */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h3 className="kicker text-xs font-medium uppercase tracking-[0.2em]">
          섬기는 사람들
        </h3>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {leadership.map((l) => (
            <li
              key={l.role}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {l.role}
              </span>
              <span className="font-display flex-1 text-right text-lg font-medium text-primary">
                {l.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Parts — a rule-divided data row, not boxed cards */}
      <section className="border-t border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="kicker text-xs font-medium uppercase tracking-[0.2em]">
              파트 구성
            </h3>
            {totalMembers > 0 && (
              <p className="text-sm text-foreground-muted">
                전체 대원 {totalMembers}명
              </p>
            )}
          </div>
          <div className="mt-6 grid grid-cols-2 divide-y divide-border border-y border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {parts.map((p) => (
              <div key={p.name} className="px-4 py-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">
                  {p.count}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {p.name}
                </p>
                {p.leader && (
                  <p className="mt-1 text-xs text-foreground-muted">
                    파트장 {p.leader}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehearsal info */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h3 className="kicker text-xs font-medium uppercase tracking-[0.2em]">
          정기 연습 안내
        </h3>
        <div className="mt-6 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { label: "요일", value: site.rehearsal.day },
            { label: "시간", value: site.rehearsal.time },
            { label: "장소", value: site.rehearsal.place },
          ].map((item) => (
            <div key={item.label} className="px-4 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.label}
              </p>
              <p className="mt-1.5 font-medium text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
