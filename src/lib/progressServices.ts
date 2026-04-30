import { lessons } from "./lessons";
import { LessonStatus, type LessonProgress } from "./progress";

const STORAGE_KEY = "course-progress";


export function getProgress(): LessonProgress[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data) return JSON.parse(data);

  // estado inicial
  const initial = lessons.clase0.map((l, i) => ({
    id: l.id,
    status: i === 0 ? LessonStatus.Available : LessonStatus.Locked,
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));

  return initial;
}

export function saveProgress(progress: LessonProgress[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function completeLesson(id: string) {
  const progress = getProgress();

  const index = progress.findIndex((l) => l.id === id);
  console.log(index)

  if (index === -1) return;

  // marcar como completada
  progress[index].status = LessonStatus.Completed;

  // desbloquear siguiente
  if (progress[index + 1]) {
    if (progress[index + 1].status === LessonStatus.Locked) {
      progress[index + 1].status = LessonStatus.Available;
    }
  }

  saveProgress(progress);
}