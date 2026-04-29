const sounds: Record<string, HTMLAudioElement> = {};

export const playSound = (src: string) => {
  if (!src) return;

  if (!sounds[src]) {
    sounds[src] = new Audio(src);
  }

  sounds[src].currentTime = 0;
  sounds[src].play();
};