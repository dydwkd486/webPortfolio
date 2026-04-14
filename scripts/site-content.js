export const portfolioContent = {
  meta: {
    title: "조용장 | Frontend Portfolio",
    description:
      "조용장 프론트엔드 포트폴리오. 삼성SDS 결재 서비스, 웹메신저 구조 전환, React 기반 서비스 개발 경험을 담았습니다.",
  },
  profile: {
    name: "조용장",
    role: "Frontend Engineer",
    tagline:
      "React 기반 웹 서비스 개발과 운영 경험을 바탕으로, 사용자 흐름을 더 단순하고 또렷하게 만드는 프론트엔드를 지향합니다.",
    summary:
      "복잡한 업무 도메인과 다양한 예외 케이스를 다루며 구조 개선, 테스트 보강, 화면 설계까지 함께 챙겨온 프론트엔드 엔지니어입니다.",
    story:
      "삼성SDS에서 사내 결재 서비스의 메인, 작성, 어드민 등 핵심 화면을 개발하고 운영하면서 복잡한 정책과 다양한 예외를 안정적으로 풀어내는 경험을 쌓았습니다. 최근에는 Electron 기반 웹메신저를 웹 환경으로 확장하는 구조 전환 작업에도 참여하고 있습니다. 저는 기능을 구현하는 데서 멈추지 않고, 사용자가 자연스럽게 이해하고 신뢰할 수 있는 흐름으로 다듬는 과정에 강점을 가지고 있습니다.",
    whyKarrot:
      "당근마켓은 생활에 가까운 문제를 기술과 제품 감각으로 풀어내는 서비스라고 생각합니다. 저는 복잡한 도메인을 단순한 화면으로 번역하는 경험이 있고, 당근마켓처럼 신뢰와 속도가 중요한 서비스에서 그 강점을 더 잘 발휘할 수 있다고 믿습니다.",
  },
  stats: [
    { value: "3+ yrs", label: "실무 프론트엔드 경험" },
    { value: "React", label: "주력 개발 기반" },
    { value: "SDS", label: "현재 주요 경력" },
    { value: "Web + Electron", label: "확장 경험" },
  ],
  fitPills: ["복잡한 정책 화면", "예외 케이스 대응", "구조 개선", "사용자 흐름 단순화"],
  strengths: [
    {
      title: "복잡한 도메인을 화면 흐름으로 정리합니다",
      description:
        "결재처럼 규칙과 예외가 많은 도메인에서도 사용자가 현재 상태와 다음 행동을 이해하기 쉬운 구조로 화면을 설계합니다.",
    },
    {
      title: "운영 중인 서비스의 안정성을 끌어올립니다",
      description:
        "기능 추가에 그치지 않고 테스트 코드 보강과 구조 개선을 함께 진행해 유지보수성과 안정성을 높이는 방식으로 일합니다.",
    },
    {
      title: "환경 전환에서도 공통 구조를 설계합니다",
      description:
        "Electron과 웹처럼 실행 환경이 다른 경우에도 공통으로 가져갈 수 있는 화면과 상태 흐름을 정리하는 데 익숙합니다.",
    },
  ],
  projects: [
    {
      badge: "Samsung SDS",
      year: "2023.02 ~ Present",
      title: "사내 결재(Approval) 서비스 주요 화면 프론트엔드 개발 및 운영",
      description:
        "메인, 작성, 어드민 등 핵심 화면을 담당하며 복잡한 정책과 예외 조건을 화면 로직으로 정리했습니다. 기능 추가와 운영 안정화, 유지보수 개선을 함께 수행했습니다.",
      pills: ["React", "JavaScript", "Redux", "React Query"],
    },
    {
      badge: "Policy UI",
      year: "2023 ~ Present",
      title: "부서함 기능과 노출 조건 로직을 포함한 결재 정책 UI 고도화",
      description:
        "회사·부서별 노출 조건과 어드민 정책을 연동하는 프론트엔드 로직을 구현하고, 다양한 결재 시나리오에서 오류를 줄일 수 있도록 화면 구조와 테스트 코드를 보강했습니다.",
      pills: ["Business Logic", "Testing", "Maintainability"],
    },
    {
      badge: "Web Messenger TF",
      year: "2026.03 ~ Present",
      title: "Electron 기반 웹메신저를 웹 환경으로 확장하는 구조 전환",
      description:
        "Electron 전용 구조를 웹에서도 자연스럽게 동작하도록 바꾸는 작업에 참여했습니다. 플랫폼 차이를 고려해 공통으로 가져갈 화면 구조와 상태 흐름을 정리했습니다.",
      pills: ["Electron", "Redux", "Architecture", "Codex"],
    },
    {
      badge: "Matrios",
      year: "2021.06 ~ 2022.06",
      title: "MatFocus 시선 추적 교육 시스템 개발",
      description:
        "React 기반 서비스 개발에 참여했고, AWS Amplify와 Lambda, DynamoDB, API Gateway를 활용해 웹과 백엔드를 함께 다뤘습니다.",
      pills: ["React", "AWS Amplify", "Lambda", "DynamoDB"],
    },
  ],
  process: [
    {
      step: "01",
      title: "문제 장면을 먼저 정리",
      description: "사용자가 어떤 상황에서 들어오고, 무엇을 확인해야 하며, 어디서 멈추는지부터 정리합니다.",
    },
    {
      step: "02",
      title: "하네스로 토큰과 리듬 검증",
      description: "색상, 버튼, 카드, 섹션 밀도를 작은 단위로 먼저 시험해 전체 톤을 빠르게 맞춥니다.",
    },
    {
      step: "03",
      title: "메인 흐름에 조합",
      description: "검증한 스타일을 실제 섹션에 올리고, 카피와 정보 우선순위를 같이 다듬습니다.",
    },
    {
      step: "04",
      title: "배포 가능한 형태로 정리",
      description: "구현이 끝나면 바로 공유 가능한 정적 구조와 편집 포인트를 남겨 다음 수정이 쉬운 상태로 마무리합니다.",
    },
  ],
  contactLinks: [
    { label: "GitHub", href: "https://github.com/dydwkd486" },
    { label: "Email", href: "mailto:dydwkd48670@gmail.com" },
    { label: "Resume", href: "./daangn_cv_jo_yongjang.docx" },
  ],
};
