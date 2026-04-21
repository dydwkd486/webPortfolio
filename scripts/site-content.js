export const portfolioContent = {
  meta: {
    title: "조용장 | Frontend Portfolio",
  },
  profile: {
    name: "조용장",
    role: "사용자를 공감하는 프론트엔드 개발자",
    tagline:
      "일을 빠르게 적응하고 팀원과의 소통을 중요시 하며 AI를 활용하여 빠르게 개발한다는 강점이 있습니다.",
    summary:
      "사내 결재 UI 및 서비스, 결재 어드민 UI 및 서비스, Electron 확장 구조 전환까지 경험하며 문제 정의부터 구조 개선, 안정화까지 꾸준히 맡아왔습니다.",
   },
  facts: [
    { label: "이름", value: "조용장" },
    { label: "근무지", value: "서울 송파구" },
    { label: "관심사", value: "Frontend, AI, Android, Electron" },
  ],
  stats: [
    { value: "3+년", label: "실무 프론트엔드 경험" },
    { value: "React", label: "주력 구현 스택" },
    { value: "Web + Electron", label: "확장 구조 전환 경험" },
  ],
  skills: [
    {
      title: "Language",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      items: ["React", "Redux", "React Query"],
    },
    {
      title: "Product",
      items: ["Information Architecture", "UX Writing", "Design Systems", "Maintainability"],
    },
    {
      title: "Tools",
      items: ["Electron", "Git", "Vitest", "Code Review", "GitHub Pages"],
    },
  ],
  projects: [
    {
      badge: "Samsung SDS - Approval",
      period: "2023.02 - 현재",
      title: "사내 결재 서비스 주요 화면 개발과 운영",
      description:
        "결재 메인, 결재 작성, 관리자, 승인 흐름처럼 성격이 다른 화면을 함께 다루며 각 회사 별 정책과 예외가 많은 업무 UI를 구조적으로 개발하였습니다. 사용자가 편리하게 결재를 작성할 수 있게 화면 로직과 상태 흐름을 다듬고, 계속 수정되는 요구사항을 흡수하기 쉬운 형태로 만드는 데 집중했습니다.",
      impactTitle: "어떻게 기여했는지",
      impact:
        "실제 결재 사용자라고 생각하며 구현하고 사용자 행동 순서를 다시 설계하고, 운영 중 발생하던 복잡도를 줄이는 방향으로 화면 구조와 유지보수 작업을 하였습니다.",
      pills: ["React", "JavaScript", "Redux", "React Query"],
    },
    { // 여기서부터 추가 작업진행해야함.
      badge: "Samsung SDS - Approval admin",
      period: "2023.02 - 현재",
      title: "노출 조건과 권한 규칙이 많은 결재 정책 UI 고도화",
      description:
        "권한, 조건, 상태에 따라 달라지는 인터페이스를 만들면서 화면 표현과 비즈니스 로직의 경계를 더 명확하게 분리했습니다. 테스트와 구조 개선을 함께 진행해 이후 변경에도 흔들리지 않도록 보완했습니다.",
      impactTitle: "남긴 변화",
      impact:
        "복잡한 분기 처리를 읽기 쉬운 단위로 나누고, 유지보수 과정에서 실수하기 쉬운 구간을 줄이는 데 집중했습니다.",
      pills: ["Business Logic", "Testing", "Maintainability"],
    },
    {
      badge: "Samsung SDS - Web Messenger TF",
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
      badge: "Matrios - FullStack Development",
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
  contactLinks: [
    { label: "GitHub", href: "https://github.com/dydwkd486" },
    { label: "Email", href: "mailto:dydwkd48670@gmail.com" },
    { label: "Resume", href: "./daangn_cv_jo_yongjang.docx" },
  ],
};
