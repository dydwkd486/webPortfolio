export const portfolioContent = {
  meta: {
    title: "조용장 | Frontend Portfolio",
    description:
      "동네의 문제를 따뜻하고 실용적인 인터페이스로 풀어내는 프론트엔드 포트폴리오입니다.",
  },
  profile: {
    name: "조용장",
    role: "따뜻한 흐름을 만드는 프론트엔드 개발자",
    tagline:
      "복잡한 정책과 예외를 다루는 화면도 사용자는 가볍게 느끼도록 만드는 일에 강점이 있습니다. 서비스의 구조를 정리하고, 화면의 결을 다듬고, 운영 가능한 상태까지 책임집니다.",
    summary:
      "사내 결재 서비스, 정책형 UI, Electron 확장 구조 전환까지 경험하며 문제 정의부터 구조 개선, 안정화까지 꾸준히 맡아왔습니다.",
    story:
      "웹 화면은 기능만 전달하는 곳이 아니라, 사용자가 망설이지 않고 다음 행동을 고를 수 있게 도와주는 안내판이라고 생각합니다. 저는 복잡한 업무 도메인과 다양한 예외 상황을 다루는 프로젝트에서 화면의 흐름을 단순하게 재구성하고, 유지보수 가능한 구조로 정리하는 일을 꾸준히 해왔습니다. 당근처럼 일상 가까운 문제를 다루는 서비스에서 그 감각을 더 잘 발휘할 수 있다고 믿습니다.",
    whyKarrot:
      "당근은 거대한 플랫폼이라기보다 동네의 생활 리듬을 잘 이해하는 서비스라고 느꼈습니다. 가까운 사람들의 시간을 덜 쓰게 하고, 행동을 더 쉽게 만드는 제품을 만드는 팀이라면 제가 잘하는 화면 설계와 구조 정리가 더 큰 힘을 낼 수 있습니다.",
  },
  facts: [
    { label: "이름", value: "조용장" },
    { label: "현근무지", value: "서울 송파구" },
    { label: "관심사", value: "Frontend, Product UI, Design systems" },
  ],
  stats: [
    { value: "3+년", label: "실무 프론트엔드 경험" },
    { value: "React", label: "주력 구현 스택" },
    { value: "운영형 UI", label: "복잡한 정책 화면 경험" },
    { value: "Web + Electron", label: "확장 구조 전환 경험" },
  ],
  fitPills: ["복잡한 도메인 정리", "정책형 화면 설계", "구조 개선", "운영 안정화", "사용자 흐름 단순화"],
  strengths: [
    {
      title: "복잡한 정책을 읽기 쉬운 화면 흐름으로 바꿉니다",
      description:
        "규칙과 예외가 많은 화면에서도 사용자가 지금 무엇을 해야 하는지 자연스럽게 알 수 있도록 정보 구조와 인터랙션을 정리합니다.",
    },
    {
      title: "운영 중인 서비스를 더 안정적으로 다듬습니다",
      description:
        "새 기능만 붙이는 것이 아니라 테스트 보강, 상태 정리, 화면 구조 개선을 함께 진행해 이후 수정 비용도 낮추는 편입니다.",
    },
    {
      title: "디자인 감각과 구현 감각을 같이 가져갑니다",
      description:
        "시각적인 톤, 간격, 위계까지 함께 보면서 화면이 기능적으로도 예쁘고 실무적으로도 관리되도록 맞춥니다.",
    },
  ],
  skills: [
    {
      title: "Language",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      items: ["React", "Redux", "React Query", "Responsive UI", "Interaction Design"],
    },
    {
      title: "Product",
      items: ["Information Architecture", "UX Writing", "Design Systems", "Maintainability"],
    },
    {
      title: "Tools",
      items: ["Electron", "Git", "Testing", "Code Review", "GitHub Pages"],
    },
  ],
  projects: [
    {
      badge: "Samsung SDS",
      period: "2023.02 - 현재",
      title: "사내 결재 서비스 주요 화면 개발과 운영",
      description:
        "메인, 작성, 관리자, 승인 흐름처럼 성격이 다른 화면을 함께 다루며 정책과 예외가 많은 업무 UI를 구조적으로 정리했습니다. 화면 로직과 상태 흐름을 다듬고, 계속 수정되는 요구사항을 흡수하기 쉬운 형태로 만드는 데 집중했습니다.",
      impactTitle: "어떻게 기여했는지",
      impact:
        "정책형 UI를 구현하면서 사용자 행동 순서를 다시 설계하고, 운영 중 발생하던 복잡도를 줄이는 방향으로 화면 구조와 유지보수 포인트를 정리했습니다.",
      pills: ["React", "JavaScript", "Redux", "React Query"],
    },
    {
      badge: "Policy UI",
      period: "2023 - 현재",
      title: "노출 조건과 권한 규칙이 많은 결재 정책 UI 고도화",
      description:
        "권한, 조건, 상태에 따라 달라지는 인터페이스를 만들면서 화면 표현과 비즈니스 로직의 경계를 더 명확하게 분리했습니다. 테스트와 구조 개선을 함께 진행해 이후 변경에도 흔들리지 않도록 보완했습니다.",
      impactTitle: "남긴 변화",
      impact:
        "복잡한 분기 처리를 읽기 쉬운 단위로 나누고, 유지보수 과정에서 실수하기 쉬운 구간을 줄이는 데 집중했습니다.",
      pills: ["Business Logic", "Testing", "Maintainability"],
    },
    {
      badge: "Web Messenger TF",
      period: "2026.03 - 현재",
      title: "웹 기반 메신저를 Electron 환경으로 확장하는 구조 전환",
      description:
        "웹 중심 구조를 데스크톱 환경으로 자연스럽게 확장하기 위해 공통으로 가져갈 수 있는 화면 흐름과 상태 구조를 정리하는 작업에 참여했습니다. 플랫폼 차이를 드러내기보다 사용자 경험이 이어지도록 맞추는 데 초점을 두었습니다.",
      impactTitle: "배운 점",
      impact:
        "같은 제품이더라도 환경이 달라질 때 어떤 레이어를 공통화해야 하는지, 어떤 인터랙션은 새로 설계해야 하는지 더 깊게 고민하게 됐습니다.",
      pills: ["Electron", "Architecture", "Cross-platform", "UI Structure"],
    },
    {
      badge: "Matrios",
      period: "2021.06 - 2022.06",
      title: "교육형 서비스 프론트엔드 개발",
      description:
        "React 기반 서비스 개발에 참여하며 화면 구현뿐 아니라 AWS Amplify, Lambda, DynamoDB, API Gateway를 활용한 연결 구조까지 폭넓게 경험했습니다. 제품을 실제로 굴러가게 만드는 기본기를 쌓은 시기였습니다.",
      impactTitle: "맡았던 역할",
      impact:
        "프론트엔드 구현을 중심으로 서비스 연결 구조를 이해하고, 기능이 실제 사용 흐름 안에서 자연스럽게 동작하도록 다듬었습니다.",
      pills: ["React", "AWS Amplify", "Lambda", "DynamoDB"],
    },
  ],
  career: [
    {
      company: "Samsung SDS",
      period: "2023.02 - 현재",
      summary: "사내 업무 서비스의 주요 화면을 개발하고 운영하며, 복잡한 정책과 예외가 많은 UI를 다듬고 있습니다.",
      roles: [
        "결재 서비스 메인/작성/관리자 화면 개발 및 운영",
        "정책형 UI의 상태 흐름 정리와 구조 개선",
        "Electron 환경 확장을 위한 공통 구조 정리 참여",
      ],
    },
    {
      company: "Matrios",
      period: "2021.06 - 2022.06",
      summary: "교육형 서비스 개발에 참여하며 프론트엔드 구현과 클라우드 기반 연결 구조를 함께 경험했습니다.",
      roles: [
        "React 기반 화면 구현",
        "AWS Amplify, Lambda, DynamoDB, API Gateway 연동 경험",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "문제를 먼저 짧게 요약합니다",
      description:
        "누가 어떤 맥락에서 막히는지부터 정리하고, 화면이 해결해야 할 핵심 행동을 가장 먼저 정의합니다.",
    },
    {
      step: "02",
      title: "작은 단위로 톤과 흐름을 검증합니다",
      description:
        "버튼, 카드, 섹션, 카피처럼 반복되는 단위를 먼저 맞춰 전체 화면이 빠르게 정돈되도록 합니다.",
    },
    {
      step: "03",
      title: "구조와 카피를 함께 다듬습니다",
      description:
        "정보의 순서와 문장의 온도를 같이 조정해 사용자가 부담 없이 다음 행동을 이어가게 만듭니다.",
    },
    {
      step: "04",
      title: "정적으로도 바로 열리는 상태까지 마감합니다",
      description:
        "빌드 없이 열리는 구조, 가벼운 인터랙션, 쉬운 수정 포인트까지 남겨 다음 작업도 편하게 이어지게 합니다.",
    },
  ],
  contactLinks: [
    { label: "GitHub", href: "https://github.com/dydwkd486" },
    { label: "Email", href: "mailto:dydwkd48670@gmail.com" },
    { label: "Resume", href: "./daangn_cv_jo_yongjang.docx" },
  ],
};
