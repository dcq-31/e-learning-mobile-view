import WidgetLesson from "./WidgetLesson";
import { WidgetLessonProps } from "../types";

interface SliderLessonProps {
  lessons: Array<WidgetLessonProps>;
}

function SliderLesson({ lessons }: SliderLessonProps) {
  return (
    <div className="-mx-3 snap-x space-x-3 overflow-auto whitespace-nowrap px-3">
      {lessons.map((lesson, index) => (
        <WidgetLesson {...lesson} key={index} />
      ))}
    </div>
  );
}

export default SliderLesson;
