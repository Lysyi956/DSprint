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
