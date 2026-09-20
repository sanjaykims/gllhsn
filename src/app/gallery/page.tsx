import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: `사진 갤러리 | ${site.choirName}`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        title="사진 갤러리"
        description="성가대의 소중한 순간들을 모았습니다."
      />

      {gallery.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="아직 등록된 사진이 없습니다"
            description="public/gallery 폴더에 이미지를 추가하고 src/data/gallery.ts 파일에 경로를 등록해주세요."
          />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.id}
              className="group relative aspect-square overflow-hidden border border-border bg-background-alt"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {g.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
