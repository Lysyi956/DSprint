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
