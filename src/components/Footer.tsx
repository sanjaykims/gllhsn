import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-primary text-white/85">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {site.choirName}
            </p>
            <p className="mt-1 text-sm text-white/70">
              {site.churchName} · {site.service}
            </p>
          </div>
          <div className="text-sm text-white/70">
            <p className="italic">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <p className="mt-1">{site.verseRef}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.choirName}. All rights
            reserved.
          </p>
          <a
            href={site.churchUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            {site.churchName} 홈페이지 바로가기
          </a>
        </div>
      </div>
    </footer>
  );
}
