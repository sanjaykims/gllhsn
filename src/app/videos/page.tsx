import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import { site } from "@/data/site";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: `찬양 영상 | ${site.choirName}`,
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Videos"
        title="찬양 영상"
        description="지난 예배 찬양 영상을 다시 볼 수 있습니다."
      />

      {videos.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="아직 등록된 영상이 없습니다"
            description="src/data/videos.ts 파일에 유튜브 영상 ID를 추가하면 이 페이지에 표시됩니다."
          />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {videos.map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-2xl border border-border bg-white/60 shadow-sm"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-foreground-muted">{v.date}</p>
                <p className="font-display mt-1 font-semibold text-primary">
                  {v.title}
                </p>
                {v.description && (
                  <p className="mt-1 text-sm text-foreground-muted">
                    {v.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
