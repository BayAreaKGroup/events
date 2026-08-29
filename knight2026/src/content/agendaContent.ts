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
  afterPartyTitle: string;
  afterPartyDescription: string;
  afterPartyBody?: string;
  afterPartyBadges: readonly string[];
  afterPartyLocation: string;
  afterPartyLocationCity: string;
  afterPartyLocationHref: string;
  afterPartyRsvpLabel: string;
  afterPartyRsvpHref: string;
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
    afterPartyTitle: "K-Night x DivZero\nAfter Party",
    afterPartyDescription:
      "Continue the K-Night experience at the official after party, hosted and sponsored by DivZero at Steins.",
    afterPartyBody:
      "Join us after K-Night for an evening of continued conversations, new connections, and good company. Admission is free, but a separate RSVP is required to attend the after party. Continue conversations with people you met at K-Night, meet new members of the community, and enjoy the evening together at Steins.",
    afterPartyBadges: ["RSVP Required"],
    afterPartyLocation: "Steins Beer Garden & Restaurant",
    afterPartyLocationCity: "Mountain View, CA",
    afterPartyLocationHref:
      "https://www.google.com/maps/search/?api=1&query=Steins%20Beer%20Garden%20%26%20Restaurant&query_place_id=ChIJuzFtRDS3j4AR1gfuHqaeG7k",
    afterPartyRsvpLabel: "BOOK NOW",
    afterPartyRsvpHref: "https://luma.com/5b3ox6lr",
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
          "Joo Yeon Chae, K-Group Director, Senior Engineer @ AMD",
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
        description:
          "Presenting 20 slides for 20 seconds each, this fast-paced format delivers a complete talk in 400 seconds. One of K-Night’s most anticipated and beloved programs, the session brings together speakers from across the Bay Area to share their experiences, challenges, and lessons learned in a concise, compelling format. The speakers on stage may be your friends, colleagues, acquaintances, or neighbors. In just 400 seconds, discover new inspiration and make meaningful connections.",
        speakers: [
          "Jihye Moon, Research Scientist @ Meta",
          "Chanhee Lee, Co-Founder @ Aside",
          "Hyunah Jung, CEO & Founder @ Meostar",
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
    headerTitle: "세션",
    headerDescription: "K-Night 2026의 세션을 살펴보세요",
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
    afterPartyTitle: "K-Night x DivZero\nAfter Party",
    afterPartyDescription:
      "K-Night의 여운을 조금 더 즐기고 싶으신가요? K-Night 이후 DivZero에서 Steins를 대관하여 스폰서하는 애프터 파티가 준비되어 있습니다.",
    afterPartyBody:
      "무료입장이며, 참석을 원하시는 분들은 애프터파티 RSVP를 별도로 부탁드립니다. K-Night에서 만난 사람들과 못다 한 이야기도 나누고 조금 더 여유롭게 밤을 즐겨보세요.",
    afterPartyBadges: ["RSVP 필수"],
    afterPartyLocation: "Steins Beer Garden & Restaurant",
    afterPartyLocationCity: "Mountain View, CA",
    afterPartyLocationHref:
      "https://www.google.com/maps/search/?api=1&query=Steins%20Beer%20Garden%20%26%20Restaurant&query_place_id=ChIJuzFtRDS3j4AR1gfuHqaeG7k",
    afterPartyRsvpLabel: "예약하기",
    afterPartyRsvpHref: "https://luma.com/5b3ox6lr",
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
          "구 슬, Partner, Sazze",
        ],
        type: "KEYNOTE",
      },
      {
        startTime: "6:00 PM",
        title: "Fireside Chat",
        speakers: [
          "김유승, Corporate Vice President, Head of Security Lab @ Samsung Electronics",
          "서준용, Senior Member of Technical Staff @ Nutanix",
          "채주연, K-Group Director, Senior Engineer @ AMD",
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
        description:
          "20장의 슬라이드를 장당 20초씩, 총 400초 동안 발표하는 특별한 형식의 세션입니다. 매년 가장 많은 기대를 받고 인기 있는 K-Night의 대표 프로그램 중 하나로, Bay Area에서 활동하는 다양한 연사들이 자신의 경험과 도전, 배움을 압축해서 들려드립니다. 무대 위 연사는 여러분의 친구, 동료, 지인, 혹은 이웃일 수도 있습니다. 짧지만 강렬한 400초를 통해 새로운 영감과 연결을 만나보세요.",
        speakers: [
          "문지혜, Research Scientist @ Meta",
          "이찬희, Co-Founder @ Aside",
          "정현아, CEO & Founder @ Meostar",
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
