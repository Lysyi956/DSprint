export type News = {
  title: string;
  date: string;
  excerpt: string;
  url?: string;
};

export const news: News[] = [
  { title: "Cohort 1 wrapped up!", date: "2025-08-20", excerpt: "Highlights and best notes are published in Notes.", url: "#" },
  { title: "Cohort 2 starts soon", date: "2025-09-05", excerpt: "Sep 13 — Oct 13. Follow announcements in Telegram.", url: "https://t.me/DataScienceSprint" },
];
