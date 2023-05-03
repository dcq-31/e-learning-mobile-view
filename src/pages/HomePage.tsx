import WidgetCourse from "../components/WidgetCourse";
import SliderLesson from "../components/SliderLesson";
import { USER_NAME, WIDGET_COURSE, WIDGETS_LESSON } from "../constants";

function HomePage() {
  return (
    <div className="py-5">
      <div className="mb-7">
        <div className="mb-5 text-2xl font-semibold tracking-wide text-gray-800">
          Hello, {USER_NAME}
        </div>
        <WidgetCourse {...WIDGET_COURSE} />
      </div>

      <div className="mb-7">
        <div className="mb-5 text-2xl font-semibold tracking-wide text-gray-800">
          Upcoming classes
        </div>
        <SliderLesson lessons={WIDGETS_LESSON} />
      </div>

      <button className="btn btn-primary w-full tracking-wide">
        View the schedule
      </button>
    </div>
  );
}

export default HomePage;
