export const portfolioContent = {
  meta: {
    title: "조용장 | Frontend Portfolio",
    description: "동네의 문제를 따뜻하고 실용적인 인터페이스로 풀어내는 프론트엔드 포트폴리오입니다.",
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
      detail: {
        images: [
          {
            src: "./res/결재사진1.png",
            alt: "사내 결재 서비스 주요 화면 첫 번째 이미지",
            caption: "결재 서비스 주요 화면 1",
          },
          {
            src: "./res/결재사진2.png",
            alt: "사내 결재 서비스 주요 화면 두 번째 이미지",
            caption: "결재 서비스 주요 화면 2",
          },
        ],
        overview:
          "회사별 정책과 결재 흐름이 다른 상황에서도 사용자가 작성, 검토, 승인 과정을 자연스럽게 이어갈 수 있도록 주요 화면의 상태와 인터랙션을 정리했습니다.",
        tasks: [
          "결재 메인, 작성, 관리자, 승인 흐름의 화면 구현 및 운영",
          "회사별 정책과 예외 케이스를 반영하기 쉬운 화면 구조 설계",
          "운영 중 발견되는 사용성 이슈와 복잡한 상태 흐름 개선",
        ],
        result:
          "반복적으로 바뀌는 요구사항을 더 안정적으로 반영할 수 있게 되었고, 사용자 행동 순서에 맞춘 화면 개선 경험을 쌓았습니다.",
      },
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
      detail: {
        images: [
          {
            src: "./res/결재어드민사진.png",
            alt: "사내 결재 어드민 서비스 주요 화면 이미지",
            caption: "결재 어드민 주요 화면",
          },
        ],
        overview:
          "기존 jQuery 기반 어드민을 React 기반 화면으로 전환하며, 운영자가 여러 설정과 관리 기능을 더 예측 가능하게 다룰 수 있도록 구현했습니다.",
        tasks: [
          "React 기반 어드민 화면 설계 및 개발",
          "운영 중 추가되는 관리 기능과 정책 변경 대응",
          "기존 화면의 흐름을 유지하면서 유지보수하기 쉬운 컴포넌트 구조 정리",
        ],
        result:
          "새 기능을 추가하기 쉬운 기반을 만들고, 결재 서비스 운영에 필요한 관리 화면을 꾸준히 개선했습니다.",
      },
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
      detail: {
        placeholderLabel: "구현중",
        placeholderCaption: "관련 이미지는 현재 구현중입니다.",
        overview:
          "Electron 환경에서 동작하던 메신저 기능을 웹 환경에서도 사용할 수 있도록 통신 방식과 환경별 분기 구조를 정리했습니다.",
        tasks: [
          "IPC 통신과 서버 통신 흐름의 웹 환경 대응",
          "Electron 기능을 유지하면서 웹 메신저에서도 동작하는 분기 처리",
          "환경 차이로 생기는 회귀를 줄이기 위한 테스트 코드 기반 점검",
        ],
        result:
          "플랫폼이 달라져도 공통 기능을 유지하는 방법과, 환경별로 새로 설계해야 하는 경계를 더 명확히 이해하게 됐습니다.",
      },
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
      detail: {
        images: [
          {
            src: "./res/Matrios사진.png",
            alt: "교육형 서비스 주요 화면 이미지",
            caption: "Matrios 주요 화면",
          },
        ],
        overview:
          "교육형 서비스의 화면 구현과 클라우드 기반 연결 구조를 함께 경험하며, 사용자가 실제로 이용하는 흐름 안에서 기능이 완성되도록 개발했습니다.",
        tasks: [
          "React 기반 주요 화면 구현",
          "AWS Amplify, Lambda, DynamoDB, API Gateway 연동 경험",
          "기능 단위 화면과 데이터 흐름을 함께 확인하며 서비스 안정화 참여",
        ],
        result:
          "프론트엔드 화면 구현을 넘어 제품이 실제 서비스로 동작하기 위해 필요한 연결 구조와 기본기를 익혔습니다.",
      },
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
