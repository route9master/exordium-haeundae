import { SITE } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-night px-6 text-center text-pearl">
      <p className="eyebrow text-goldl">404</p>
      <h1 className="mt-4 font-serif text-[30px] font-semibold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 text-[15px] text-pearl/70">주소를 다시 확인하시거나 첫 화면으로 이동해 주세요.</p>
      <a href="/" className="mt-8 inline-flex h-12 items-center bg-pearl px-7 text-[15px] font-semibold text-ink">
        {SITE.name} 첫 화면
      </a>
    </main>
  );
}
