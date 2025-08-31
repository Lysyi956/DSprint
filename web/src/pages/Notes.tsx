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
