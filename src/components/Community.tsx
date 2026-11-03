import { COMMUNITY } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Community() {
  return (
    <section id="community" className="bg-ink py-24 text-pearl md:py-36">
      <div className="container-site">
        <SectionHeader
          dark
          overline="Community"
          title="커뮤니티"
          lead="바다를 향한 루프탑 풀부터 운동·업무·돌봄 공간까지, 입주민 생활을 위한 시설이 계획되어 있습니다."
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/community/pool.webp"
                alt="루프탑 인피니티 풀 CG"
                width={1024}
                height={572}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="mt-3 flex justify-between gap-4 text-[12px] text-pearl/55">
                <span>루프탑 인피니티 풀 (계획)</span>
                <span>※ 이해를 돕기 위한 CG입니다.</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={80}>
            <ol className="grid grid-cols-1 border-t border-pearl/25 sm:grid-cols-2 sm:gap-x-8">
              {COMMUNITY.map((c, i) => (
                <li key={c.title} className="border-b border-pearl/15 py-5">
                  <span className="num font-serif text-[15px] text-goldl">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-[16px] font-semibold md:text-[17px]">{c.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-pearl/60">{c.desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <p className="mt-8 text-[12px] leading-[1.7] text-pearl/50">
          ※ 커뮤니티 시설은 계획 단계로, 구성·규모·운영 방식은 인허가 과정 및 입주자 협의에 따라 변경될 수 있으며 일부 시설은 유료로 운영될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
