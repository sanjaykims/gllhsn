# 주간 찬양 음원 업데이트 가이드

매주 새 예배 찬양 음원을 사이트(`/audio`)에 올리는 절차입니다. Claude 세션이 이어받아
작업할 때 아래 순서를 그대로 따르면 됩니다.

## 1. 새 트랙 추가

`src/data/audio.ts`의 `audioTracks` 배열 **맨 앞**에 새 항목을 추가합니다. 최신 트랙이
위로 오도록 정렬되어 있으므로 순서를 지켜주세요.

```ts
{ id: "YYYY-MM-DD", dateLabel: "YYYY-MM-DD", title: "곡 제목", soundcloudUrl: "https://soundcloud.com/..." },
```

- `id`는 날짜(`YYYY-MM-DD`)를 기본으로 사용하고, 같은 날 두 곡 이상이면 `-2` 등을 붙입니다
  (예: `2026-07-19-2`).
- `soundcloudUrl`은 SoundCloud 트랙 링크면 됩니다 (`on.soundcloud.com` 단축 링크,
  `soundcloud.com/사용자명/트랙` 형태 모두 가능).

## 2. 커밋 & 배포

1. `src/data/audio.ts` 변경사항만 커밋
2. `main`에 병합되면 Vercel이 GitHub 연동으로 자동 재배포
3. 배포가 끝나면 https://gllhsn.vercel.app/audio 에서 새 트랙이 맨 위에 뜨는지 확인

## 3. 배포가 안 될 때 확인할 것 — 중요

Vercel은 **빌드가 실패하면 이전에 성공한 배포를 그대로 서빙**합니다. 즉 사이트는 계속
"정상적으로" 떠 있어 보이지만, 실제로는 최신 커밋 내용(새 트랙 포함)이 반영되지 않은
오래된 버전일 수 있습니다. 반드시 아래를 확인하세요.

- Vercel 프로젝트(`gllhsn`, team `sanjaykims-projects`)의 최신 프로덕션 배포 상태가
  `READY`인지 확인 (`ERROR`면 이전 배포가 계속 서빙되고 있는 것)
- 어떤 커밋이 실제로 라이브에 떠 있는지는 배포의 `githubCommitSha`로 확인

### 2026-09-23에 있었던 일 (참고용)

- `main`에 "악보 자료실" 페이지(`/scores`, Supabase 연동)가 추가되면서, 빌드 시점에
  `src/lib/supabase.ts`가 `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  환경변수를 요구하는데 Vercel 프로젝트에 해당 환경변수가 설정되어 있지 않아 빌드가
  계속 실패했습니다 (`Error: supabaseUrl is required.`).
- 이 기간 동안 사이트는 그 이전 커밋(`4f6fb42`)으로 계속 떠 있었고, 새로 추가한 오디오
  트랙이 반영되지 않아 "배포됐는데 왜 안 보이지" 상태였습니다.
- 해결: Vercel 프로젝트 Settings → Environment Variables에 아래 두 값을 추가(Production /
  Preview / Development 전체 적용)한 뒤 재배포:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - 값은 이 사이트가 쓰는 Supabase 프로젝트(Settings → API)에서 가져온 URL과 anon/public
    key입니다. `gllhsn_scores`, `gllhsn_admin_secret` 테이블이 있는 프로젝트가 맞는지
    확인하세요.
- 이 환경변수는 이미 설정 완료된 상태입니다. 만약 다시 같은 에러(`supabaseUrl is required`)로
  빌드가 실패한다면, 누군가 Vercel 프로젝트의 환경변수를 지웠거나 다른 프로젝트로
  재연결된 것이니 위 값을 다시 확인/재설정하세요.

## 4. 그 외 참고

- `tsconfig.tsbuildinfo`는 빌드 캐시 파일이라 git에 커밋하면 안 됩니다. `.gitignore`에
  `*.tsbuildinfo`가 이미 등록되어 있습니다.
- 콘텐츠 파일 전체 목록은 저장소 루트 `README.md`의 "콘텐츠 수정하기" 표를 참고하세요.
