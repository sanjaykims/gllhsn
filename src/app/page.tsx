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
      {/* Hero — asymmetric, staff-line texture instead of a gradient glow */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div aria-hidden className="staff-lines pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 46px, rgba(255,255,255,0.5) 46px 47px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-24 sm:py-28 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              {site.churchName} · {site.service}
            </p>
            <h1 className="font-display mt-6 max-w-2xl text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl">
              {site.choirName}
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/audio"
                className="border border-accent bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-accent-soft"
              >
                주간 찬양
              </Link>
              <Link
                href="/scores"
                className="border-b border-white/40 pb-0.5 text-sm font-semibold text-white transition-colors hover:border-white hover:text-accent-soft"
              >
                악보 자료실
              </Link>
            </div>
          </div>
          <p className="font-display border-l border-white/25 pl-6 text-lg italic leading-relaxed text-white/75 md:text-xl">
            &ldquo;{site.tagline}&rdquo;
            <span className="mt-2 block text-sm not-italic tracking-wide text-white/45">
              {site.verseRef}
            </span>
          </p>
        </div>
      </section>

      {/* Quick info strip — a rule-divided data row, not boxed cards */}
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.label}
              </p>
              <p className="mt-1.5 font-medium text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* This week's praise */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading title="이번 주 찬양" description="주일 예배 찬양 음원을 다시 들어보세요." />
        <div className="mt-8 border border-border bg-background-alt/50 p-6">
          {latestTrack ? (
            <div>
              <p className="text-sm text-foreground-muted">{latestTrack.dateLabel}</p>
              <p className="font-display mt-1 text-xl font-semibold text-primary">
                {latestTrack.title}
              </p>
              <iframe
                title={latestTrack.title}
                className="mt-4 w-full"
                height={166}
                allow="autoplay"
                loading="lazy"
                src={`https://w.soundcloud.com/player/?${new URLSearchParams({
                  url: latestTrack.soundcloudUrl,
                  color: "a16207",
                  auto_play: "false",
                  show_user: "true",
                  visual: "false",
                }).toString()}`}
              />
            </div>
          ) : (
            <p className="text-sm text-foreground-muted">
              아직 등록된 음원이 없습니다. 전체 음원은{" "}
              <Link href="/audio" className="text-accent underline underline-offset-2">
                주간 찬양 페이지
              </Link>
              에서 확인하실 수 있어요.
            </p>
          )}
        </div>
      </section>

      {/* Recent notices — a rule-divided list, no card box */}
      <section className="border-t border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="최근 공지사항" />
            <Link href="/notices" className="text-sm font-semibold text-accent hover:underline">
              전체 보기
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {recentNotices.map((n) => (
              <li key={n.id} className="flex items-start gap-4 py-5">
                <span className="mt-0.5 shrink-0 border border-accent/40 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                  {n.category}
                </span>
                <div>
                  <p className="font-medium text-primary">{n.title}</p>
                  <p className="mt-1 text-xs text-foreground-muted">{n.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pull-quote band — full-bleed, plum + staff lines, one strong element */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div aria-hidden className="staff-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <p className="font-display text-2xl italic leading-snug sm:text-3xl">
            &ldquo;새 노래로 여호와께 노래하라 온 땅이여 여호와께 노래할지어다&rdquo;
          </p>
          <p className="mt-4 text-sm tracking-wide text-white/50">시편 96:1</p>
          <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/join" className="border-b border-white/30 pb-0.5 hover:border-white">
              새가족 안내
            </Link>
            <Link href="/gallery" className="border-b border-white/30 pb-0.5 hover:border-white">
              사진 갤러리
            </Link>
            <Link href="/scores" className="border-b border-white/30 pb-0.5 hover:border-white">
              악보 · 자료실
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <SectionHeading
          align="center"
          title="함께 찬양할 새가족을 기다립니다"
          description={`${site.churchName} 성도라면 누구나 ${site.choirName}에 함께하실 수 있습니다.`}
        />
        <Link
          href="/join"
          className="mt-8 inline-block border border-primary bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-primary"
        >
          새가족 안내 보러가기
        </Link>
      </section>
    </div>
  );
}
