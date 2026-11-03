// 문자 수신번호는 화면·소스에 이어진 문자열로 남기지 않도록 실행 시점에 조립한다.
const SEG: number[][] = [
  [0, 1, 0],
  [6, 5, 2, 3],
  [1, 5, 5, 5],
];

function receiver(): string {
  return SEG.map((s) => s.join("")).join("");
}

export function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
}

export function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || isIOS();
}

export function smsHref(body: string): string {
  const sep = isIOS() ? "&" : "?";
  return `sms:${receiver()}${sep}body=${encodeURIComponent(body)}`;
}
