import { SITE } from "@/data/site";
import TelLink from "./TelLink";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-pearl/15 bg-night md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <TelLink className="flex h-14 items-center justify-center text-[15px] font-semibold text-pearl">
        <span>
          전화 상담 <span className="num">{SITE.tel}</span>
        </span>
      </TelLink>
      <a href="#register" className="flex h-14 items-center justify-center bg-pearl text-[15px] font-semibold text-ink">
        관심고객 등록
      </a>
    </div>
  );
}
