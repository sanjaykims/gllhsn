"use client";

import { useRef, useState } from "react";
import type { AudioTrack } from "@/data/audio";

export default function AudioPlaylist({ tracks }: { tracks: AudioTrack[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = tracks.find((t) => t.id === activeId) ?? null;

  function playTrack(track: AudioTrack) {
    if (activeId === track.id) {
      // toggle play/pause on the currently selected track
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      return;
    }
    setActiveId(track.id);
    setIsPlaying(true);
    // src change handled via effect below through key prop reset
    requestAnimationFrame(() => {
      audioRef.current?.play();
    });
  }

  return (
    <div>
      <ul className="divide-y divide-border border-y border-border">
        {tracks.map((track) => {
          const active = track.id === activeId;
          return (
            <li key={track.id}>
              <button
                type="button"
                onClick={() => playTrack(track)}
                className={`flex w-full items-center gap-4 py-4 text-left transition-colors ${
                  active ? "bg-accent-soft/50" : "hover:bg-background-alt"
                }`}
              >
                <span
                  className={`w-6 shrink-0 text-center text-sm ${
                    active ? "text-accent" : "text-primary/50"
                  }`}
                  aria-hidden
                >
                  {active && isPlaying ? "❚❚" : "▶"}
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-primary">
                    {track.title}
                  </span>
                  <span className="block text-xs text-foreground-muted">
                    {track.date}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {activeTrack && (
        <div className="sticky bottom-4 mt-6 border border-primary-dark bg-primary p-4 text-white shadow-xl">
          <p className="text-xs text-white/60">{activeTrack.date}</p>
          <p className="font-display font-semibold">{activeTrack.title}</p>
          <audio
            key={activeTrack.id}
            ref={audioRef}
            controls
            autoPlay
            preload="none"
            className="mt-3 w-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={activeTrack.src} />
          </audio>
        </div>
      )}
    </div>
  );
}
