import { LOCATION } from "@/data/content";
import { DISCLAIMER } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Location() {
  return (
    <section id="location" className="bg-ink py-24 text-pearl md:py-36">
      <div className="container-site">
        <SectionHeader
          dark
          overline="Location"
          title="입지환경"
          lead="송정해수욕장을 앞에 두고, 동해선과 동부산 생활권을 함께 이용하는 자리입니다."
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/render/aerial-sea.webp"
                alt="송정 해변과 동부산 일대를 담은 엑소디움 시그니처 해운대 조감도"
                width={1920}
                height={1072}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-[45%_50%]"
              />
              <figcaption className="mt-3 text-[12px] text-pearl/50">{DISCLAIMER.cg}</figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={80}>
            <ol className="border-t border-pearl/25">
              {LOCATION.map((l, i) => (
                <li key={l.title} className="grid grid-cols-[44px_1fr] gap-x-2 border-b border-pearl/15 py-6 md:grid-cols-[56px_1fr_auto] md:items-baseline md:gap-x-4">
                  <span className="num font-serif text-[18px] text-goldl md:text-[20px]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold leading-[1.45] md:text-[19px]">{l.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.6] text-pearl/65 md:text-[15px]">{l.desc}</p>
                  </div>
                  {l.dist && (
                    <p className="col-start-2 mt-2 text-[14px] font-medium text-goldl md:col-start-3 md:mt-0 md:text-right md:text-[15px]">
                      {l.dist}
                    </p>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[12px] leading-[1.7] text-pearl/50">
              ※ 이동 시간은 지도 서비스 기준 추정치로 교통 상황과 출발 위치에 따라 달라질 수 있습니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
