// 공지사항 목록입니다. 배열 맨 위에 새 항목을 추가해주세요 (최신순).
export type Notice = {
  id: string;
  date: string; // YYYY-MM-DD
  category: "공지" | "모집" | "행사" | "기타";
  title: string;
  body: string;
};

export const notices: Notice[] = [
  {
    id: "sample-1",
    date: "2026-09-20",
    category: "공지",
    title: "(예시) 공지사항 작성 방법 안내",
    body:
      "src/data/notices.ts 파일의 notices 배열에 새 항목을 추가하면 이 페이지에 자동으로 표시됩니다. 이 예시 항목은 삭제하셔도 됩니다.",
  },
];
