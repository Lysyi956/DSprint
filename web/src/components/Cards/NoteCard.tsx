import Button from "../Button";
import type { Note } from "../../data/notes";

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
