export type Note = {
  title: string;
  description: string;
  type: "pdf" | "text";
  link: string;
};

export const notes: Note[] = [
  { title: "Pandas Joins — Cheat Sheet", description: "Quick guide to merge/join.", type: "pdf", link: "https://example.com/pandas-joins.pdf" },
  { title: "Intro to ML — Baselines", description: "Why baselines matter.", type: "text", link: "#" },
];
