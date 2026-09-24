// 주간 찬양 음원입니다. SoundCloud 공개 트랙을 임베드 방식으로 연결합니다.
export type AudioTrack = {
  id: string;
  dateLabel: string; // 정확한 날짜(YYYY-MM-DD) 또는 "N개월 전" 표시용 라벨
  title: string;
  soundcloudUrl: string;
};

export const audioTracks: AudioTrack[] = [
  { id: "2026-09-20", dateLabel: "2026-09-20", title: "날 위하여 십자가에", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026_09_20_song" },
  { id: "2026-09-13", dateLabel: "2026-09-13", title: "주의 사랑 넘치네", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-09-13" },
  { id: "2026-08-30", dateLabel: "2026-08-30", title: "강하고 담대하라", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-08-30" },
  { id: "2026-08-23", dateLabel: "2026-08-23", title: "오 놀라운 구세주", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-08-23" },
  { id: "2026-08-16", dateLabel: "2026-08-16", title: "아무것도 두려워말라", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-08-16" },
  { id: "2026-08-09", dateLabel: "2026-08-09", title: "성도여 다함께", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-08-09" },
  { id: "2026-08-02", dateLabel: "2026-08-02", title: "나팔불때 나의 이름", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-08-02" },
  { id: "2026-07-19-2", dateLabel: "2026-07-19", title: "힘써 일하라", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-07-19-2" },
  { id: "2026-07-19", dateLabel: "2026-07-19", title: "주일2부예배 봉헌 - 호산나 여성중창", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-07-19" },
  { id: "2026-07-12", dateLabel: "2026-07-12", title: "2026-07-12", soundcloudUrl: "https://soundcloud.com/sanjaykim/2026-07-12" },
  { id: "8a1", dateLabel: "2개월 전", title: "새로운 프로젝트-8", soundcloudUrl: "https://soundcloud.com/sanjaykim/8a1" },
  { id: "7a1", dateLabel: "2개월 전", title: "새로운 프로젝트-7", soundcloudUrl: "https://soundcloud.com/sanjaykim/7a1" },
  { id: "6a1", dateLabel: "2개월 전", title: "새로운 프로젝트-6", soundcloudUrl: "https://soundcloud.com/sanjaykim/6a1" },
  { id: "5a1", dateLabel: "2개월 전", title: "새로운 프로젝트-5", soundcloudUrl: "https://soundcloud.com/sanjaykim/5a1" },
  { id: "4a1", dateLabel: "2개월 전", title: "새로운 프로젝트-4", soundcloudUrl: "https://soundcloud.com/sanjaykim/4a1" },
  { id: "3a1", dateLabel: "2개월 전", title: "새로운 프로젝트-3", soundcloudUrl: "https://soundcloud.com/sanjaykim/3a1" },
  { id: "2a1", dateLabel: "2개월 전", title: "새로운 프로젝트-2", soundcloudUrl: "https://soundcloud.com/sanjaykim/2a1" },
  { id: "1a1", dateLabel: "2개월 전", title: "새로운 프로젝트-1", soundcloudUrl: "https://soundcloud.com/sanjaykim/1a1" },
  { id: "dlbkwsl1x0a3", dateLabel: "2개월 전", title: "새로운 프로젝트", soundcloudUrl: "https://soundcloud.com/sanjaykim/dlbkwsl1x0a3" },
];
