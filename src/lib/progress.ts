export type LessonStatus = "locked" | "unlocked" | "completed";

export interface LessonProgress {
  id: string;
  status: LessonStatus;
}

export interface CourseProgress {
  lessons: LessonProgress[];
}