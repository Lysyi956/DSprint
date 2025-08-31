import Button from "../Button";
import type { Lesson } from "../../data/lessons";

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
