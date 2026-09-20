// 악보 및 파트연습 자료입니다. public/scores 폴더에 파일(PDF, mp3 등)을 넣고 경로를 지정해주세요.
// 예) public/scores/hosanna.pdf -> src: "/scores/hosanna.pdf"
export type ScoreItem = {
  id: string;
  title: string;
  part?: string; // 예: "소프라노", "전체" 등
  type: "악보" | "파트연습";
  src: string;
  date?: string;
};

export const scores: ScoreItem[] = [
  // 아직 등록된 자료가 없습니다. 위 형식으로 항목을 추가해주세요.
];
