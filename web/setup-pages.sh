#!/usr/bin/env bash
set -e

echo "→ Creating folders…"
mkdir -p src/components/Cards src/pages src/data

# -------------------- components --------------------
cat > src/components/Button.tsx <<'TS'
import React from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({ href, onClick, variant = "primary", className = "", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dsprint";
  const styles =
    variant === "primary"
      ? "bg-dsprint text-white hover:shadow-lg hover:-translate-y-0.5"
      : variant === "outline"
      ? "border border-dsprint text-black hover:bg-dsprint/10"
      : "text-gray-600 hover:bg-gray-100";
  const El: any = href ? "a" : "button";
  return (
    <El
      href={href}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </El>
  );
}
TS

cat > src/components/Section.tsx <<'TS'
import React from "react";

export default function Section({ title, subtitle, children }:{title:string;subtitle?:string;children:React.ReactNode}) {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
TS

cat > src/components/Header.tsx <<'TS'
import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/telegram", label: "Telegram" },
  { to: "/lessons", label: "Lessons" },
  { to: "/news", label: "News" },
  { to: "/notes", label: "Notes" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/instructors", label: "Instructors" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-dsprint/10 ring-1 ring-dsprint/30" />
          <span className="text-lg font-semibold">DSprint</span>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? "text-black" : "text-gray-600 hover:text-black"}`
              }
            >
              {n.label}
              <span className="absolute inset-x-2 -bottom-1 block h-0.5 rounded-full bg-dsprint opacity-0 data-[active=true]:opacity-100" data-active={location.pathname===n.to}/>
            </NavLink>
          ))}
        </nav>
        <a
          href="https://t.me/DataScienceSprint"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-xl bg-dsprint px-3 py-2 text-sm font-semibold text-white hover:shadow-lg md:inline-flex"
        >
          Join Telegram
        </a>
        <div className="md:hidden">
          <select
            className="rounded-lg border bg-white px-2 py-1 text-sm"
            value={location.pathname}
            onChange={(e) => (window.location.href = e.target.value)}
          >
            {nav.map((n) => (
              <option key={n.to} value={n.to}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
TS

# -------------------- cards --------------------
cat > src/components/Cards/LessonCard.tsx <<'TS'
import React from "react";
import Button from "../Button";

export type Lesson = {
  title: string;
  date: string;
  duration: string;
  tags: string[];
  videoUrl: string;
};

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="group rounded-xl border bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-dsprint/10 ring-1 ring-dsprint/30">▶</div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold">{lesson.title}</h3>
          <p className="mt-1 text-xs text-gray-500">
            {new Date(lesson.date).toLocaleDateString("en-US")} • {lesson.duration}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {lesson.tags.map((t) => (
              <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-700 ring-1 ring-gray-200">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <Button href={lesson.videoUrl} variant="outline">Watch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
TS

cat > src/components/Cards/NewsItem.tsx <<'TS'
import React from "react";
import Button from "../Button";

export type News = {
  title: string;
  date: string;
  excerpt: string;
  url?: string;
};

export default function NewsItem({ item }: { item: News }) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
      <h3 className="text-base font-semibold">{item.title}</h3>
      <p className="mt-1 text-xs text-gray-500">{new Date(item.date).toLocaleDateString("en-US")}</p>
      <p className="mt-2 text-sm text-gray-700">{item.excerpt}</p>
      <div className="mt-3">
        <Button href={item.url ?? "#"} variant="outline">Open</Button>
      </div>
    </article>
  );
}
TS

cat > src/components/Cards/NoteCard.tsx <<'TS'
import React from "react";
import Button from "../Button";

export type Note = {
  title: string;
  description: string;
  type: "pdf" | "text";
  link: string;
};

export default function NoteCard({ note }: { note: Note }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{note.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{note.description}</p>
          <p className="mt-2 text-xs text-gray-500">Type: {note.type.toUpperCase()}</p>
        </div>
        <div className="shrink-0">
          <Button href={note.link} variant="outline">{note.type === "pdf" ? "Download" : "Open"}</Button>
        </div>
      </div>
    </div>
  );
}
TS

# -------------------- data --------------------
cat > src/data/lessons.ts <<'TS'
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
TS

cat > src/data/news.ts <<'TS'
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
TS

cat > src/data/notes.ts <<'TS'
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
TS

cat > src/data/curriculum.ts <<'TS'
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
TS

cat > src/data/instructors.ts <<'TS'
export const instructors = [
  { name: "Maksat Rakhimbek", role: "Admin & Instructor", bio: "Curates cohorts, focuses on practical DS and strong baselines." },
  { name: "Guest Mentors", role: "Practitioners", bio: "Industry DS join for code reviews and portfolio clinics." },
];
TS

# -------------------- pages --------------------
cat > src/pages/Home.tsx <<'TS'
import React from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import { lessons } from "../data/lessons";
import LessonCard from "../components/Cards/LessonCard";
import NewsItem from "../components/Cards/NewsItem";
import { news } from "../data/news";
import NoteCard from "../components/Cards/NoteCard";
import { notes } from "../data/notes";

export default function Home() {
  return (
    <>
      <section className="border-b bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <span className="inline-flex items-center rounded-full border border-dsprint/30 bg-dsprint/10 px-3 py-1 text-xs font-medium text-dsprint">
            Admin: Maksat Rakhimbek
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">Welcome to DSprint</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Free lessons on Data Science, Python & Analytics. Join our Telegram and study with us.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="https://t.me/DataScienceSprint">Join Telegram Channel</Button>
            <Button href="/lessons" variant="outline">Explore Lessons</Button>
          </div>
        </div>
      </section>

      <Section title="Telegram Channel" subtitle="Announcements, materials, deadlines">
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="text-sm text-gray-700">
              Join our Telegram to get lesson reminders, materials and cohort timelines.
            </p>
            <p className="mt-3 text-xs text-gray-500">Cohort 1: Jul 31 — Aug 20. Next: Sep 13 — Oct 13 (upcoming).</p>
            <div className="mt-4 flex gap-3">
              <Button href="https://t.me/DataScienceSprint">Join Telegram</Button>
              <Button href="/news" variant="outline">See Updates</Button>
            </div>
          </div>
          <div className="rounded-xl border p-4 shadow-md">
            <h4 className="text-sm font-semibold">Quick info</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Announcements & deadlines</li>
              <li>Notes and links</li>
              <li>Recordings</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Lesson Recordings" subtitle="Watch, pause, repeat — learn at your own pace.">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
          <span className="inline-flex items-center rounded-full border border-dsprint/30 bg-dsprint/10 px-3 py-1 text-xs font-medium text-dsprint">Cohort 1: Jul 31 — Aug 20</span>
          <span className="inline-flex items-center rounded-full border border-dsprint/30 bg-dsprint/10 px-3 py-1 text-xs font-medium text-dsprint">✨ Cohort 2: Sep 13 — Oct 13 (upcoming)</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((l) => <LessonCard key={l.title} lesson={l} />)}
        </div>
      </Section>

      <Section title="News & Updates" subtitle="Announcements and highlights from the community.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => <NewsItem key={`${n.title}-${n.date}`} item={n} />)}
        </div>
      </Section>

      <Section title="Notes & Summaries" subtitle="Concise notes to revise the key ideas faster.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((x) => <NoteCard key={x.title} note={x} />)}
        </div>
      </Section>
    </>
  );
}
TS

cat > src/pages/About.tsx <<'TS'
import React from "react";
import Section from "../components/Section";

export default function About() {
  return (
    <Section title="About DSprint" subtitle="Practical DS skills, short lessons, real datasets">
      <p className="text-sm text-gray-700">
        DSprint is a community for fast, practical Data Science skills. Short lessons, real datasets and strong baselines.
      </p>
    </Section>
  );
}
TS

cat > src/pages/Telegram.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import Button from "../components/Button";

export default function Telegram() {
  return (
    <Section title="Telegram Channel" subtitle="Announcements, materials, deadlines">
      <p className="text-sm text-gray-700">All cohort announcements and links live here.</p>
      <div className="mt-4">
        <Button href="https://t.me/DataScienceSprint">Join Telegram</Button>
      </div>
    </Section>
  );
}
TS

cat > src/pages/Lessons.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import { lessons } from "../data/lessons";
import LessonCard from "../components/Cards/LessonCard";

export default function Lessons() {
  return (
    <Section title="Lessons" subtitle="Recordings from DSprint cohorts">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => <LessonCard key={l.title} lesson={l} />)}
      </div>
    </Section>
  );
}
TS

cat > src/pages/News.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import { news } from "../data/news";
import NewsItem from "../components/Cards/NewsItem";

export default function News() {
  return (
    <Section title="News & Updates" subtitle="Cohort announcements, changes, highlights">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => <NewsItem key={`${n.title}-${n.date}`} item={n} />)}
      </div>
    </Section>
  );
}
TS

cat > src/pages/Notes.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import { notes } from "../data/notes";
import NoteCard from "../components/Cards/NoteCard";

export default function Notes() {
  return (
    <Section title="Notes & Summaries" subtitle="Concise notes to revise the key ideas faster">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((x) => <NoteCard key={x.title} note={x} />)}
      </div>
    </Section>
  );
}
TS

cat > src/pages/Curriculum.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import { curriculum } from "../data/curriculum";

export default function Curriculum() {
  return (
    <Section title="Curriculum" subtitle="A simple path from zero to practical DS">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {curriculum.map((m) => (
          <div key={m.id} className="rounded-xl border bg-white p-4 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">{m.name}</h3>
              <span className="inline-flex items-center rounded-full border border-dsprint/30 bg-dsprint/10 px-3 py-1 text-xs font-medium text-dsprint">
                {m.level}
              </span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {m.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
TS

cat > src/pages/Instructors.tsx <<'TS'
import React from "react";
import Section from "../components/Section";
import { instructors } from "../data/instructors";

export default function Instructors() {
  return (
    <Section title="Instructors" subtitle="The people behind DSprint">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {instructors.map((p) => (
          <div key={p.name} className="rounded-xl border bg-white p-4 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">{p.name}</h3>
              <span className="inline-flex items-center rounded-full border border-dsprint/30 bg-dsprint/10 px-3 py-1 text-xs font-medium text-dsprint">
                {p.role}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-700">{p.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
TS

cat > src/pages/FAQ.tsx <<'TS'
import React from "react";
import Section from "../components/Section";

export default function FAQ() {
  const items = [
    ["Is DSprint free?", "Yes. Lessons and community resources are free."],
    ["Where do lessons happen?", "Announcements in Telegram. Recordings appear here."],
    ["What do I need before joining?", "Basic Python is enough to start."],
  ];
  return (
    <Section title="FAQ" subtitle="Answers to common questions">
      <div className="space-y-3">
        {items.map(([q, a]) => (
          <details key={q} className="rounded-xl border bg-white p-4 shadow-md">
            <summary className="cursor-pointer text-sm font-semibold">{q}</summary>
            <p className="mt-2 text-sm text-gray-700">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
TS

cat > src/pages/Contact.tsx <<'TS'
import React from "react";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section title="Contact & Subscribe" subtitle="Say hi or get cohort announcements via Telegram">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-4 shadow-md">
          <h3 className="text-base font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-gray-700">
            Email:{" "}
            <a className="text-dsprint underline" href="mailto:contact@dsprint.academy">
              contact@dsprint.academy
            </a>
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-md">
          <h3 className="text-base font-semibold">Subscribe</h3>
          <p className="mt-2 text-sm text-gray-700">Join our Telegram for announcements and links.</p>
          <a
            href="https://t.me/DataScienceSprint"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-xl bg-dsprint px-4 py-2 text-sm font-semibold text-white"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </Section>
  );
}
TS

# -------------------- main & app --------------------
cat > src/main.tsx <<'TS'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
TS

cat > src/App.tsx <<'TS'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Telegram from "./pages/Telegram";
import Lessons from "./pages/Lessons";
import News from "./pages/News";
import Notes from "./pages/Notes";
import Curriculum from "./pages/Curriculum";
import Instructors from "./pages/Instructors";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/telegram" element={<Telegram/>} />
          <Route path="/lessons" element={<Lessons/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/curriculum" element={<Curriculum/>} />
          <Route path="/instructors" element={<Instructors/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">
            <div>
              Email:{" "}
              <a href="mailto:contact@dsprint.academy" className="text-dsprint hover:underline">
                contact@dsprint.academy
              </a>
            </div>
            <div>
              Telegram:{" "}
              <a href="https://t.me/DataScienceSprint" target="_blank" rel="noreferrer" className="text-dsprint hover:underline">
                t.me/DataScienceSprint
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-500">© DSprint 2025</div>
        </div>
      </footer>
    </div>
  );
}
TS

echo "→ Done. Files now:"
find src -maxdepth 2 -type f | sort
