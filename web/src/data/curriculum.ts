export type Module = {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  bullets: string[];
};

export const curriculum: Module[] = [
  { id: "found", name: "Foundations", level: "Beginner", bullets: ["Python refresh","Jupyter & Git","Data types & control flow"] },
  { id: "wrangle", name: "Data Wrangling", level: "Beginner", bullets: ["Cleaning & missing values","Joins","Datetime"] },
  { id: "eda", name: "EDA & Viz", level: "Intermediate", bullets: ["Summary stats","Outliers & distributions","Visual storytelling"] },
  { id: "ml", name: "ML Basics", level: "Intermediate", bullets: ["Baselines","Train/validation","Metrics"] },
  { id: "prod", name: "From Notebook to Impact", level: "Advanced", bullets: ["Checklists","Reproducibility","Small deployments"] },
];
