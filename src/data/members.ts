// 성가대 조직도 정보입니다. 실제 성함/정보로 교체해주세요.
// photo는 비워두면 이니셜 아이콘이 대신 표시됩니다. (예: "/members/conductor.jpg")

export type Leader = {
  role: string;
  name: string;
  photo?: string;
  note?: string;
};

export const leadership: Leader[] = [
  { role: "지휘자", name: "성함을 입력해주세요", note: "" },
  { role: "반주자", name: "성함을 입력해주세요", note: "" },
  { role: "성가대장", name: "성함을 입력해주세요", note: "" },
];

export type Part = {
  name: string;
  count: number;
  leader?: string;
};

export const parts: Part[] = [
  { name: "소프라노", count: 0, leader: "" },
  { name: "알토", count: 0, leader: "" },
  { name: "테너", count: 0, leader: "" },
  { name: "베이스", count: 0, leader: "" },
];
