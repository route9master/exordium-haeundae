// 섹션별 콘텐츠. 출처: 의뢰자 제공 브리핑북(2026.05.27) + 의뢰자 전달 일정.
// 투자·수익·시세·세금·가격 관련 내용은 정책상 넣지 않는다.

export const NAV = [
  { id: "overview", label: "사업개요" },
  { id: "location", label: "입지환경" },
  { id: "complex", label: "단지안내" },
  { id: "community", label: "커뮤니티" },
  { id: "plans", label: "평면안내" },
  { id: "faq", label: "FAQ" },
];

export const HERO_STATS = [
  { value: "324", unit: "세대", label: "민간임대 아파트" },
  { value: "32", unit: "층", label: "지하 5층 ~ 지상 32층" },
  { value: "59·84", unit: "㎡", label: "3개 타입" },
  { value: "5", unit: "분", label: "송정해수욕장 도보 약" },
];

export const OVERVIEW_ROWS: { th: string; td: string }[] = [
  { th: "사업명", td: "엑소디움 시그니처 해운대" },
  { th: "공급유형", td: "10년 전세형 민간임대 아파트" },
  { th: "대지위치", td: "부산광역시 해운대구 송정동 349번지 일원" },
  { th: "대지면적", td: "7,634㎡ (약 2,309평)" },
  { th: "연면적", td: "99,721㎡ (약 30,165평)" },
  { th: "건축규모", td: "지하 5층 ~ 지상 32층, 아파트 2개동 (101동·102동)" },
  { th: "세대수", td: "총 324세대 (59㎡ 108 · 84㎡A 108 · 84㎡B 108)" },
  { th: "주차대수", td: "총 692대 (아파트 350대 · 부대시설 342대)" },
  { th: "복합시설", td: "호텔 400실 (계획)" },
];

export const OVERVIEW_COUNTS = [
  { to: 324, unit: "세대", label: "총 세대수" },
  { to: 32, unit: "층", label: "최고 층수" },
  { to: 400, unit: "실", label: "호텔 객실 (계획)" },
];

export const SCHEDULE = [
  { when: "2027년 초", what: "착공" },
  { when: "2030년", what: "입주" },
  { when: "2040년", what: "분양전환" },
];

export const LOCATION = [
  {
    title: "송정해수욕장 · 죽도공원",
    desc: "서핑과 산책을 일상에서 누리는 해변 생활권",
    dist: "도보 약 5분",
  },
  {
    title: "동해선 송정역",
    desc: "부전~태화강 구간 동해선 광역전철 이용",
    dist: "",
  },
  {
    title: "롯데프리미엄아울렛 · 이케아 동부산점",
    desc: "오시리아 일대 대형 쇼핑시설",
    dist: "차량 약 5분",
  },
  {
    title: "해운대백병원",
    desc: "종합병원 · 응급의료센터",
    dist: "차량 약 15분",
  },
  {
    title: "만덕~센텀 도시고속화도로",
    desc: "센텀IC에서 만덕까지 서부산 방면 지하 고속화도로",
    dist: "2026.02 개통",
  },
];

export type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/render/aerial-sea.webp",
    thumb: "/images/render/aerial-sea-thumb.webp",
    alt: "송정 바다를 배경으로 한 엑소디움 시그니처 해운대 조감도",
    caption: "조감도",
    w: 1920,
    h: 1072,
  },
  {
    src: "/images/render/perspective-day.webp",
    thumb: "/images/render/perspective-day-thumb.webp",
    alt: "엑소디움 시그니처 해운대 주간 투시도",
    caption: "투시도 · 주간",
    w: 1920,
    h: 1207,
  },
  {
    src: "/images/render/perspective-night.webp",
    thumb: "/images/render/perspective-night-thumb.webp",
    alt: "엑소디움 시그니처 해운대 야간 투시도",
    caption: "투시도 · 야간",
    w: 1920,
    h: 1207,
  },
  {
    src: "/images/render/perspective-dusk.webp",
    thumb: "/images/render/perspective-dusk-thumb.webp",
    alt: "엑소디움 시그니처 해운대 저층부 투시도",
    caption: "투시도 · 저층부",
    w: 1920,
    h: 1072,
  },
  {
    src: "/images/site/siteplan.webp",
    thumb: "/images/site/siteplan.webp",
    alt: "엑소디움 시그니처 해운대 단지 배치도",
    caption: "단지 배치도",
    w: 1024,
    h: 709,
  },
];

export const COMMUNITY = [
  { title: "루프탑 인피니티 풀", desc: "송정 바다를 바라보는 옥상 수영장" },
  { title: "라운지 · 옥상정원", desc: "입주민 휴식 공간" },
  { title: "피트니스 · GX", desc: "운동과 그룹 프로그램 공간" },
  { title: "사우나", desc: "입주민 전용 사우나" },
  { title: "프라이빗 다이닝룸", desc: "모임과 식사를 위한 예약 공간" },
  { title: "코워킹 라이브러리", desc: "업무·독서 공간" },
  { title: "키즈존 · 돌봄센터", desc: "어린이 놀이와 돌봄 공간" },
  { title: "서핑 라커", desc: "보드와 장비를 보관하는 공간" },
];

export type Plan = {
  id: string;
  tab: string;
  title: string;
  lead: string;
  img: string;
  w: number;
  h: number;
  area: { label: string; value: string }[];
  units: number;
  points: { title: string; desc: string }[];
};

export const PLANS: Plan[] = [
  {
    id: "59",
    tab: "59㎡",
    title: "59㎡",
    lead: "주방과 거실을 하나로 넓게 쓰는 실속형 평면",
    img: "/images/plans/59.webp",
    w: 1024,
    h: 734,
    area: [
      { label: "전용면적", value: "59.30㎡" },
      { label: "공급면적", value: "81.34㎡" },
      { label: "계약면적", value: "119.75㎡" },
    ],
    units: 108,
    points: [
      { title: "일체형 마스터존", desc: "안방·드레스룸·욕실을 한 동선으로 연결" },
      { title: "통합 LDK", desc: "주방과 거실을 하나로 이어 넓게 사용" },
      { title: "맞통풍 구조", desc: "채광과 환기를 고려한 판상형 배치" },
      { title: "일직선 동선", desc: "현관에서 거실까지 곧게 이어지는 진입 동선" },
    ],
  },
  {
    id: "84a",
    tab: "84㎡A",
    title: "84㎡A",
    lead: "침실 3개와 거실을 나란히 배치한 4-Bay 평면",
    img: "/images/plans/84a.webp",
    w: 1024,
    h: 654,
    area: [
      { label: "전용면적", value: "84.50㎡" },
      { label: "공급면적", value: "115.90㎡" },
      { label: "계약면적", value: "170.63㎡" },
    ],
    units: 108,
    points: [
      { title: "4-Bay 구조", desc: "침실 3개와 거실을 전면에 일렬 배치" },
      { title: "와이드 발코니", desc: "거실 전면을 넓게 쓰는 발코니" },
      { title: "다이닝 공간", desc: "주방과 거실이 이어지는 개방형 다이닝" },
      { title: "드레스룸 · 알파룸", desc: "수납과 다용도 공간 확보" },
    ],
  },
  {
    id: "84b",
    tab: "84㎡B",
    title: "84㎡B",
    lead: "거실과 주방을 나눠 쓰는 4-Bay 변형 평면",
    img: "/images/plans/84b.webp",
    w: 1024,
    h: 698,
    area: [
      { label: "전용면적", value: "84.50㎡" },
      { label: "공급면적", value: "115.90㎡" },
      { label: "계약면적", value: "170.63㎡" },
    ],
    units: 108,
    points: [
      { title: "분리형 LK", desc: "거실과 주방 공간을 구분한 구성" },
      { title: "마스터룸 분리", desc: "침실과 거실을 떨어뜨린 배치" },
      { title: "복도 면적 최소화", desc: "버려지는 공간을 줄인 동선" },
      { title: "독립 마스터존", desc: "서재·화장실·드레스룸을 갖춘 안방 구성" },
    ],
  },
];

export const FAQ = [
  {
    q: "엑소디움 시그니처 해운대는 어떤 주택인가요?",
    a: "부산 해운대구 송정동 349번지 일원에 들어서는 10년 전세형 민간임대 아파트입니다. 지하 5층~지상 32층, 아파트 2개동 324세대 규모이며 호텔 400실이 함께 계획되어 있습니다.",
  },
  {
    q: "어떤 타입이 있나요?",
    a: "전용 59㎡, 84㎡A, 84㎡B 3개 타입으로 구성되며 타입별로 각 108세대입니다.",
  },
  {
    q: "착공과 입주는 언제인가요?",
    a: "2027년 초 착공, 2030년 입주를 목표로 하고 있으며, 10년 임대 후 2040년 분양전환이 예정되어 있습니다. 일정은 인허가 및 사업 진행 상황에 따라 변경될 수 있습니다.",
  },
  {
    q: "청약통장이 필요한가요?",
    a: "민간임대주택으로 청약통장 없이 신청할 수 있습니다. 신청 자격 등 세부 사항은 공급 안내 시 함께 확인하실 수 있습니다.",
  },
  {
    q: "임대 기간 중 임대료는 어떻게 되나요?",
    a: "임대료 증액은 「민간임대주택에 관한 특별법」에 따라 연 5% 범위 이내로 제한됩니다. 세부 조건은 임대차 계약서를 기준으로 합니다.",
  },
  {
    q: "관심고객으로 등록하면 어떻게 되나요?",
    a: "남겨주신 연락처로 담당 상담사가 공급 일정과 모델하우스 방문 상담 등 진행 상황을 안내해 드립니다. 등록은 계약이나 청약 신청이 아니며, 언제든 안내 중단을 요청하실 수 있습니다.",
  },
];

export const UNIT_OPTIONS = ["59㎡", "84㎡A", "84㎡B", "미정"];
