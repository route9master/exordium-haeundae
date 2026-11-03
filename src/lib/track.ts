import { GOOGLE_ADS } from "@/data/site";

type Kind = "sms" | "tel";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// 전화 클릭·문자 접수 전환. 구글 태그 ID가 비어 있으면 dataLayer 이벤트만 남긴다.
export function trackConversion(kind: Kind) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: kind === "sms" ? "sms_submit" : "tel_click" });
  const label = GOOGLE_ADS.labels[kind];
  if (GOOGLE_ADS.id && label && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS.id}/${label}` });
  }
}
