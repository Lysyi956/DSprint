import React from "react";
import Button from "../Button";
import type { News } from "../../data/news";

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
