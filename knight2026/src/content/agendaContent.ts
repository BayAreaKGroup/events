import type { Locale } from "@/content/siteContent";

export type AgendaItem = {
  startTime: string;
  title: string;
  description?: string;
  speakers?: readonly string[];
  type?: string;
  location?: string;
};

export type AgendaCopy = {
  headerTitle: string;
  headerDescription: string;
  scheduleNote: string;
  downloadLabel: string;
  attendeeFields: string;
  attendeeDescription: string;
  groupsTitle: string;
  groupsDescription: string;
  groupsList: string;
  items: readonly AgendaItem[];
};

export const agendaCopy: Record<Locale, AgendaCopy> = {
  en: {
    headerTitle: "Agenda",
    headerDescription: "Explore K-Night 2026 sessions",
    scheduleNote:
      "Program, sequence, and times are subject to change without prior notice.",
    downloadLabel: "Download Full Version",
    attendeeFields:
      "SWE · AI/ML · Data Science & Engineering · PM · HW/Semicon · Design · Cybersecurity · Bio/Healthcare · Robotics · Marketing · Sales · Startup · VC · Research/Academia · HR · Finance · Legal · Students & More",
    attendeeDescription:
      "K-Night brings together people from a wide range of fields.",
    groupsTitle: "Meet K-Group’s Subgroups",
    groupsDescription:
      "K-Night hosts booths for K-Group’s diverse communities, giving you an opportunity to meet the people behind them.",
    groupsList:
      "Bio AI, SV Money Book Club, Study Club++, Boardgame, Between Jobs, WiNG, ESKAPE, and AI/ML groups will be there. Stop by the booths of groups you are interested in to learn more about what they do and chat with the organizers.",
    items: [
      {
        startTime: "4:00 PM",
        title: "Check-In & Pre-Networking with Dinner",
        type: "ARRIVAL",
      },
      {
        startTime: "5:00 PM",
        title: "Opening",
        type: "OPENING",
      },
      {
        startTime: "5:10 PM",
        title: "Keynote Session",
        speakers: [
          "Kristy Kim, Co-Founder & CEO, Tomo Credit",
          "Kathy Ku, Partner, Sazze",
        ],
        type: "KEYNOTE",
      },
      {
        startTime: "6:00 PM",
        title: "Fireside Chat",
        speakers: [
          "Yu Seung Kim, Corporate Vice President, Head of Security Lab @ Samsung Electronics",
          "Junyong Suh, Senior Member of Technical Staff @ Nutanix",
          "Joo Yeon Chae, BAKG Director, Senior Engineer @ AMD",
        ],
        type: "CONVERSATION",
      },
      {
        startTime: "6:30 PM",
        title: "Open Networking Session — Mix & Mingle",
        description:
          "K-Night brings together Korean professionals across Silicon Valley’s tech community. A passing connection might become a friend, neighbor, or new opportunity.",
        type: "NETWORKING",
      },
      {
        startTime: "7:40 PM",
        title: "20x20 Talk Session",
        speakers: [
          "Jihye Moon, Research Scientist @ Meta",
          "Chanhee Lee, Co-Founder @ Aside",
          "Hyunah Jung, CEO & Founder @ Meoster",
          "Jung Yeon Kim, Software Engineer, Musical Producer",
          "Sam Jang, Staff Product Designer @ Rivian",
        ],
        type: "TALKS",
      },
      {
        startTime: "8:20 PM",
        title: "Raffle & Closing",
        description:
          "Enjoy games, quizzes, and a raffle for unexpected surprises and good fortune. Stay with us until the end and see if you become this year’s lucky K-Night winner.",
        type: "CLOSING",
      },
    ],
  },
  ko: {
    headerTitle: "Agenda",
    headerDescription: "K-Night 2026 행사의 전체 일정을 한눈에 확인해보세요.",
    scheduleNote: "프로그램, 순서 및 시간은 사전 공지 없이 변경될 수 있습니다.",
    downloadLabel: "Download Full Version",
    attendeeFields:
      "SWE · AI/ML · Data Science & Engineering · PM · HW/Semicon · Design · Cybersecurity · Bio/Healthcare · Robotics · Marketing · Sales · Startup · VC · Research/Academia · HR · Finance · Legal · Students & More",
    attendeeDescription: "K-Night에는 다양한 분야의 사람들이 참석합니다.",
    groupsTitle: "K-Group의 다양한 소그룹을 만나보세요!",
    groupsDescription:
      "K-Night에서는 K-Group의 다양한 소그룹을 직접 만나볼 수 있는 소그룹 부스가 운영됩니다.",
    groupsList:
      "Bio AI, SV머니북클럽, Study Club++, Boardgame, Between Jobs, WiNG, ESKAPE, 그리고 AI/ML 그룹이 함께합니다. 평소 관심 있었던 소그룹의 부스에 들러 어떤 활동을 하고 있는지 알아보고, 운영진과 이야기도 나누어 보세요.",
    items: [
      {
        startTime: "4:00 PM",
        title: "Check-In & Pre-Networking with Dinner",
        type: "ARRIVAL",
      },
      {
        startTime: "5:00 PM",
        title: "Opening",
        type: "OPENING",
      },
      {
        startTime: "5:10 PM",
        title: "Keynote Session",
        speakers: [
          "크리스티 김, Co-Founder & CEO, Tomo Credit",
          "케시 구, Partner, Sazze",
        ],
        type: "KEYNOTE",
      },
      {
        startTime: "6:00 PM",
        title: "Fireside Chat",
        speakers: [
          "김유승, Corporate Vice President, Head of Security Lab @ Samsung Electronics",
          "서준용, Senior Member of Technical Staff @ Nutanix",
          "채주연, BAKG Director, Senior Engineer @ AMD",
        ],
        type: "CONVERSATION",
      },
      {
        startTime: "6:30 PM",
        title: "Open Networking Session — Mix & Mingle",
        description:
          "K-Night에서는 실리콘밸리의 다양한 테크 분야에서 활약하는 한인들을 한자리에서 만날 수 있습니다. 스쳐 지나던 인연이 친구나 든든한 이웃으로, 때로는 새로운 기회로 이어지기도 합니다.",
        type: "NETWORKING",
      },
      {
        startTime: "7:40 PM",
        title: "20x20 Talk Session",
        speakers: [
          "문지혜, Research Scientist @ Meta",
          "이찬희, Co-Founder @ Aside",
          "정현아, CEO & Founder @ Meoster",
          "김정연, Software Engineer, Musical Producer",
          "장현석, Staff Product Designer @ Rivian",
        ],
        type: "TALKS",
      },
      {
        startTime: "8:20 PM",
        title: "Raffle & Closing",
        description:
          "간단한 게임과 퀴즈, 추첨을 통해 다양한 경품과 뜻밖의 행운을 만나보세요. 마지막 순간까지 함께 즐기며, 올해 K-Night 행운의 주인공에 도전해 보세요!",
        type: "CLOSING",
      },
    ],
  },
};
