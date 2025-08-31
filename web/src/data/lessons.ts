export type Lesson = {
  title: string;
  date: string;    // YYYY-MM-DD
  duration: string;
  tags: string[];
  videoUrl: string;
};

export const lessons: Lesson[] = [
  { title: "Python for Data: EDA Basics", date: "2025-08-01", duration: "45 min", tags: ["Python","EDA"], videoUrl: "https://example.com/video-eda" },
  { title: "Pandas: Cleaning & Joins", date: "2025-08-08", duration: "55 min", tags: ["Pandas","Cleaning"], videoUrl: "https://example.com/video-pandas" },
  { title: "Visualization: Telling a Data Story", date: "2025-08-15", duration: "50 min", tags: ["Visualization","Matplotlib"], videoUrl: "https://example.com/video-viz" },
];
