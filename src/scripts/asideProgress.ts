import { getProgress } from "../lib/progressServices";


export function initAsideProgress() {
  const progress = getProgress();

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    const id = link.getAttribute("href").replace("#", "");
    const lesson = progress.find((l) => l.id === id);

    if (!lesson) return;

    if (lesson.status === "locked") {
      link.style.opacity = "0.4";
      link.style.pointerEvents = "none";
      link.innerHTML = "🔒 " + link.innerHTML;
    }

    if (lesson.status === "completed") {
      link.innerHTML = "✔ " + link.innerHTML;
    }
  });
}