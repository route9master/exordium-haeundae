// 사이트 공통 정보 — 문구·번호는 여기서만 고친다.

export const SITE = {
  name: "엑소디움 시그니처 해운대",
  nameEn: "EXORDIUM Signature Haeundae",
  type: "10년 전세형 민간임대 아파트",
  address: "부산광역시 해운대구 송정동 349번지 일원",
  tel: "1666-4212",
  telHref: "tel:16664212",
  // 배포 주소가 정해지면 이 값만 실제 주소로 바꾼다 (OG·sitemap 기준)
  url: "https://exordium-haeundae.vercel.app",
};

// 홈페이지 운영·개인정보 처리 주체
export const AGENCY = {
  role: "분양대행",
  name: "대한미디어그룹",
  bizNo: "707-25-02102",
  address: "서울특별시 금천구 디지털로9길 99, 스타밸리 1304-B호",
  tel: "02-2088-4840",
  email: "dmg@daehanmedia.kr",
  retention: "상담 목적 달성 시까지 (수집일로부터 최대 1년)",
};

// 구글 전환 추적 — 값이 비어 있으면 스크립트를 넣지 않는다.
// 예) id: "AW-1234567890", labels: { sms: "AbCdEf...", tel: "GhIjKl..." }
export const GOOGLE_ADS = {
  id: "AW-18553144634",
  // pageview: 페이지 접속 시 1회, sms: 문자 접수 버튼, tel: 전화번호 클릭
  labels: { sms: "hMb5CK2C3rEdELqK6o5F", tel: "", pageview: "_ppRCJLFgbEdELqK6o5F" },
};
// GTM을 쓸 경우 컨테이너 ID (예: "GTM-XXXXXXX"). dataLayer 이벤트: sms_submit, tel_click
export const GTM_ID = "";

export const DISCLAIMER = {
  site:
    "※ 본 홈페이지에 사용된 CG, 이미지, 면적, 일정 및 시설 계획은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인허가 과정 및 사업 여건에 따라 변경될 수 있습니다. 호텔 및 커뮤니티 시설의 명칭·구성·운영 방식은 확정되지 않았습니다. 계약 전 반드시 공급 안내 자료와 계약서를 확인하시기 바랍니다.",
  operator: "본 홈페이지는 분양대행사 대한미디어그룹이 운영하는 홍보 사이트입니다.",
  cg: "※ 상기 이미지는 소비자의 이해를 돕기 위한 CG로 실제와 다를 수 있습니다.",
};
