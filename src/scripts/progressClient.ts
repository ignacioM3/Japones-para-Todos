// src/scripts/progressClient.ts
import { completeLesson, getProgress } from "../lib/progressServices";
import { getClaseByLessonId, type ClaseKey } from "../lib/lessons";

export function initAsideProgress() {
  // 1. Lógica para escritorio (links con data-id)
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

  // 2. Lógica para móvil (select con id="tema")
  setupMobileSelect();
}
function setupMobileSelect() {
  const select = document.getElementById("tema") as HTMLSelectElement | null;
  if (!select) return;

  // Obtener la clase actual desde la URL
  const currentPath = window.location.pathname;
  const claseMatch = currentPath.match(/\/lecciones\/(clase-\d+)/);
  const claseBase = claseMatch ? claseMatch[1] : "";

  // Recorremos las opciones
  Array.from(select.options).forEach((option) => {
    const sectionId = option.value?.slice(1); // ej: "particula-は"
    const path = option.getAttribute("data-path"); // ej: "hiragana/vocabulario"
    
    if (!sectionId || !path) return;

    const clase = getClaseByLessonId(sectionId);
    if (!clase) return;

    const progress = getProgress(clase);
    const lesson = progress.find(l => l.id === sectionId);
    if (!lesson) return;

    const originalText = option.textContent?.trim() || "";
    if (!originalText.startsWith("✔") && !originalText.startsWith("🔒")) {
      if (lesson.status === "locked") {
        option.textContent = `🔒 ${originalText}`;
        option.disabled = true;
      } else if (lesson.status === "completed") {
        option.textContent = `✔ ${originalText}`;
      }
    }

    // Construir la URL correcta usando el path de la sección
    const targetUrl = `/lecciones/${claseBase}/${path}`;
    option.setAttribute("data-href", targetUrl);
  });

  // Evento de cambio: navegar a la URL almacenada
  select.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    const selectedOption = target.options[target.selectedIndex];
    const href = selectedOption.getAttribute("data-href");
    
    if (href && !selectedOption.disabled) {
      window.location.href = href;
    }
    
    target.value = "";
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