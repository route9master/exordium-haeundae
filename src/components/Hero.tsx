import { HERO_STATS } from "@/data/content";
import { DISCLAIMER, SITE } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative bg-night text-pearl md:flex md:min-h-[100svh] md:flex-col">
      {/* 모바일: 이미지 위 / 문구 아래, 데스크톱: 이미지 전체 + 문구 오버레이 */}
      <div className="relative h-[54svh] min-h-[380px] md:absolute md:inset-0 md:h-auto md:min-h-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/render/hero-beach-m.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/render/hero-beach.webp"
            alt="송정해수욕장과 바다를 내려다보는 엑소디움 시그니처 해운대 조감도"
            width={2560}
            height={1429}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          />
        </picture>
        <div className="absolute inset-x-0 top-0 h-[var(--header-h)] bg-night/30 md:hidden" aria-hidden />
        <div className="absolute inset-0 hidden bg-night/45 md:block" aria-hidden />
      </div>

      <div className="container-site relative pb-10 pt-8 md:flex md:flex-1 md:flex-col md:justify-end md:pb-14 md:pt-[calc(var(--header-h)+48px)]">
        <div className="md:ml-auto md:w-[min(560px,46%)]">
          <p className="eyebrow text-goldl">Songjeong Beach · Haeundae, Busan</p>
          <h1 className="mt-4 font-serif text-[34px] font-semibold leading-[1.28] md:mt-5 md:text-[64px] md:leading-[1.18]">
            송정 바다 앞에서
            <br />
            10년을 머뭅니다.
          </h1>
          <p className="mt-4 text-[15px] leading-[1.7] text-pearl/85 md:mt-6 md:text-[18px]">
            {SITE.name}
            <span className="mx-2 text-pearl/40">|</span>
            {SITE.type}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
            <a
              href="#register"
              className="inline-flex h-12 items-center bg-pearl px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              관심고객 등록
            </a>
            <a
              href="#overview"
              className="inline-flex h-12 items-center border border-pearl/50 px-7 text-[15px] font-semibold text-pearl transition-colors hover:border-pearl"
            >
              사업개요 보기
            </a>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 border-t border-pearl/25 md:mt-16 md:grid-cols-4">
          {HERO_STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "py-5 md:py-6",
                i % 2 === 1 ? "border-l border-pearl/25 pl-5" : "",
                i >= 2 ? "border-t border-pearl/25 md:border-t-0" : "",
                i > 0 ? "md:border-l md:border-pearl/25 md:pl-8" : "",
              ].join(" ")}
            >
              <dt className="text-[13px] text-pearl/65">{s.label}</dt>
              <dd className="mt-1">
                <span className="num font-serif text-[28px] font-semibold md:text-[38px]">{s.value}</span>
                <span className="ml-1 text-[15px] text-pearl/80">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[11px] leading-[1.6] text-pearl/50">{DISCLAIMER.cg}</p>
      </div>
    </section>
  );
}
