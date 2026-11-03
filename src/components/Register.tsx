"use client";

import { useState, type FormEvent } from "react";
import { UNIT_OPTIONS } from "@/data/content";
import { SITE } from "@/data/site";
import { isMobile, smsHref } from "@/lib/sms";
import { trackConversion } from "@/lib/track";
import TelLink from "./TelLink";

type Status = "idle" | "sent" | "desktop";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [unit, setUnit] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    const f = d.length < 4 ? d : d.length < 8 ? `${d.slice(0, 3)}-${d.slice(3)}` : `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`;
    setPhone(f);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) return setError("이름을 2자 이상 입력해 주세요.");
    if (!/^01[016789]\d{7,8}$/.test(digits)) return setError("휴대폰 번호를 정확히 입력해 주세요.");
    if (!unit) return setError("관심 타입을 선택해 주세요.");
    if (!agree) return setError("개인정보 수집·이용에 동의해 주세요.");
    setError("");

    if (!isMobile()) {
      setStatus("desktop");
      return;
    }

    const body = [
      `[${SITE.name} 관심고객 등록]`,
      `이름: ${name.trim()}`,
      `연락처: ${phone}`,
      `관심타입: ${unit}`,
      "개인정보 수집·이용 동의: 동의",
    ].join("\n");

    trackConversion("sms");
    setStatus("sent");
    window.location.href = smsHref(body);
  };

  const field = "h-12 w-full border border-pearl/25 bg-transparent px-4 text-[16px] text-pearl placeholder:text-pearl/40 focus:border-goldl focus:outline-none";

  return (
    <section id="register" className="bg-night py-24 text-pearl md:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow text-goldl">Register</p>
          <h2 className="mt-4 font-serif text-[30px] font-semibold leading-[1.3] md:text-[42px]">관심고객 등록</h2>
          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.8] text-pearl/70 md:text-[17px]">
            공급 일정과 모델하우스 방문 상담 안내를 받아보세요. 등록은 계약이나 청약 신청이 아닙니다.
          </p>

          <div className="mt-10 border-t border-pearl/25 pt-6">
            <p className="text-[13px] text-pearl/60">대표번호</p>
            <TelLink className="num mt-1 block font-serif text-[36px] font-semibold text-pearl md:text-[44px]" />
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="lg:col-span-7" aria-describedby="register-help">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-pearl/80">이름</span>
              <input
                className={field}
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                maxLength={20}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-pearl/80">연락처</span>
              <input
                className={`${field} num`}
                name="tel"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onChange={(e) => onPhone(e.target.value)}
                placeholder="010-0000-0000"
              />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-3 text-[14px] font-medium text-pearl/80">관심 타입</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {UNIT_OPTIONS.map((u) => (
                <label
                  key={u}
                  className={`flex h-12 cursor-pointer items-center justify-center border text-[15px] font-medium transition-colors ${
                    unit === u ? "border-pearl bg-pearl text-ink" : "border-pearl/25 text-pearl/85 hover:border-pearl/60"
                  }`}
                >
                  <input type="radio" name="unit" value={u} checked={unit === u} onChange={() => setUnit(u)} className="sr-only" />
                  <span className="num">{u}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 border border-pearl/15 p-4 text-[13px] leading-[1.7] text-pearl/65">
            <label className="flex cursor-pointer items-start gap-3 text-[14px] text-pearl/90">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-[3px] h-4 w-4 shrink-0 accent-[#D99941]"
              />
              <span>개인정보 수집·이용에 동의합니다. (필수)</span>
            </label>
            <p className="mt-2 pl-7">
              수집 항목: 이름, 연락처, 관심 타입 · 이용 목적: 관심고객 상담 및 공급 일정 안내 · 보유 기간: 상담 목적 달성 시까지(최대 1년).{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-pearl">
                개인정보처리방침
              </a>
            </p>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-[14px] font-medium text-[#F0A46A]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 h-14 w-full bg-pearl text-[16px] font-semibold text-ink transition-colors hover:bg-white"
          >
            문자로 관심고객 등록하기
          </button>

          <div id="register-help" aria-live="polite" className="mt-4 text-[13px] leading-[1.7] text-pearl/60">
            {status === "idle" && <p>버튼을 누르면 입력하신 내용이 담긴 문자 창이 열립니다. 문자 앱에서 전송 버튼을 눌러야 등록이 완료됩니다.</p>}
            {status === "sent" && (
              <p className="text-pearl/85">문자 창에서 전송 버튼을 눌러 주세요. 문자 창이 열리지 않으면 대표번호 {SITE.tel}로 연락해 주세요.</p>
            )}
            {status === "desktop" && (
              <p className="text-pearl/85">
                PC에서는 문자 전송이 지원되지 않습니다. 휴대폰으로 접속해 등록하시거나 대표번호 {SITE.tel}로 연락해 주세요.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
