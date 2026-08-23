import type { StaticImageData } from "next/image";
import chanheeLee from "@/assets/speakers/chanhee-lee.jpg";
import hyunahJung from "@/assets/speakers/hyunah-jung.jpg";
import jihyeMoon from "@/assets/speakers/jihye-moon.jpg";
import jooYeonChae from "@/assets/speakers/joo-yeon-chae.jpg";
import jungYeonKim from "@/assets/speakers/jung-yeon-kim.jpg";
import junyongSuh from "@/assets/speakers/junyong-suh.jpg";
import kathyKu from "@/assets/speakers/kathy-ku.jpg";
import kristyKim from "@/assets/speakers/kristy-kim.jpg";
import samJang from "@/assets/speakers/sam-jang.jpg";
import uriLee from "@/assets/speakers/uri-lee.jpg";
import yuSeungKim from "@/assets/speakers/yu-seung-kim.jpg";

export type SpeakerProfile = {
  id: string;
  name: string;
  bakgRole?: string;
  role: string;
  company: string;
  linkedin: string;
  image: StaticImageData;
  imageAlt: string;
};

export type SpeakerGroup = {
  id: string;
  title: string;
  speakers: readonly SpeakerProfile[];
};

const linkedinById = {
  "kristy-kim": "https://www.linkedin.com/in/kristykim7/",
  "kathy-ku": "https://www.linkedin.com/in/seulkathyku/",
  "yu-seung-kim": "https://www.linkedin.com/in/yu-seung-kim-4b25a024/",
  "junyong-suh": "https://www.linkedin.com/in/zechery/",
  "joo-yeon-chae": "https://www.linkedin.com/in/jooyeon-chae/",
  "jihye-moon": "https://www.linkedin.com/in/jihye-m-85116213b/",
  "chanhee-lee": "https://www.linkedin.com/in/hiddenest/",
  "hyunah-jung": "https://www.linkedin.com/in/hyunah-jung95/",
  "jung-yeon-kim": "https://www.linkedin.com/in/vekim/",
  "sam-jang": "https://www.linkedin.com/in/sam-jang/",
  "uri-lee": "https://www.linkedin.com/in/uri-lee/",
} as const;

function makeProfile(
  id: string,
  name: string,
  role: string,
  company: string,
  image: StaticImageData,
  bakgRole?: string,
): SpeakerProfile {
  return {
    id,
    name,
    bakgRole,
    role,
    company,
    linkedin: linkedinById[id as keyof typeof linkedinById],
    image,
    imageAlt: `${name} profile photo`,
  };
}

export const speakersCopy = {
  en: {
    headerTitle: "Speakers",
    headerDescription: "Meet K-Night 2026 speakers",
    groups: [
      {
        id: "keynote",
        title: "Keynote",
        speakers: [
          makeProfile(
            "kristy-kim",
            "Kristy Kim",
            "Co-Founder & CEO",
            "@ Tomo Credit",
            kristyKim,
          ),
          makeProfile("kathy-ku", "Kathy Ku", "Partner", "@ Sazze", kathyKu),
        ],
      },
      {
        id: "fireside-chat",
        title: "Fireside Chat",
        speakers: [
          makeProfile(
            "yu-seung-kim",
            "Yu Seung Kim",
            "Corporate Vice President, Head of Security Lab",
            "@ Samsung Electronics",
            yuSeungKim,
            "Former BAKG Co-President",
          ),
          makeProfile(
            "junyong-suh",
            "Junyong Suh",
            "Senior Member of Technical Staff",
            "@ Nutanix",
            junyongSuh,
          ),
          makeProfile(
            "joo-yeon-chae",
            "Joo Yeon Chae",
            "Senior Engineer",
            "@ AMD",
            jooYeonChae,
            "BAKG Director",
          ),
        ],
      },
      {
        id: "20x20-talk-session",
        title: "20x20 Talk Session",
        speakers: [
          makeProfile(
            "jihye-moon",
            "Jihye Moon",
            "Research Scientist",
            "@ Meta",
            jihyeMoon,
          ),
          makeProfile(
            "chanhee-lee",
            "Chanhee Lee",
            "Co-Founder",
            "@ Aside",
            chanheeLee,
          ),
          makeProfile(
            "hyunah-jung",
            "Hyunah Jung",
            "CEO & Founder",
            "@ Mindwise AI",
            hyunahJung,
          ),
          makeProfile(
            "jung-yeon-kim",
            "Jung Yeon Kim",
            "Software Engineer",
            "@ Musical Producer",
            jungYeonKim,
            "Former BAKG Co-President",
          ),
          makeProfile(
            "sam-jang",
            "Sam Jang",
            "Staff Product Designer",
            "@ Rivian",
            samJang,
            "BAKG Design Subgroup Organizer",
          ),
        ],
      },
      {
        id: "event-mc",
        title: "Event MC",
        speakers: [
          makeProfile(
            "uri-lee",
            "Uri Lee",
            "Founding Community Lead & Program Manager",
            "@ Likelions",
            uriLee,
          ),
        ],
      },
    ],
  },
  ko: {
    headerTitle: "연사",
    headerDescription: "K-Night 2026의 연사를 만나보세요",
    groups: [
      {
        id: "keynote",
        title: "키노트",
        speakers: [
          makeProfile(
            "kristy-kim",
            "크리스티 김",
            "Co-Founder & CEO",
            "@ Tomo Credit",
            kristyKim,
          ),
          makeProfile("kathy-ku", "케시 쿠", "Partner", "@ Sazze", kathyKu),
        ],
      },
      {
        id: "fireside-chat",
        title: "파이어사이드 챗",
        speakers: [
          makeProfile(
            "yu-seung-kim",
            "김유승",
            "Corporate Vice President, Head of Security Lab",
            "@ Samsung Electronics",
            yuSeungKim,
            "Former BAKG Co-President",
          ),
          makeProfile(
            "junyong-suh",
            "서준용",
            "Senior Member of Technical Staff",
            "@ Nutanix",
            junyongSuh,
          ),
          makeProfile(
            "joo-yeon-chae",
            "채주연",
            "Senior Engineer",
            "@ AMD",
            jooYeonChae,
            "BAKG Director",
          ),
        ],
      },
      {
        id: "20x20-talk-session",
        title: "20x20 토크 세션",
        speakers: [
          makeProfile(
            "jihye-moon",
            "문지혜",
            "Research Scientist",
            "@ Meta",
            jihyeMoon,
          ),
          makeProfile(
            "chanhee-lee",
            "이찬희",
            "Co-Founder",
            "@ Aside",
            chanheeLee,
          ),
          makeProfile(
            "hyunah-jung",
            "정현아",
            "CEO & Founder",
            "@ Mindwise AI",
            hyunahJung,
          ),
          makeProfile(
            "jung-yeon-kim",
            "김정연",
            "Software Engineer",
            "@ Musical Producer",
            jungYeonKim,
            "Former BAKG Co-President",
          ),
          makeProfile(
            "sam-jang",
            "샘 장",
            "Staff Product Designer",
            "@ Rivian",
            samJang,
            "BAKG Design Subgroup Organizer",
          ),
        ],
      },
      {
        id: "event-mc",
        title: "이벤트 MC",
        speakers: [
          makeProfile(
            "uri-lee",
            "이유리",
            "Founding Community Lead & Program Manager",
            "@ Likelions",
            uriLee,
          ),
        ],
      },
    ],
  },
} as const;
