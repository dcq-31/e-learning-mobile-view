import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import BarProgress from "./BarProgress";
interface IWidgetCourseProps {
  tag: string;
  title: string;
  progress: number;
}

function WidgetCourse({ tag, title, progress }: IWidgetCourseProps) {
  return (
    <div className="space-y-4 rounded-md p-3.5 shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-orange-300 px-2 py-1 font-mono text-xs text-white">
          {tag}
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer text-gray-700" />
      </div>

      <div className="w-fit cursor-pointer font-medium text-gray-800 hover:text-gray-700">
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
