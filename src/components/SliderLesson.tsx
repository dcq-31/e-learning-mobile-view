import WidgetLesson from "./WidgetLesson";
import { WidgetLessonProps } from "../types";

interface SliderLessonProps {
  lessons: Array<WidgetLessonProps>;
}

function SliderLesson({ lessons }: SliderLessonProps) {
  return (
    <div className="-mx-2 snap-x space-x-3 overflow-auto whitespace-nowrap px-2">
      {lessons.map((lesson, index) => (
        <WidgetLesson {...lesson} key={index} />
      ))}
    </div>
  );
}

export default SliderLesson;
