import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { leadership, parts } from "@/data/members";

export const metadata: Metadata = {
  title: `성가대 소개 | ${site.choirName}`,
};

function Initials({ name }: { name: string }) {
  const initial = name.trim().charAt(0) || "♪";
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-accent-soft">
      {initial}
    </div>
  );
}

export default function AboutPage() {
  const totalMembers = parts.reduce((sum, p) => sum + p.count, 0);

  return (
    <div>
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="About"
            title="성가대 소개"
            description={`${site.churchName} ${site.service}에서 찬양을 섬기는 ${site.choirName}입니다.`}
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h3 className="font-display text-xl font-semibold text-primary">
          섬기는 사람들
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {leadership.map((l) => (
            <div
              key={l.role}
              className="flex flex-col items-center rounded-2xl border border-border bg-white/60 p-8 text-center shadow-sm"
            >
              <Initials name={l.name} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                {l.role}
              </p>
              <p className="mt-1 font-medium text-primary">{l.name}</p>
              {l.note && (
                <p className="mt-1 text-sm text-foreground-muted">{l.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Parts */}
      <section className="border-t border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-primary">
              파트 구성
            </h3>
            {totalMembers > 0 && (
              <p className="text-sm text-foreground-muted">
                전체 대원 {totalMembers}명
              </p>
            )}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {parts.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-border bg-white/60 p-6 text-center shadow-sm"
              >
                <p className="font-display text-2xl font-bold text-primary">
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
        <h3 className="font-display text-xl font-semibold text-primary">
          정기 연습 안내
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "요일", value: site.rehearsal.day },
            { label: "시간", value: site.rehearsal.time },
            { label: "장소", value: site.rehearsal.place },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-white/60 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {item.label}
              </p>
              <p className="mt-1 font-medium text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
