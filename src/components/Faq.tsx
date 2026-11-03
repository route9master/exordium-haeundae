import { FAQ } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Faq() {
  return (
    <section id="faq" className="bg-sand py-24 md:py-36">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader overline="FAQ" title="자주 묻는 질문" />
        </div>
        <Reveal className="lg:col-span-8">
          <div className="border-t border-text">
            {FAQ.map((f, i) => (
              <details key={f.q} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 md:py-7">
                  <span className="flex gap-4 text-[16px] font-semibold leading-[1.55] text-text md:text-[18px]">
                    <span className="num font-serif text-gold">Q{i + 1}</span>
                    {f.q}
                  </span>
                  <span className="mt-1 text-[20px] leading-none text-mute transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-7 pl-10 pr-8 text-[15px] leading-[1.8] text-mute md:pl-12 md:text-[16px]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-[12px] leading-[1.7] text-mute">
            ※ 상기 내용은 일반적인 안내이며, 세부 사항은 공급 안내 자료와 계약서를 기준으로 합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
