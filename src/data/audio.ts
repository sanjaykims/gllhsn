// 주간 찬양 음원입니다. public/audio 폴더에 mp3 파일을 넣고 경로를 지정해주세요.
// 예) public/audio/2026-09-20.mp3 -> src: "/audio/2026-09-20.mp3"
export type AudioTrack = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  src: string;
};

export const audioTracks: AudioTrack[] = [
  // 아직 등록된 음원이 없습니다. 위 형식으로 항목을 추가해주세요.
];
