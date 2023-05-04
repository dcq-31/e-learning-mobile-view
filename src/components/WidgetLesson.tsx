import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { WidgetLessonProps } from "../types";

function WidgetLesson({
  title,
  img,
  dateText,
  start,
  end,
  totalLectures,
  completedLectures,
}: WidgetLessonProps) {
  return (
    <div className="inline-block w-56 snap-center rounded-lg bg-white px-3 py-2 shadow-lg shadow-gray-200">
      <div className="mb-2">
        <img
          src={img.src}
          alt={img.alt}
          className="h-24 w-full rounded-lg object-cover"
        />
      </div>
      <div className="mb-3 font-medium text-secondary">{title}</div>
      <div className="mb-2 flex items-center space-x-2">
        <CalendarDaysIcon className="h-4 w-4 text-primary" />
        <span className="text-xs text-gray-500">{dateText}</span>
      </div>
      <div className="mb-3 flex items-center space-x-2">
        <ClockIcon className="h-4 w-4 text-primary" />
        <span className="text-xs text-gray-500">
          {start} - {end}
        </span>
      </div>

      <div className="text-right text-xs text-gray-400">
        <span className="text-gray-800">{completedLectures}</span>/
        {totalLectures} lecture
      </div>
    </div>
  );
}

export default WidgetLesson;
