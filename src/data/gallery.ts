// 사진 갤러리입니다. public/gallery 폴더에 이미지를 넣고 경로를 지정해주세요.
// 예) public/gallery/2026-summer.jpg -> src: "/gallery/2026-summer.jpg"
export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export const gallery: GalleryItem[] = [
  // 아직 등록된 사진이 없습니다. 위 형식으로 항목을 추가해주세요.
];
