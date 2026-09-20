"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import { supabase, SCORES_BUCKET } from "@/lib/supabase";

type ScoreRow = {
  id: string;
  title: string;
  youtube_url: string | null;
  file_url: string | null;
  file_name: string | null;
  created_at: string;
};

function youtubeEmbedUrl(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function ScoresPage() {
  const [rows, setRows] = useState<ScoreRow[] | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadRows() {
    const { data } = await supabase
      .from("gllhsn_scores")
      .select("*")
      .order("created_at", { ascending: false });
    setRows((data as ScoreRow[]) ?? []);
  }

  useEffect(() => {
    loadRows();
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      let fileUrl: string | null = null;
      let fileName: string | null = null;
      if (file) {
        const path = `${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from(SCORES_BUCKET)
          .upload(path, file);
        if (uploadError) throw uploadError;
        fileUrl = supabase.storage.from(SCORES_BUCKET).getPublicUrl(path)
          .data.publicUrl;
        fileName = file.name;
      }
      const { error: rpcError } = await supabase.rpc("gllhsn_scores_insert", {
        p_title: title,
        p_youtube_url: youtubeUrl || null,
        p_file_url: fileUrl,
        p_file_name: fileName,
        p_password: password,
      });
      if (rpcError) throw rpcError;
      setTitle("");
      setYoutubeUrl("");
      setFile(null);
      setPassword("");
      setShowAdd(false);
      await loadRows();
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes("invalid password")
          ? "비밀번호가 올바르지 않습니다."
          : "등록 중 오류가 발생했습니다.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(id: string) {
    const pw = window.prompt("삭제하려면 비밀번호를 입력하세요.");
    if (!pw) return;
    const { error: rpcError } = await supabase.rpc("gllhsn_scores_delete", {
      p_id: id,
      p_password: pw,
    });
    if (rpcError) {
      alert("비밀번호가 올바르지 않습니다.");
      return;
    }
    await loadRows();
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          title="악보 · 자료실"
          description="연습 악보와 참고 영상을 확인하고, 직접 등록할 수 있습니다."
        />
        <button
          type="button"
          onClick={() => setShowAdd((v) => !v)}
          className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-semibold text-white transition-[transform,background-color,color] duration-150 hover:bg-transparent hover:text-primary active:scale-95"
        >
          {showAdd ? "취소" : "자료 등록"}
        </button>
      </div>

      {showAdd && (
        <form
          onSubmit={handleAdd}
          className="mt-6 space-y-4 border border-border bg-background-alt/50 p-6"
        >
          <div>
            <label className="block text-sm font-medium text-primary">
              제목
            </label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm"
              placeholder="예: 주의 사랑 넘치네 - 소프라노 파트"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary">
              파일 (PDF, 이미지)
            </label>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="mt-1 w-full text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary">
              참고 영상 (YouTube 링크)
            </label>
            <input
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm"
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary">
              비밀번호
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={busy}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {busy ? "등록 중..." : "등록하기"}
          </button>
        </form>
      )}

      {rows === null ? (
        <p className="mt-10 text-sm text-foreground-muted">불러오는 중...</p>
      ) : rows.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="아직 등록된 자료가 없습니다"
            description="위의 '자료 등록' 버튼을 눌러 악보 파일이나 참고 영상을 추가해주세요."
          />
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {rows.map((row) => {
            const embed = row.youtube_url ? youtubeEmbedUrl(row.youtube_url) : null;
            return (
              <li key={row.id} className="py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-primary">{row.title}</p>
                    {row.file_url && (
                      <a
                        href={row.file_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-xs text-accent underline underline-offset-2"
                      >
                        ↓ {row.file_name ?? "파일 다운로드"}
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(row.id)}
                    className="shrink-0 text-xs text-foreground-muted hover:text-red-600"
                  >
                    삭제
                  </button>
                </div>
                {embed && (
                  <iframe
                    title={row.title}
                    className="mt-3 aspect-video w-full"
                    src={embed}
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
