import { OVERVIEW_COUNTS, OVERVIEW_ROWS, SCHEDULE } from "@/data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Overview() {
  return (
    <section id="overview" className="bg-paper py-24 md:py-36">
      <div className="container-site">
        <SectionHeader
          overline="Overview"
          title="사업개요"
          lead="송정해수욕장 앞, 아파트 324세대와 호텔이 함께 계획된 10년 전세형 민간임대 단지입니다."
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <ul className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-0">
              {OVERVIEW_COUNTS.map((c) => (
                <li key={c.label} className="border-t border-text pt-4 lg:pb-8 lg:pt-6">
                  <p className="text-[13px] text-mute md:text-[14px]">{c.label}</p>
                  <p className="mt-2 font-serif text-[34px] font-semibold leading-none text-text md:text-[56px]">
                    <CountUp to={c.to} />
                    <span className="ml-1 font-sans text-[15px] font-medium text-mute md:text-[18px]">{c.unit}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={80}>
            <table className="w-full border-t border-text text-left">
              <caption className="sr-only">엑소디움 시그니처 해운대 사업개요</caption>
              <tbody>
                {OVERVIEW_ROWS.map((r) => (
                  <tr key={r.th} className="border-b border-line">
                    <th scope="row" className="w-[96px] py-4 align-top text-[14px] font-medium text-mute md:w-[160px] md:py-5 md:text-[15px]">
                      {r.th}
                    </th>
                    <td className="py-4 text-[15px] leading-[1.6] text-text md:py-5 md:text-[16px]">{r.td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        <Reveal className="mt-20 md:mt-28">
          <p className="eyebrow text-gold">Schedule</p>
          <ol className="mt-6 grid grid-cols-3 border-t border-line">
            {SCHEDULE.map((s, i) => (
              <li key={s.what} className={`relative pt-6 ${i > 0 ? "pl-4 md:pl-8" : ""}`}>
                <span className={`absolute -top-[5px] h-[9px] w-[9px] bg-gold ${i > 0 ? "left-4 md:left-8" : "left-0"}`} aria-hidden />
                <p className="num text-[13px] text-mute md:text-[15px]">{s.when}</p>
                <p className="mt-1 font-serif text-[20px] font-semibold text-text md:text-[28px]">{s.what}</p>
                <p className="mt-1 text-[12px] text-mute md:text-[13px]">예정</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[12px] leading-[1.7] text-mute">
            ※ 상기 면적·세대수·일정은 인허가 과정 및 사업 진행 상황에 따라 변경될 수 있습니다. 호텔은 계획 단계로 명칭·규모·운영 방식이 확정되지 않았습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
