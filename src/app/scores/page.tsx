import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import { site } from "@/data/site";
import { scores } from "@/data/scores";

export const metadata: Metadata = {
  title: `악보 · 자료실 | ${site.choirName}`,
};

export default function ScoresPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SectionHeading
        title="악보 · 자료실"
        description="연습 악보와 파트연습 자료를 다운로드할 수 있습니다."
      />

      {scores.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="아직 등록된 자료가 없습니다"
            description="public/scores 폴더에 파일을 추가하고 src/data/scores.ts 파일에 경로를 등록해주세요."
          />
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {scores.map((s) => (
            <li key={s.id}>
              <a
                href={s.src}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 transition-colors hover:bg-background-alt"
              >
                <span className="w-6 shrink-0 text-center text-primary">
                  ↓
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-primary">
                    {s.title}
                  </span>
                  <span className="block text-xs text-foreground-muted">
                    {s.type}
                    {s.part ? ` · ${s.part}` : ""}
                    {s.date ? ` · ${s.date}` : ""}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
