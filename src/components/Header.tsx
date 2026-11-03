"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/data/content";
import { SITE } from "@/data/site";
import TelLink from "./TelLink";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/95 backdrop-blur-[2px]" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${SITE.name} 처음으로`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/images/brand/wordmark-dark.png" : "/images/brand/wordmark-light.png"}
            alt="EXORDIUM"
            width={560}
            height={90}
            className="h-[15px] w-auto md:h-[18px]"
          />
          <span
            className={`hidden border-l pl-3 text-[13px] font-medium tracking-[-0.01em] sm:inline ${
              solid ? "border-line text-text" : "border-pearl/40 text-pearl"
            }`}
          >
            시그니처 해운대
          </span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`text-[14px] font-medium transition-colors ${
                    solid ? "text-text/80 hover:text-text" : "text-pearl/85 hover:text-pearl"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <TelLink
            className={`num text-[15px] font-semibold md:text-[16px] ${solid ? "text-text" : "text-pearl"}`}
          />
          <a
            href="#register"
            className={`hidden h-10 items-center px-5 text-[14px] font-semibold transition-colors md:inline-flex ${
              solid ? "bg-ink text-pearl hover:bg-night" : "bg-pearl text-ink hover:bg-white"
            }`}
          >
            관심고객 등록
          </a>
        </div>
      </div>
    </header>
  );
}
