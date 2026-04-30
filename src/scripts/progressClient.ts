import { completeLesson, getProgress } from "../lib/progressServices";


export function initAsideProgress() {
  const progress = getProgress();

  const links = document.querySelectorAll("a[data-id]");

  links.forEach((link) => {
    const id = link.getAttribute("data-id");
    const lesson = progress.find((l) => l.id === id);

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

export function initCompleteButton(buttonId: string, lessonId: string) {
  const btn = document.getElementById(buttonId);

  if (!btn) return;

  btn.addEventListener("click", () => {
    completeLesson(lessonId);
    location.reload(); // simple pero efectivo
  });
}