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
      impactTitle: "기여 부분",
      impact:
        "실제 결재 사용자라고 생각하며 구현하고 사용자 행동 순서를 다시 설계하고, 운영 중 발생하던 복잡도를 줄이는 방향으로 화면 구조와 유지보수 작업을 하였습니다.",
      pills: ["React", "JavaScript", "Redux", "React Query"],
    },
    { 
      badge: "Samsung SDS - Approval admin",
      period: "2023.02 - 현재",
      title: "사내 결재 어드민 서비스 주요 화면 개발과 운영",
      description:
        "기존에 제이쿼리로 개발 되어있던 사내 결재 어드민 서비스를 react로 개발하고 유지보수 작업을 하였습니다. ",
      impactTitle: "기여 부분",
      impact:
        "처음 설계부터 시작하여 React 개발 및 운영까지 진행하였고, 추가 개발에 맞춰서 기능을 추가하였습니다.  ",
      pills: ["React", "JavaScript", "Redux", "React Query"],
    },
    {
      badge: "Samsung SDS - Web Messenger TF",
      period: "2026.03 - 현재",
      title: "Electron 기반의 메신저를 웹 기반 환경으로 확장하는 전환",
      description:
        "Electron 기반으로 IPC 통신 및 서버 통신등을 웹환경에서도 동작할수있게 개발을 진행하였습니다. Electron의 기존 모든 기능은 다 동작하면서 웹 메신저에서도 동작할 수 있게 하기 위해서 알맞은 분기 처리와 테스트 코드를 통한 점검을 진행하였습니다.",
      impactTitle: "기여 부분",
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
      impactTitle: "기여 부분",
      impact:
        "프론트엔드 구현을 중심으로 서비스 연결 구조를 이해하고, 기능이 실제 사용 흐름 안에서 자연스럽게 동작하도록 다듬었습니다.",
      pills: ["React", "AWS Amplify", "Lambda", "DynamoDB"],
    },
  ],
  career: [
    { // 여기서부터 추가 작업진행해야함.
      company: "Samsung SDS",
      period: "2023.02 - 현재",
      summary: "사내 업무 서비스의 주요 화면을 개발하고 운영하며, 다양한 웹 UI를 다듬고 있습니다.",
      roles: [
        "결재 서비스 메인/작성/관리자 화면 개발 및 운영",
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
