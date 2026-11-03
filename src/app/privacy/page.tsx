import type { Metadata } from "next";
import { AGENCY, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${SITE.name}`,
  description: `${SITE.name} 홈페이지 개인정보처리방침`,
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE = "2026년 11월 3일";

export default function PrivacyPage() {
  const sections: { h: string; body: React.ReactNode }[] = [
    {
      h: "1. 개인정보 처리 주체",
      body: (
        <p>
          {SITE.name} 홈페이지(이하 &lsquo;홈페이지&rsquo;)는 {AGENCY.name}(이하 &lsquo;회사&rsquo;)가 운영하며, 회사는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위해 다음과 같이 개인정보처리방침을 둡니다.
        </p>
      ),
    },
    {
      h: "2. 수집 항목 및 수집 방법",
      body: (
        <>
          <p>수집 항목: 이름, 휴대폰 번호, 관심 타입</p>
          <p className="mt-2">
            수집 방법: 이용자가 관심고객 등록 양식에 정보를 입력한 뒤, 이용자의 휴대폰 문자메시지 앱에서 직접 전송하는 방식으로 수집합니다. 홈페이지 서버에는 입력 정보가 저장되지 않습니다.
          </p>
          <p className="mt-2">대표번호로 전화 상담을 요청하는 경우 통화 과정에서 이름과 연락처를 확인할 수 있습니다.</p>
        </>
      ),
    },
    {
      h: "3. 이용 목적",
      body: <p>관심고객 상담, 공급 일정 및 모델하우스 방문 상담 안내 등 {SITE.name} 관련 안내에 한하여 이용합니다.</p>,
    },
    {
      h: "4. 보유 및 이용 기간",
      body: (
        <p>
          {AGENCY.retention} 보유하며, 기간이 끝나거나 이용자가 삭제를 요청하면 지체 없이 파기합니다. 다만 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
        </p>
      ),
    },
    {
      h: "5. 제3자 제공 및 처리 위탁",
      body: <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않으며, 개인정보 처리 업무를 외부에 위탁하지 않습니다.</p>,
    },
    {
      h: "6. 파기 절차 및 방법",
      body: <p>보유 기간이 지난 개인정보는 문자메시지 및 상담 기록에서 삭제하며, 종이 문서는 분쇄 또는 소각합니다.</p>,
    },
    {
      h: "7. 이용자의 권리",
      body: (
        <p>
          이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지 및 안내 수신 중단을 요청할 수 있으며, 아래 연락처로 요청하시면 지체 없이 조치합니다.
        </p>
      ),
    },
    {
      h: "8. 동의를 거부할 권리",
      body: <p>이용자는 개인정보 수집·이용에 동의하지 않을 수 있습니다. 다만 동의하지 않으면 관심고객 등록을 통한 안내를 받으실 수 없으며, 대표번호로 전화 상담은 가능합니다.</p>,
    },
    {
      h: "9. 개인정보 보호책임자",
      body: (
        <>
          <p>담당: {AGENCY.name}</p>
          <p>전화: {AGENCY.tel}</p>
          <p>이메일: {AGENCY.email}</p>
          <p>주소: {AGENCY.address}</p>
          <p className="mt-2">
            개인정보 침해에 대한 신고나 상담은 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972)에 문의하실 수 있습니다.
          </p>
        </>
      ),
    },
    {
      h: "10. 시행일",
      body: <p>이 개인정보처리방침은 {EFFECTIVE}부터 적용됩니다.</p>,
    },
  ];

  return (
    <main className="min-h-[100svh] bg-paper py-20 md:py-28">
      <div className="container-site max-w-[820px]">
        <a href="/" className="text-[14px] font-medium text-mute hover:text-text">
          ← {SITE.name}
        </a>
        <h1 className="mt-8 font-serif text-[32px] font-semibold text-text md:text-[40px]">개인정보처리방침</h1>
        <p className="mt-3 text-[14px] text-mute">시행일 {EFFECTIVE}</p>
        <div className="mt-12 border-t border-text">
          {sections.map((s) => (
            <section key={s.h} className="border-b border-line py-7">
              <h2 className="text-[17px] font-semibold text-text">{s.h}</h2>
              <div className="mt-3 text-[15px] leading-[1.8] text-mute">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
