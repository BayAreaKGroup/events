export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];

export const homeCopy = {
  en: {
    overview: {
      subtitle: "Beyond Tech",
      description:
        "Connecting people beyond technology in the age of AI, where human connection and goodwill inspire growth.",
      date: "September 12, Saturday",
      time: "4:00 – 8:30 PM",
      location: "Computer History Museum",
      mobileDate: "September 12, Sat",
      labels: { date: "Date", time: "Time", location: "Location" },
    },
    kNight: {
      description:
        "K-Night brings Bay Area professionals together beyond work and technology.\nMeet new people, exchange ideas, and build meaningful connections.",
      stats: [
        { end: 14, suffix: "th", label: "Years of K-Night" },
        { end: 400, suffix: "+", label: "Annual Attendees" },
        { end: 7000, suffix: "+", label: "K-Group Members" },
      ],
    },
    video: {
      turnSoundOn: "Turn sound on",
      turnSoundOff: "Turn sound off",
    },
    past: {
      title: "K-Night Highlights",
      description: "Explore highlights from previous K-Nights.",
      cta: "View More",
    },
    network: {
      title: "Join Our Network",
      description:
        "Follow K-Group’s official channels for the latest news and updates. Join our community and start building meaningful connections with fellow members today.",
      actions: ["Visit", "Connect", "Follow", "Follow", "Join"],
      banner: [
        "September 12, Saturday",
        "Get a Ticket →",
        "Computer History Museum",
        "Mountain View, CA",
      ],
    },
  },
  ko: {
    overview: {
      subtitle: "Beyond Tech",
      description:
        "AI 시대, 기술을 넘어 사람과 사람의 연결을 통해\n새로운 성장과 가능성을 만들어갑니다.",
      date: "9월 12일 토요일",
      time: "4:00 – 8:30 PM",
      location: "컴퓨터 역사 박물관",
      mobileDate: "9월 12일 토요일",
      labels: { date: "날짜", time: "시간", location: "장소" },
    },
    kNight: {
      description:
        "K-Night는 Bay Area 전문가들이 업무와 기술을 벗어나 서로 영감을 주고받는 특별한 자리입니다.\n다채로운 사람들과 깊이 있게 교류하며, 삶에 활력을 더해줄 소중한 인연을 맺어보세요.",
      stats: [
        { end: 14, suffix: "회", label: "K-Night 개최" },
        { end: 400, suffix: "+", label: "매회 참석자" },
        { end: 7000, suffix: "+", label: "K-Group 회원 수" },
      ],
    },
    video: {
      turnSoundOn: "소리 켜기",
      turnSoundOff: "소리 끄기",
    },
    past: {
      title: "K-Night 하이라이트",
      description: "지난 K-Night의 주요 순간을 확인해보세요.",
      cta: "더보기",
    },
    network: {
      title: "K-Group 공식 채널",
      description:
        "K-Group 공식채널을 팔로우하시면 K-Night을 비롯한 다양한 행사와 프로그램 소식을 빠르게 받아보실 수 있습니다.",
      actions: ["방문하기", "연결하기", "팔로우하기", "팔로우하기", "참여하기"],
      banner: [
        "2026년 9월 12일",
        "티켓 구매 →",
        "컴퓨터 역사 박물관",
        "마운틴뷰 캘리포니아",
      ],
    },
  },
} as const;

export const aboutCopy = {
  en: {
    tags: ["FOUNDED 2007", "NON-PROFIT"],
    body: "Bay Area K Group (BAKG) is a charitable and educational non-profit 501(c)(3) organization for high-tech Korean experts in the San Francisco Bay Area. Through monthly seminars, workshops, and conferences, we are committed to promoting scientific, technological, and entrepreneurial knowledge for the general welfare of society.",
    teamTitle: "Our Team",
    teamDescription:
      "K-Group is powered by dedicated volunteers who build community, organize events, and keep our network connected year-round.",
    teamGroups: [
      {
        caption: "Bay Area K-Group",
        heading: "Management Team",
        members: [
          { name: "Jenny Lee", role: "Co-President" },
          { name: "Sangho Eum", role: "Co-President" },
          { name: "Taeho Kim", role: "Vice President" },
          { name: "Seonyoung Son", role: "Treasurer" },
          { name: "Joo Yeon Choe", role: "Director" },
          { name: "Yonghee (Amy) Kim", role: "Director" },
          { name: "Ji hoon Kim", role: "Director" },
          { name: "Jinwon Choi", role: "Communication Manager" },
        ],
      },
      {
        caption: "K-Night 2026 Volunteer",
        heading: "Media Team",
        members: [
          { name: "Eunhye Kim" },
          { name: "Minjun Byun" },
          { name: "Seyeong Yeon" },
          { name: "Hyunsu Song" },
        ],
      },
      {
        caption: "K-Night 2026 Volunteer",
        heading: "Event Team",
        members: [{ name: "Coming Soon" }],
      },
    ],
  },
  ko: {
    tags: ["설립 2007년", "비영리 단체"],
    body: "Bay Area K-Group(BAKG)은 실리콘밸리 지역에서 테크 분야에 종사하는 한인들의 자발적 조직입니다. 정기적으로 컨퍼런스와 네트워킹 행사를 통해 회원들간의 기술 교류와 친목도모를 돕고 있으며,\n다양한 기술분야와 취미에 따라 여러 소모임들이 자율적으로 운영되고 있습니다.",
    teamTitle: "팀소개",
    teamDescription:
      "K-Group은 커뮤니티를 발전시키고 다양한 행사를 기획하며, 회원과 네트워크를 지속적으로 연결해 나가는 운영진과 자원봉사자들로 함께 만들어갑니다.",
    teamGroups: [
      {
        caption: "Bay Area K-Group",
        heading: "회장단",
        members: [
          { name: "이제니", role: "공동 회장" },
          { name: "엄상호", role: "공동 회장" },
          { name: "김태호", role: "부회장" },
          { name: "손선영", role: "재무 담당" },
          { name: "최주연", role: "이사" },
          { name: "김용희", role: "이사" },
          { name: "김지훈", role: "이사" },
          { name: "최진원", role: "커뮤니케이션 매니저" },
        ],
      },
      {
        caption: "K-Night 2026 Volunteer",
        heading: "미디어팀",
        members: [
          { name: "김은혜" },
          { name: "변민준" },
          { name: "연세영" },
          { name: "송현수" },
        ],
      },
      {
        caption: "K-Night 2026 Volunteer",
        heading: "행사팀",
        members: [{ name: "추후 공개" }],
      },
    ],
  },
} as const;

export const comingSoonCopy = {
  en: {
    intro:
      "K-Night, K-Group’s flagship event,\nis coming back again this year.",
    followIntro:
      "Follow the channels below to get\nthe latest updates as soon as they’re announced.",
  },
  ko: {
    intro: "올해에도 K-Group의 대표 행사인\nK-Night이 찾아옵니다.",
    followIntro:
      "아래 채널을 팔로우하시면 가장 빠르게\n업데이트 소식을 받아보실 수 있습니다.",
  },
} as const;

export const sponsorCopy = {
  en: {
    headerTitle: "Thank you to our sponsors",
    mobileHeaderTitle: "Thank you to\nour sponsors",
    tiers: [
      {
        id: "diamond",
        title: "Diamond",
        sponsors: [
          {
            id: "kic",
            name: "KIC Silicon Valley",
            href: "https://www.kicsv.org/",
          },
        ],
      },
      {
        id: "gold",
        title: "Gold",
        sponsors: [
          {
            id: "naver-d2sf",
            name: "Naver D2SF",
            href: "https://d2sf.naver.com/ko",
          },
        ],
      },
      {
        id: "silver",
        title: "Silver",
        sponsors: [
          {
            id: "kcgsf",
            name: "Consulate General of the Republic of Korea in San Francisco",
            href: "https://www.mofa.go.kr/us-sanfrancisco-ko/index.do",
          },
          {
            id: "asan",
            name: "Asan Nanum Foundation",
            href: "https://asan-nanum.org/",
          },
          {
            id: "fastcampus",
            name: "Fastcampus",
            href: "https://fastcampus.co.kr/",
          },
          {
            id: "jigo",
            name: "Jigo",
            href: "https://www.jigo.work/",
          },
        ],
      },
      {
        id: "bronze",
        title: "Bronze",
        sponsors: [
          {
            id: "kdb-sv",
            name: "KDB SV",
            href: "https://www.kdb.co.kr/BZCOWS00N01.act?wcmsPath=/hmp/ch/gm/sv/CHGMSV1101.html&GmBrnId=SV&_mnuId=IHIHGM2127&GmMlngTc=en&jobNotice=Y",
          },
          { id: "like-lion", name: "Like Lion", href: "https://likelion.net/" },
        ],
      },
    ],
    subtitle: "Partnership & Sponsorship Inquiries",
    body: "Bay Area K-Group welcomes support from individuals and organizations of all sizes. Every contribution helps us create meaningful connections and bring the K-Night community together.",
    cta: "GET IN TOUCH",
  },
  ko: {
    headerTitle: "K-Night 2026을 후원해주신\n모든 분들께 감사드립니다",
    mobileHeaderTitle: "K-Night 2026을 후원해주신\n모든 분들께 감사드립니다",
    tiers: [
      {
        id: "diamond",
        title: "다이아몬드",
        sponsors: [
          {
            id: "kic",
            name: "KIC Silicon Valley",
            href: "https://www.kicsv.org/",
          },
        ],
      },
      {
        id: "gold",
        title: "골드",
        sponsors: [
          {
            id: "naver-d2sf",
            name: "Naver D2SF",
            href: "https://d2sf.naver.com/ko",
          },
        ],
      },
      {
        id: "silver",
        title: "실버",
        sponsors: [
          {
            id: "kcgsf",
            name: "샌프란시스코 총영사관",
            href: "https://www.mofa.go.kr/us-sanfrancisco-ko/index.do",
          },
          { id: "asan", name: "아산나눔재단", href: "https://asan-nanum.org/" },
          {
            id: "fastcampus",
            name: "Fastcampus",
            href: "https://fastcampus.co.kr/",
          },
          {
            id: "jigo",
            name: "Jigo",
            href: "https://www.jigo.work/",
          },
        ],
      },
      {
        id: "bronze",
        title: "브론즈",
        sponsors: [
          {
            id: "kdb-sv",
            name: "KDB SV",
            href: "https://www.kdb.co.kr/BZCOWS00N01.act?wcmsPath=/hmp/ch/gm/sv/CHGMSV1101.html&GmBrnId=SV&_mnuId=IHIHGM2127&GmMlngTc=en&jobNotice=Y",
          },
          {
            id: "like-lion",
            name: "멋쟁이 사자처럼",
            href: "https://likelion.net/",
          },
        ],
      },
    ],
    subtitle: "파트너십 및 후원 문의",
    body: "Bay Area K-Group은 후원 규모와 관계없이 개인 및 기업 여러분의 소중한 후원을 언제나 환영합니다.",
    cta: "문의하기",
  },
} as const;

export const donationCopy = {
  en: {
    title: "Donation",
    supportTitle: "Support K-Group",
    description: "",
    subtitle: "Together, We Grow",
    supportSubtitle: "Every Contribution Helps Us Grow Our Community",
    body: "Since 2007, Bay Area K-Group has grown through the participation, support, and Goodwill of our members. To continue organizing K-Night and other programs for Korean professionals in the Silicon Valley tech community, we're always grateful for the support of both individual donors and corporate sponsors. Your support goes beyond helping us host an event. It helps create more opportunities for people to connect, learn, and grow together. We'd love to have you be part of that journey.",
    impactTitle: "The Impact of Your Support",
    benefits: [
      [
        "An Open Community",
        "Keeping K-Group free and accessible to Korean professionals across Silicon Valley’s tech community",
      ],
      [
        "Professional Networks",
        "Supporting groups that connect professionals, share knowledge, and exchange ideas across the industry.",
      ],
      [
        "Knowledge & Opportunities",
        "Connecting the next generation with Silicon Valley’s knowledge, experience, and opportunities.",
      ],
    ],
    getInTouch: "GET IN TOUCH",
  },
  ko: {
    title: "후원",
    supportTitle: "K-Group에 따뜻한 마음을 전해 주세요",
    description: "",
    subtitle: "Together, We Grow",
    supportSubtitle:
      "Bay Area K-Group은 후원 규모와 관계없이 개인 및 기업 여러분의 소중한 후원을 언제나 환영합니다.",
    body: "Bay Area K-Group(BAKG)은 2007년부터 회원들의 자발적인 참여와 선의(Goodwill)로 성장해 온 501(c)(3) 비영리 단체입니다. 가입비 없이 운영되는 K-Group이 지난 19년간 실리콘밸리 한인 테크 관련 분야 종사자들을 위한 다양한 세미나와 네트워킹 모임은 물론 AI, 반도체, 바이오, 모빌리티, 디자인 등 직군별 소모임을 이어올 수 있었던 것은 모두 여러분의 후원 덕분이었습니다.\n여러분의 후원은 단순한 기부가 아닙니다. 오늘 K-Group 또는 K-Night에서 나눈 인사와 영감이 내일의 기회로 이어지도록 '단단한 테크 생태계'를 만드는 일입니다.",
    impactTitle: "여러분의 후원이 만드는 변화",
    benefits: [
      [
        "열린 커뮤니티 유지",
        "실리콘밸리에서 테크 관련 분야에 종사하는 한인이라면 누구나 가입비 없이 참여할 수 있는 기회의 장 제공",
      ],
      [
        "전문 소모임 지원",
        "급변하는 테크 트렌드에 맞춘 직군별·기술별 전문 네트워크 활성화",
      ],
      [
        "나눔과 연결",
        "다음 세대 한인 인재들에게 실리콘밸리의 노하우와 기회 전달",
      ],
    ],
    getInTouch: "문의하기",
  },
} as const;

export const donationSupportCopy = {
  en: {
    heading: "How to Support\nBay Area K-Group",
    onlineTitle: "Online Donation",
    onlineBody: "Select a platform below to go directly to the donation page.",
    onlineNote: "(Zeffy platform with no processing fees)",
    checkTitle: "Check Donation",
    checkBody: "You may send a check payable to K-Group.",
    payee: "Payee: Bay Area K-Group",
    address:
      "Mailing Address: P.O Box 60424, 209 East Java Dr., Sunnyvale, CA 94086",
    matchingTitle: "Corporate Matching",
    matchingHighlight:
      "Increase your support impact by 200% through company benefits",
    matchingHighlightBody:
      "Consider using corporate donation matching programs available in Silicon Valley. Your contribution can become two or three times larger for K-Group.",
    matchingBody:
      "Many companies offer Gift-Matching programs that add a contribution equal to an employee’s donation.",
    matchingExample:
      "Example: Donate $50 to K-Group through your company Giving Portal and request a match. Your company may contribute $50 or more, creating a total impact of $100 or more.",
    matchingSearch:
      "Search for “Bay Area K-Group” in your company HR or Giving Portal.",
    volunteerTitle: "Volunteer Grant",
    volunteerBody:
      "Even if you do not donate money, your time can become a contribution. If you have served as K-Group staff or a volunteer, you may request corporate support for your service hours through a Volunteer Grant program.",
    taxNote:
      "Bay Area K-Group is a 501(c)(3) nonprofit organization registered with the IRS (EIN: 51-0656931). Your contribution is used transparently for community operations and may be tax-deductible. (Corporate and individual support are both welcome.)",
    ctaBody: [
      "If K-Group has helped you meet good people and grow together, please pass that opportunity on to someone else.",
      "Your small contribution can create more connections and opportunities for growth in Silicon Valley.",
    ],
    ctaButton: "Support K-Group",
  },
  ko: {
    heading: "후원 방법",
    onlineTitle: "간편한 온라인 기부",
    onlineBody: "원하시는 플랫폼을 선택하시면 바로 기부 페이지로 연결됩니다.",
    onlineNote: "(Zeffy 수수료 전액 면제 플랫폼)",
    checkTitle: "수표 기부",
    checkBody: "K-Group 앞으로 수표를 보내실 수 있습니다.",
    payee: "수취인: Bay Area K-Group",
    address: "주소: P.O Box 60424, 209 East Java Dr., Sunnyvale, CA 94086",
    matchingTitle: "기부금 매칭",
    matchingHighlight: "회사 베네핏으로 후원 효과 200% 높이기",
    matchingHighlightBody:
      "실리콘밸리에 있는 기업들이 제공하는 기부 매칭 프로그램을 활용해 보세요. 여러분의 후원금이 2배, 3배가 되어 K-Group에 전달됩니다.",
    matchingBody:
      "많은 기업이 직원의 기부액만큼 추가로 기부해 주는 Gift-Matching 프로그램을 운영하고 있습니다.",
    matchingExample:
      "예시: 사내 Giving Portal을 통해 K-Group에 $50을 기부하고 매칭을 신청하면, 회사에서 $50(또는 그 이상)을 추가로 기부해 총 $100 이상의 후원 효과가 발생합니다.",
    matchingSearch:
      "지금 다니시는 회사의 인사 시스템(HR/Giving Portal)에서 'Bay Area K-Group'을 검색해 보세요.",
    volunteerTitle: "자원봉사 지원금",
    volunteerBody:
      "돈을 기부하지 않더라도, 여러분의 시간도 기부금이 될 수 있습니다. K-Group에서 스태프나 자원봉사자로 활동하신 경우, 기업의 Volunteer Grant 제도를 통해 봉사 시간만큼의 지원금을 K-Group으로 요청하실 수 있습니다.",
    taxNote:
      "Bay Area K-Group은 미국세청에 등록된 501(c)(3) 비영리 단체(EIN: 51-0656931)로, 보내주신 후원금은 전액 커뮤니티 운영에 투명하게 사용되며 세금 공제(Tax-deductible) 혜택을 받으실 수 있습니다. (기업/개인 후원 모두 가능)",
    ctaBody: [
      "K-Group을 통해 좋은 인연을 만나고 함께 성장한 경험이 있다면, 이제 그 기회를 다음 사람에게 이어주세요.",
      "여러분의 작은 후원이 실리콘밸리에서 더 많은 연결을 만들고, 더 큰 성장의 계기가 됩니다.",
    ],
    ctaButton: "후원하기",
  },
} as const;

export const ticketCopy = {
  en: {
    badge: "TICKETS NOW AVAILABLE",
    earlyBirdButton: "SOLD OUT",
    regularButton: "GET REGULAR TICKETS",
    title: "Ticket",
    eventDetails: [
      "September 12, Saturday",
      "Computer History Museum",
      "Mountain View, CA",
    ],
    prices: ["$70", "$80"],
    perPerson: "PER PERSON",
    noticeTitle: "Notice",
    noticeIntro:
      "K-Night is a pre-registration only event. Please read the following information before purchasing your ticket.",
    noticeItems: [
      ["Ticket", "All tickets include dinner and beverages."],
      [
        "Seat",
        "This is a general admission event with open seating (no assigned seats).",
      ],
      [
        "Tickets May Sell Out",
        "Tickets are limited and may sell out before the event, so we encourage you to reserve yours early.",
      ],
      [
        "Registration & Refund Deadline",
        "Ticket purchases and refunds will be available until Thursday, September 10 at 5:00 PM (PT).",
      ],
      [
        "No On-site Ticket Sales",
        "Tickets must be purchased in advance. No tickets will be sold at the venue on the day of the event.",
      ],
      ["No Minors Allowed", "Guests under 18 will not be admitted."],
      ["Language", "The event will be conducted primarily in Korean."],
      [
        "No Livestream or Recordings",
        "K-Night will not be livestreamed or recorded for later viewing. All sessions are available exclusively to in-person attendees.",
      ],
    ],
    carpoolTitle: "Carpool",
    carpoolIntro:
      "We’re helping K-Night attendees connect with others for carpooling to and from the venue. If you’d like to share a ride or offer a ride, please use the shared list below to connect with other attendees in your area.",
    carpoolButton: "Sign Up",
    carpoolHref:
      "https://docs.google.com/spreadsheets/d/1jhQ-Dt11dvtQSTn9dTUfujp33NrAEzdQaE91O1CDJPY/edit?usp=sharing",
  },
  ko: {
    badge: "티켓 판매 중",
    earlyBirdButton: "매진",
    regularButton: "티켓 구매하기",
    title: "티켓",
    eventDetails: [
      "9월 12일 토요일",
      "컴퓨터 역사 박물관",
      "마운틴뷰, 캘리포니아",
    ],
    prices: ["$70", "$80"],
    perPerson: "인당",
    noticeTitle: "안내사항",
    noticeIntro:
      "본 행사는 사전 예약제로 운영되며, 원활한 진행을 위해 아래 안내 사항을 반드시 확인해 주시기 바랍니다.",
    noticeItems: [
      ["티켓", "모든 티켓에는 식사 및 음료가 포함되어 있습니다."],
      ["좌석", "본 행사는 지정 좌석이 없는 자유석 행사입니다."],
      [
        "매진 유의",
        "준비된 티켓이 조기에 마감 될 수 있으니 구매를 서둘러 주세요.",
      ],
      ["사전 예매 및 환불", "9/10(목) 오후 5시까지만 가능합니다."],
      [
        "현장 판매 없음",
        "모든 티켓은 사전 구매로만 판매되며, 행사 당일 현장 판매는 진행하지 않습니다.",
      ],
      [
        "미성년자 입장 불가",
        "본 행사에는 미성년자가 동반 및 입장할 수 없습니다.(No Minors Allowed)",
      ],
      [
        "진행 언어",
        "본 행사는 한국어로 진행되며, 부분적으로 영어를 사용합니다.",
      ],
      [
        "스트리밍 및 녹화본 미제공",
        "K-Night은 유튜브 스트리밍 및 행사 후 녹화본을 공유하지 않습니다. 모든 세션은 오직 행사 당일 현장에서만 공개됩니다.",
      ],
    ],
    carpoolTitle: "교통안내",
    carpoolIntro:
      "K-Night 행사장까지 교통편이 불편하신 분들을 위해 참가자 간 카풀을 지원합니다. 주변 참여자들과 매칭을 원하시는 분들은 아래 공유 리스트를 이용해 주세요.",
    carpoolButton: "신청하기",
    carpoolHref:
      "https://docs.google.com/spreadsheets/d/1jhQ-Dt11dvtQSTn9dTUfujp33NrAEzdQaE91O1CDJPY/edit?usp=sharing",
  },
} as const;
