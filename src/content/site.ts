export type NavItem = {
  label: string;
  href: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  href: string;
  accessNote?: string;
};

export type Activity = {
  id: string;
  title: string;
  term?: string;
  pronunciation?: string;
  summary: string;
  detail: string;
};

export const site = {
  name: "UOTY Florida",
  legalName: "United Orthodox Tewahedo Youth — Florida",
  shortName: "UOTY Florida",
  location: "Florida",
  rootedIn: "Tampa",
  churchName: "St. Mary’s Ethiopian Orthodox Tewahedo Church",
  churchShortName: "St. Mary’s of Tampa",
  parentOrganization: "United Orthodox Tewahedo Youth",
  parentAbbreviation: "UOTY",
  /**
   * Public site origin, without a trailing slash. Used for Open Graph URLs.
   * GitHub Pages: https://kalebrodriguez.github.io/UOTY-FLORIDA
   */
  siteUrl: "https://kalebrodriguez.github.io/UOTY-FLORIDA",
  tagline: "Faith, fellowship, and a place to belong.",
  identity:
    "an Ethiopian Orthodox Tewahedo youth community in Florida",
  mission:
    "We unite youth of Ethiopian and non-Ethiopian descent to grow spiritually, strengthen their minds, and inspire love through God’s grace.",
  welcome:
    "Whether you grew up in the Ethiopian Orthodox Tewahedo Church or you are new to this community, you are welcome.",
  description:
    "UOTY Florida is an Ethiopian Orthodox Tewahedo youth community rooted in Tampa. We gather for prayer, teaching, church service, and fellowship.",
  nav: [
    { label: "About", href: "/#about" },
    { label: "Gatherings", href: "/#gatherings" },
    { label: "Photos", href: "/photos" },
    { label: "Resources", href: "/#resources" },
    { label: "Get Involved", href: "/#get-involved" },
  ] satisfies NavItem[],
  contact: {
    label: "Contact us",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeEvCz2vD4HhlG1hngvmHAJa2H8gLkh8-YvvxvlJcIe_9LLpQ/viewform?usp=header",
    description:
      "Use our contact form to ask a question or share photos from past events.",
  },
  startBranch: {
    label: "Start a branch",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdKy69vGOo10a7crYJlMdkDxcUoCum38c07MX2TPkMlHw44rA/viewform?usp=header",
    description:
      "If you hope to begin a UOTY gathering in another city, the national organization has a form to get started.",
  },
  gathering: {
    name: "Saturday Gubaye",
    day: "Saturday",
    startTime: "7:00 p.m.",
    endTime: "9:00 p.m.",
    /**
     * IANA time zone. Display the human label below rather than EST/EDT.
     * Confirm both the clock time and this zone before launch.
     */
    timeZone: "America/New_York",
    timeZoneLabel: "Eastern Time",
    /**
     * Public Saturday Zoom. Leave meetingUrl null to hide the Join button
     * and show the contact-form fallback instead.
     */
    meetingUrl: "https://us06web.zoom.us/j/3838907036",
    meetingPassword: "uoty",
    meetingId: "383 890 7036",
    format: "online",
    intro:
      "Each Saturday we gather online for Gubaye — a youth service of prayer, Scripture, hymn, and teaching.",
    expect:
      "Newcomers can join by listening first. You do not need to know Ge’ez or Amharic to take part; much of the Florida gathering is in English.",
    program: [
      {
        name: "English prayer",
        detail: "We open together in prayer.",
      },
      {
        name: "Bible reading",
        detail: "A passage is read and held in common.",
      },
      {
        name: "Misbak",
        detail: "Hymnal Bible reading in the tradition of the Church.",
      },
      {
        name: "Sinksar",
        detail: "The histories of the saints and of our faith.",
      },
      {
        name: "Mezmur",
        detail: "Praise music offered together.",
      },
      {
        name: "English sermon",
        detail:
          "Teaching, often with a guest speaker from another community.",
      },
    ],
  },
  activities: [
    {
      id: "gubaye",
      title: "Saturday Gubaye",
      term: "Gubaye",
      pronunciation: "goo-bah-yay",
      summary: "Our weekly online gathering for prayer, Scripture, hymn, and teaching.",
      detail:
        "On Saturday evenings we meet online to pray, read Scripture, sing, remember the saints, and hear a sermon. It is the heart of our weekly life together.",
    },
    {
      id: "church",
      title: "Church festivals and service",
      summary: "Serving with St. Mary’s of Tampa on feast days and in church life.",
      detail:
        "UOTY Florida grew alongside St. Mary’s Ethiopian Orthodox Tewahedo Church in Tampa. We continue to assist with in-person festivals and service there whenever the church gathers to keep the feasts.",
    },
    {
      id: "mehaber",
      title: "Youth Mehaber",
      term: "Mehaber",
      pronunciation: "meh-hah-ber",
      summary: "A youth association honoring St. Teklehaimanot.",
      detail:
        "A Mehaber is a religious association or gathering, often held in a saint’s name. Ours honors St. Teklehaimanot. We study the witness of his life and the teachings of our faith.",
    },
    {
      id: "soccer",
      title: "Soccer and fellowship",
      summary: "Games and friendship with Orthodox and Coptic youth in Tampa.",
      detail:
        "Fellowship is part of the same calling. The Florida community has kept a soccer team and hosted games with neighboring Orthodox and Coptic churches — time to run, laugh, and know one another beyond the screen.",
    },
  ] satisfies Activity[],
  resources: [
    {
      id: "teaching",
      title: "Teaching materials",
      description:
        "Lessons and study files shared with the community for Sunday school, Gubaye, and personal reading.",
      href: "https://drive.google.com/drive/folders/1SQdYKepkqRLWgOsxTjKNvz6hInLqR3R1?usp=drive_link",
    },
    {
      id: "prayers",
      title: "Orthodox prayers",
      description:
        "Prayers of the Ethiopian Orthodox Tewahedo Church for daily use and for gathering.",
      href: "https://drive.google.com/drive/folders/1cJh4OeZ8diFspdUpKvysk7PMJG_hrls9?usp=drive_link",
    },
    {
      id: "presentations",
      title: "Gubaye presentations",
      description:
        "Slideshows used in Saturday Gubaye — Scripture, Sinksar, and teaching outlines.",
      href: "https://drive.google.com/drive/folders/1ByV3hKVK3BcmA1reYFTK9UhnHiKrhVce?usp=drive_link",
    },
    {
      id: "logos",
      title: "Official logos and images",
      description:
        "UOTY marks and approved artwork for community use.",
      href: "https://drive.google.com/drive/folders/1AJOYEF0mKNVUuM12JNSBf_wS3pi6zZp5?usp=sharing",
    },
  ] satisfies Resource[],
  story: {
    heading: "Our story",
    lede:
      "UOTY Florida began when local youth needed a way to stay close to the Church — and to one another.",
    paragraphs: [
      "In 2020, regular Sunday school and church gatherings at St. Mary’s Ethiopian Orthodox Tewahedo Church in Tampa were interrupted. For many young people, that weekly life after liturgy had been the place their faith was taught and shared.",
      "From that Tampa community, youth joined the broader United Orthodox Tewahedo Youth organization and formed a Florida branch. They began with prayer and sermons over conference calls, then moved to Zoom, welcomed guest speakers, and later gathered in person again.",
      "We remain connected to St. Mary’s of Tampa and to UOTY communities elsewhere. Florida is one branch in a wider family of Orthodox youth — not the whole of it — working toward the same hope: to grow the spirit, strengthen the mind, and inspire love through God’s grace.",
    ],
  },
  images: {
    logoMark: {
      src: "/images/brand/logo-mark.png",
      alt: "United Orthodox Tewahedo Youth emblem: an Ethiopian Orthodox cross inside a circle",
      width: 225,
      height: 225,
    },
    logoWordmark: {
      src: "/images/brand/logo-wordmark.png",
      alt: "UOTY wordmark, United Orthodox Tewahedo Youth",
      width: 346,
      height: 146,
    },
    hero: {
      src: "/images/community/community-gathering.jpg",
      alt: "UOTY Florida youth, families, and clergy standing together outdoors after a gathering, some wearing traditional white netela and a yellow priestly vestment",
      width: 1280,
      height: 960,
    },
    story: {
      src: "/images/community/saturday-gubaye-zoom.jpg",
      alt: "Youth joining an online UOTY Saturday Gubaye from their homes, shown in a video-call grid",
      width: 1920,
      height: 1439,
    },
    fellowship: {
      src: "/images/community/adventure-island.jpg",
      alt: "UOTY Florida youth standing together at Adventure Island during a fellowship outing",
      width: 1284,
      height: 933,
    },
    speaker: {
      src: "/images/community/guest-speaker-zoom.jpg",
      alt: "A guest speaker teaching during an online UOTY gathering",
      width: 1284,
      height: 667,
    },
    cross: {
      src: "/images/brand/cross-proverbs.jpg",
      alt: "Processional Ethiopian Orthodox cross beside Proverbs 16:3 and the UOTY mission",
      width: 995,
      height: 1280,
    },
  },
} as const;

export function gatheringSchedule(): string {
  const { day, startTime, endTime, timeZoneLabel } = site.gathering;
  return `${day}s, ${startTime}–${endTime} ${timeZoneLabel}`;
}
