# 호산나찬양대 (갈릴리교회)

갈릴리교회 호산나찬양대 홈페이지입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 제작되었습니다.

## 개발 서버 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 콘텐츠 수정하기

대부분의 콘텐츠는 코드를 몰라도 아래 파일들만 수정하면 사이트에 반영됩니다.

| 내용 | 파일 |
| --- | --- |
| 사이트 이름/태그라인/연습 요일·시간·장소 | `src/data/site.ts` |
| 지휘자·반주자·성가대장, 파트 인원 | `src/data/members.ts` |
| 공지사항 | `src/data/notices.ts` |
| 찬양 영상 (유튜브) | `src/data/videos.ts` |
| 사진 갤러리 | `src/data/gallery.ts` (이미지는 `public/gallery/`에 추가) |
| 주간 찬양 음원 | `src/data/audio.ts` (mp3는 `public/audio/`에 추가) |
| 악보 · 파트연습 자료 | `src/data/scores.ts` (파일은 `public/scores/`에 추가) |

각 파일 상단에 작성 예시와 안내 주석이 있습니다.

## 배포 (Vercel)

1. [vercel.com](https://vercel.com)에 GitHub 계정으로 로그인
2. "Add New Project" → 이 저장소(gllhsn) 선택 → Deploy
3. 이후 `main` 브랜치에 푸시할 때마다 자동으로 재배포됩니다.

## 디자인

현재 색상 팔레트는 임시 값입니다 (`src/app/globals.css`의 `:root` 변수). 원하는 색상 조합을 알려주시면 반영하겠습니다.
