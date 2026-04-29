import { completeLesson } from "../lib/progressServices";


export function initCompleteButtons() {
  const btn = document.getElementById("complete-hiragana-task");

  if (!btn) return;

  btn.addEventListener("click", () => {
    completeLesson("hiragana-task");
    alert("Lección completada 🎉");
    window.location.reload();
  });
}