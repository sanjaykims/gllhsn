import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `새가족 안내 | ${site.choirName}`,
};

const steps = [
  {
    title: "문의하기",
    desc: "아래 연락처로 편하게 문의해주시면 자세히 안내해드립니다.",
  },
  {
    title: "정기 연습 참관",
    desc: `${site.rehearsal.day} ${site.rehearsal.time}, ${site.rehearsal.place}에서 진행되는 정기 연습에 편하게 오셔서 함께해보세요.`,
  },
  {
    title: "파트 배정",
    desc: "지휘자님과 상담 후 소프라노·알토·테너·베이스 중 파트를 배정받습니다.",
  },
  {
    title: "함께 찬양하기",
    desc: `${site.service} 찬양으로 함께 섬기게 됩니다.`,
  },
];

export default function JoinPage() {
  const hasContact = site.contactEmail || site.kakaoChannel;

  return (
    <div>
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Join Us"
            title="새가족 안내"
            description={`노래를 사랑하고 찬양을 통해 하나님께 영광 돌리고 싶은 ${site.churchName} 성도님이라면 누구나 ${site.choirName}에 함께하실 수 있습니다.`}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 rounded-2xl border border-border bg-white/60 p-6 shadow-sm"
            >
              <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-accent-soft">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-primary">{s.title}</p>
                <p className="mt-1 text-sm text-foreground-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-white">
          <p className="font-display text-xl font-semibold">
            함께 찬양할 새가족을 기다립니다
          </p>
          {hasContact ? (
            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-white/85">
              {site.contactEmail && <p>이메일 {site.contactEmail}</p>}
              {site.kakaoChannel && (
                <a
                  href={site.kakaoChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  카카오채널로 문의하기
                </a>
              )}
            </div>
          ) : (
            <p className="mt-4 text-sm text-white/70">
              연락처는 src/data/site.ts 파일의 contactEmail / kakaoChannel
              값을 입력하면 여기에 표시됩니다.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
