/**
 * General types
 */
interface ImgProps {
  src: string;
  alt: string;
}

/**
 * Component types
 */

export interface WidgetCourseProps {
  tag: string;
  title: string;
  progress: number;
}

export interface WidgetLessonProps {
  title: string;
  img: ImgProps;
  dateText: string;
  start: string;
  end: string;
  totalLectures: number;
  completedLectures: number;
}
