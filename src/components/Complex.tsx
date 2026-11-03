"use client";

import { useState } from "react";
import { GALLERY } from "@/data/content";
import { DISCLAIMER } from "@/data/site";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

// 배치: [0] 조감도(큰 칸) [1][2] 투시도 주간·야간(오른쪽 세로) [4] 배치도 [3] 저층부
const LAYOUT: { i: number; cls: string; ratio: string }[] = [
  { i: 0, cls: "md:col-span-8 md:row-span-2", ratio: "aspect-[16/10] md:aspect-auto md:h-full" },
  { i: 1, cls: "md:col-span-4", ratio: "aspect-[16/10]" },
  { i: 2, cls: "md:col-span-4", ratio: "aspect-[16/10]" },
  { i: 4, cls: "md:col-span-7", ratio: "aspect-[16/11]" },
  { i: 3, cls: "md:col-span-5", ratio: "aspect-[16/11] md:aspect-auto md:h-full" },
];

export default function Complex() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="complex" className="bg-paper py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              overline="Site & Design"
              title="단지안내"
              lead="송정해변을 향해 101동·102동 2개동이 자리하고, 호텔이 함께 계획된 복합 단지입니다."
            />
          </div>
          <Reveal className="lg:col-span-5">
            <dl className="grid grid-cols-3 border-t border-text">
              {[
                ["동수", "아파트 2개동"],
                ["규모", "B5 ~ 32F"],
                ["복합", "호텔 (계획)"],
              ].map(([k, v]) => (
                <div key={k} className="pt-4">
                  <dt className="text-[13px] text-mute">{k}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-text md:text-[16px]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-3 md:mt-16 md:grid-cols-12 md:gap-4">
          {LAYOUT.map(({ i, cls, ratio }) => {
            const g = GALLERY[i];
            const isPlan = g.caption === "단지 배치도";
            return (
              <figure key={g.src} className={`${cls} flex flex-col`}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className={`group relative block w-full flex-1 overflow-hidden ${isPlan ? "bg-[#2b3133]" : "bg-sand"}`}
                  aria-label={`${g.caption} 크게 보기`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={i === 0 || isPlan ? g.src : g.thumb}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className={`${ratio} w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]`}
                  />
                </button>
                <figcaption className="mt-2 flex items-center justify-between text-[13px] text-mute">
                  <span>{g.caption}</span>
                  <span className="text-[12px] text-mute/80">크게 보기</span>
                </figcaption>
              </figure>
            );
          })}
        </Reveal>

        <p className="mt-6 text-[12px] leading-[1.7] text-mute">
          {DISCLAIMER.cg} 이미지 속 호텔 브랜드·간판 표기는 확정되지 않았으며 변경될 수 있습니다.
        </p>
      </div>

      <Lightbox items={GALLERY} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}
