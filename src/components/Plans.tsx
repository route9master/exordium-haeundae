"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { PLANS } from "@/data/content";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Plans() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = PLANS[active];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + PLANS.length) % PLANS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const items = [{ src: p.img, alt: `${p.title} 평면도`, caption: `${p.title} 평면도`, w: p.w, h: p.h }];

  return (
    <section id="plans" className="bg-paper py-24 md:py-36">
      <div className="container-site">
        <SectionHeader overline="Unit Plan" title="평면안내" lead="전용 59㎡와 84㎡ 두 가지 구성, 3개 타입입니다." />

        <Reveal className="mt-12 md:mt-16">
          <div role="tablist" aria-label="평면 타입" className="flex border-b border-line" onKeyDown={onKey}>
            {PLANS.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${t.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`-mb-px h-14 min-w-[96px] border-b-2 px-5 text-[16px] font-semibold transition-colors md:min-w-[140px] md:text-[18px] ${
                  i === active ? "border-text text-text" : "border-transparent text-mute hover:text-text"
                }`}
              >
                <span className="num">{t.tab}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${p.id}`}
            aria-labelledby={`tab-${p.id}`}
            className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-7">
              <button
                type="button"
                onClick={() => setZoom(0)}
                className="block w-full border border-line bg-white p-4 md:p-8"
                aria-label={`${p.title} 평면도 크게 보기`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img key={p.img} src={p.img} alt={`${p.title} 평면도`} width={p.w} height={p.h} className="mx-auto h-auto w-full" />
              </button>
              <p className="mt-3 text-[12px] leading-[1.7] text-mute">
                ※ 평면도는 이해를 돕기 위한 것으로 실제 시공 시 차이가 있을 수 있으며, 인허가 과정에서 변경될 수 있습니다.
              </p>
            </div>

            <div className="lg:col-span-5">
              <h3 className="leading-none text-text">
                <span className="num font-serif text-[48px] font-semibold md:text-[60px]">{p.title.replace(/㎡.*/, "")}</span>
                <span className="ml-1 text-[20px] font-semibold md:text-[24px]">{p.title.replace(/^\d+/, "")}</span>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-mute md:text-[17px]">{p.lead}</p>

              <table className="mt-8 w-full border-t border-text text-left">
                <caption className="sr-only">{p.title} 면적표</caption>
                <tbody>
                  {p.area.map((a) => (
                    <tr key={a.label} className="border-b border-line">
                      <th scope="row" className="py-3.5 text-[14px] font-medium text-mute md:text-[15px]">
                        {a.label}
                      </th>
                      <td className="num py-3.5 text-right text-[16px] font-semibold text-text md:text-[17px]">{a.value}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-line">
                    <th scope="row" className="py-3.5 text-[14px] font-medium text-mute md:text-[15px]">
                      세대수
                    </th>
                    <td className="num py-3.5 text-right text-[16px] font-semibold text-text md:text-[17px]">{p.units}세대</td>
                  </tr>
                </tbody>
              </table>

              <ul className="mt-8 space-y-4">
                {p.points.map((pt) => (
                  <li key={pt.title} className="grid grid-cols-[14px_1fr] gap-2">
                    <span className="mt-[9px] h-[5px] w-[5px] bg-gold" aria-hidden />
                    <p className="text-[15px] leading-[1.6] text-text md:text-[16px]">
                      <strong className="font-semibold">{pt.title}</strong>
                      <span className="text-mute"> · {pt.desc}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox items={items} index={zoom} onClose={() => setZoom(null)} onIndex={() => {}} />
    </section>
  );
}
