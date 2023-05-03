import { WidgetCourseProps, WidgetLessonProps } from "./types";

const USER_NAME = "Mia";

const WIDGET_COURSE: WidgetCourseProps = {
  tag: "Your main course",
  title: "Marketing in B2B",
  progress: 65,
};

const WIDGETS_LESSON: Array<WidgetLessonProps> = [
  {
    title: "Public Relations",
    img: { src: "lessons/public-relations.jpg", alt: "Public relations image" },
    dateText: "Tuesday, 13th",
    start: "9:00",
    end: "10:30",
    totalLectures: 10,
    completedLectures: 9,
  },
  {
    title: "Marketing Theory",
    img: { src: "lessons/marketing-theory.jpg", alt: "Marketing theory image" },
    dateText: "Monday, 17th",
    start: "8:30",
    end: "10:00",
    totalLectures: 15,
    completedLectures: 4,
  },
  {
    title: "Math Practices",
    img: { src: "lessons/math-practices.jpg", alt: "Math Practices image" },
    dateText: "Friday, 21st",
    start: "11:00",
    end: "1:00",
    totalLectures: 5,
    completedLectures: 3,
  },
];

export { USER_NAME, WIDGET_COURSE, WIDGETS_LESSON };
