import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { notices } from "@/data/notices";
import { audioTracks } from "@/data/audio";

export default function Home() {
  const recentNotices = notices.slice(0, 3);
  const latestTrack = audioTracks[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(194,59,110,0.45), transparent 45%), radial-gradient(circle at 85% 0%, rgba(194,59,110,0.3), transparent 40%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 50%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-24 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft">
            {site.churchName} · {site.service}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            {site.choirName}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 italic">
            &ldquo;{site.tagline}&rdquo;
            <span className="ml-2 not-italic text-white/50">
              ({site.verseRef})
            </span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-[1.03]"
            >
              성가대 소개 보기
            </Link>
            <Link
              href="/join"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              새가족 안내
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 px-5">
          {[
            { label: "예배", value: site.service },
            {
              label: "정기 연습",
              value: `${site.rehearsal.day} · ${site.rehearsal.time}`,
            },
            { label: "장소", value: site.rehearsal.place },
          ].map((item) => (
            <div key={item.label} className="px-2 py-6 text-center sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {item.label}
              </p>
              <p className="mt-1 font-medium text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* This week's praise */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Weekly Praise"
          title="이번 주 찬양"
          description="주일 예배 찬양 음원을 다시 들어보세요."
        />
        <div className="mt-8 rounded-2xl border border-border bg-white/60 p-6 shadow-sm">
          {latestTrack ? (
            <div>
              <p className="text-sm text-foreground-muted">
                {latestTrack.date}
              </p>
              <p className="font-display mt-1 text-xl font-semibold text-primary">
                {latestTrack.title}
              </p>
              <audio controls preload="none" className="mt-4 w-full">
                <source src={latestTrack.src} />
              </audio>
            </div>
          ) : (
            <p className="text-sm text-foreground-muted">
              아직 등록된 음원이 없습니다. 전체 음원은{" "}
              <Link href="/audio" className="text-accent underline">
                주간 찬양 페이지
              </Link>
              에서 확인하실 수 있어요.
            </p>
          )}
        </div>
      </section>

      {/* Recent notices */}
      <section className="border-t border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Notice" title="최근 공지사항" />
            <Link
              href="/notices"
              className="text-sm font-semibold text-accent hover:underline"
            >
              전체 보기 →
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white/60">
            {recentNotices.map((n) => (
              <li key={n.id} className="flex items-start gap-4 px-6 py-5">
                <span className="mt-0.5 shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary-dark">
                  {n.category}
                </span>
                <div>
                  <p className="font-medium text-primary">{n.title}</p>
                  <p className="mt-1 text-xs text-foreground-muted">
                    {n.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature band */}
      <section className="bg-primary text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              href: "/join",
              icon: "♫",
              title: "새가족 안내",
              desc: "함께 찬양할 새가족을 언제나 환영합니다.",
            },
            {
              href: "/gallery",
              icon: "❋",
              title: "사진 갤러리",
              desc: "성가대의 소중한 순간들을 만나보세요.",
            },
            {
              href: "/scores",
              icon: "♪",
              title: "악보 · 자료실",
              desc: "연습 악보와 파트연습 자료를 확인하세요.",
            },
          ].map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="flex flex-col items-start gap-2 px-8 py-10 transition-colors hover:bg-white/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent">
                {f.icon}
              </span>
              <p className="font-display mt-2 text-lg font-semibold">
                {f.title}
              </p>
              <p className="text-sm text-white/70">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <SectionHeading
          align="center"
          eyebrow="Join Us"
          title="함께 찬양할 새가족을 기다립니다"
          description={`${site.churchName} 성도라면 누구나 ${site.choirName}에 함께하실 수 있습니다.`}
        />
        <Link
          href="/join"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          새가족 안내 보러가기
        </Link>
      </section>
    </div>
  );
}
