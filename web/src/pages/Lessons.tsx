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
