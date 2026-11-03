import { AGENCY, DISCLAIMER, SITE } from "@/data/site";
import TelLink from "./TelLink";

export default function Footer() {
  return (
    <footer className="border-t border-pearl/10 bg-night pb-28 pt-16 text-pearl/70 md:pb-20 md:pt-20">
      <div className="container-site">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/brand/exordium-light.png" alt="EXORDIUM" width={480} height={255} loading="lazy" className="w-[120px] opacity-90" />

        <TelLink className="num mt-8 block text-[28px] font-semibold text-pearl" />

        <div className="mt-6 text-[14px]" style={{ lineHeight: 1.9 }}>
          <p>사업명 : {SITE.name}</p>
          <p>사업지 : {SITE.address}</p>
          <p>상담 문의 : {SITE.tel}</p>
          <p className="flex flex-wrap gap-x-3">
            <span className="whitespace-nowrap">
              {AGENCY.role} : {AGENCY.name}
            </span>
            <span className="whitespace-nowrap">사업자등록번호 {AGENCY.bizNo}</span>
            <span>{AGENCY.address}</span>
            <span className="whitespace-nowrap">대표전화 {AGENCY.tel}</span>
          </p>
        </div>

        <hr className="my-8 border-0" style={{ height: 1, backgroundColor: "rgba(244,241,234,0.15)" }} />

        <p className="text-[13px] leading-[1.7] text-pearl/50">{DISCLAIMER.operator}</p>
        <p className="mt-2 text-[13px] leading-[1.7] text-pearl/50">{DISCLAIMER.site}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <a href="/privacy" className="font-semibold text-pearl/80 hover:text-pearl">
            개인정보처리방침
          </a>
          <p className="text-pearl/40">© {AGENCY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
