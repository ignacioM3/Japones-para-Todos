import { lessons } from "./lessons";

const KEY = "jp-course-progress";

export function getProgress() {
  const data = localStorage.getItem(KEY);

  if (!data) {
    const initial = lessons.map((l, i) => ({
      id: l.id,
      status: i === 0 ? "unlocked" : "locked",
    }));

    localStorage.setItem(KEY, JSON.stringify(initial));
    return initial;
  }

  return JSON.parse(data);
}

export function completeLesson(id: string) {
  const progress = getProgress();

  const index = progress.findIndex((l: any) => l.id === id);

  if (index === -1) return;

  progress[index].status = "completed";

  if (progress[index + 1]) {
    progress[index + 1].status = "unlocked";
  }

  localStorage.setItem(KEY, JSON.stringify(progress));
}