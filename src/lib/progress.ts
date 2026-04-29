export type LessonStatus = "locked" | "available" | "completed";
export const LessonStatus = {
  Locked: "locked" as LessonStatus,
  Available: "available" as LessonStatus,
  Completed: "completed" as LessonStatus,
}


export interface LessonProgress {
  id: string;
  status: LessonStatus;
}

export interface CourseProgress {
  lessons: LessonProgress[];
}