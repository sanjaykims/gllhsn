import type { AudioTrack } from "@/data/audio";

function embedSrc(soundcloudUrl: string) {
  const params = new URLSearchParams({
    url: soundcloudUrl,
    color: "a16207",
    auto_play: "false",
    show_user: "true",
    visual: "false",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export default function AudioPlaylist({ tracks }: { tracks: AudioTrack[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {tracks.map((track) => (
        <li key={track.id} className="py-5">
          <p className="font-medium text-primary">{track.title}</p>
          <p className="mt-0.5 text-xs text-foreground-muted">{track.dateLabel}</p>
          <iframe
            title={track.title}
            className="mt-3 w-full"
            height={166}
            allow="autoplay"
            loading="lazy"
            src={embedSrc(track.soundcloudUrl)}
          />
        </li>
      ))}
    </ul>
  );
}
