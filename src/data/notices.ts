// 공지사항 목록입니다. 배열 맨 위에 새 항목을 추가해주세요 (최신순).
export type Notice = {
  id: string;
  date: string; // YYYY-MM-DD
  category: "공지" | "모집" | "행사" | "기타";
  title: string;
  body: string;
};

export const notices: Notice[] = [];
