export interface StatData {
  id: number;
  number: string;
  label: string;
}

export const statsData: StatData[] = [
  { id: 1, number: "400+", label: "Community Members" },
  { id: 2, number: "50+", label: "Tech Events" },
  { id: 3, number: "70+", label: "Projects Built" },
  { id: 4, number: "30+", label: "Top Achievers & Placements" },
  { id: 5, number: "15+", label: "Hackathons & Workshops Hosted" },
];

export const IMAGES = {
  barLong: "/assets/stats/bar_long.png",
  barShort: "/assets/stats/bar_short.png",
  clouds: "/assets/clouds/stats_clouds.png",
} as const;

export const MOBILE_BREAKPOINT = 768;

export interface StatItemProps {
  stat: StatData;
  index: number;
  isMobile: boolean;
}

export interface MobileStatItemProps {
  stat: StatData;
  index: number;
  statsData: StatData[];
}
