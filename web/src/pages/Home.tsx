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
