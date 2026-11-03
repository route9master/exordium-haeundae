"use client";

import type { ReactNode } from "react";
import { SITE } from "@/data/site";
import { trackConversion } from "@/lib/track";

export default function TelLink({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <a href={SITE.telHref} className={className} onClick={() => trackConversion("tel")}>
      {children ?? SITE.tel}
    </a>
  );
}
