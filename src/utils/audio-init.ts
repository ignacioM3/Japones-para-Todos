import { playSound } from "./audio";


document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const dataAudio = target.closest("[data-audio]");

  if (!dataAudio) return;

  const src = dataAudio.getAttribute("data-audio");
  if (!src) return;

  playSound(src);
});