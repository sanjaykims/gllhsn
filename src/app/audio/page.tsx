import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import AudioPlaylist from "@/components/AudioPlaylist";
import { site } from "@/data/site";
import { audioTracks } from "@/data/audio";

export const metadata: Metadata = {
  title: `주간 찬양 | ${site.choirName}`,
};

export default function AudioPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SectionHeading
        title="주간 찬양"
        description="주일 예배 찬양 음원입니다. 제목을 클릭하면 바로 재생됩니다."
      />

      {audioTracks.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="아직 등록된 음원이 없습니다"
            description="public/audio 폴더에 mp3 파일을 추가하고 src/data/audio.ts 파일에 경로를 등록해주세요."
          />
        </div>
      ) : (
        <div className="mt-10">
          <AudioPlaylist tracks={audioTracks} />
        </div>
      )}
    </div>
  );
}
