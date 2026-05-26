// scripts/progressClient.ts
import { completeLesson, getProgress } from "../lib/progressServices";
import { getClaseByLessonId, type ClaseKey } from "../lib/lessons";

export function initAsideProgress() {
  const links = document.querySelectorAll("a[data-id]");

  links.forEach((link) => {
    const id = link.getAttribute("data-id")!;
    const clase = getClaseByLessonId(id);
    if (!clase) return;

    const progress = getProgress(clase);
    const lesson = progress.find(l => l.id === id);
    if (!lesson) return;

    if (lesson.status === "locked") {
      link.classList.add("opacity-40", "pointer-events-none");
      link.innerHTML = "🔒 " + link.innerHTML;
    }

    if (lesson.status === "completed") {
      link.innerHTML = "✔ " + link.innerHTML;
    }
  });
}

export function initCompleteButton(buttonId: string, lessonId: string, clase: ClaseKey) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", () => {
    completeLesson(clase, lessonId);
    location.reload();
  });
}