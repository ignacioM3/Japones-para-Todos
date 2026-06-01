import { lessons, type ClaseKey } from "./lessons";
import { LessonStatus, type LessonProgress } from "./progress";

export function storageKey(clase: ClaseKey){
  return `course-progress-${clase}`;
}


export function getProgress(clase: ClaseKey): LessonProgress[] {
   const key = storageKey(clase);
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data);

  const lecciones = lessons[clase];
  const initial = lecciones.map((l, i) => ({
    id: l.id,
    status: i === 0 ? LessonStatus.Available : LessonStatus.Locked,
  }));

  localStorage.setItem(key, JSON.stringify(initial));

  return initial;
}

export function saveProgress(clase: ClaseKey, progress: LessonProgress[]) {
  localStorage.setItem(storageKey(clase), JSON.stringify(progress));
}

export function completeLesson(clase: ClaseKey, id: string) {
  const progress = getProgress(clase);

  const index = progress.findIndex((l) => l.id === id);

  if (index === -1) return;

  progress[index].status = LessonStatus.Completed;

 if (index + 1 < progress.length && progress[index + 1].status === LessonStatus.Locked) {
    progress[index + 1].status = LessonStatus.Available;
  }

  saveProgress(clase, progress);
}

export function getClassPercentage(clase: ClaseKey): number {
  const progress = getProgress(clase);
  if (progress.length === 0) return 0;

  const completed = progress.filter(l => l.status === LessonStatus.Completed).length;
  return Math.round((completed / progress.length) * 100);
}