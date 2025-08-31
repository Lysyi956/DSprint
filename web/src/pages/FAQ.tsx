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
