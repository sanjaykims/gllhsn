// 찬양 영상 목록입니다. youtubeId는 유튜브 영상 URL의 v= 뒤 값(또는 youtu.be/ 뒤 값)입니다.
// 예) https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  youtubeId: "dQw4w9WgXcQ"
export type VideoItem = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  youtubeId: string;
  description?: string;
};

export const videos: VideoItem[] = [
  // 아직 등록된 영상이 없습니다. 위 형식으로 항목을 추가해주세요.
];
