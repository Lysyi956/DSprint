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
