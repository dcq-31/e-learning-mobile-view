import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import BarProgress from "./BarProgress";
import { WidgetCourseProps } from "../types";

function WidgetCourse({ tag, title, progress }: WidgetCourseProps) {
  return (
    <div className="space-y-4 rounded-lg bg-white p-3.5 shadow-lg shadow-gray-200">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-primary px-2 py-1 font-mono text-xs text-white">
          {tag}
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer text-secondary" />
      </div>

      <div className="w-fit cursor-pointer font-medium text-secondary hover:text-secondary-500">
        {title}
      </div>

      <div>
        <div className="mb-2 flex justify-between text-sm text-gray-500">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <BarProgress progress={progress} />
      </div>
    </div>
  );
}

export default WidgetCourse;
