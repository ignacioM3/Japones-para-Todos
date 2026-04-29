export const lessons = [
  { id: "hiragana-intro", title: "Hiragana Intro", path: "hiragana/intro" },
  { id: "hiragana-vocab", title: "Vocabulario Hiragana", path: "hiragana/vocabulario" },
  { id: "hiragana-task", title: "Tarea Hiragana", path: "hiragana/tarea" },
  { id: "katakana-intro", title: "Katakana Intro", path: "katakana/intro" },
  { id: "katakana-vocab", title: "Vocabulario Katakana", path: "katakana/vocabulario" },
  { id: "katakana-task", title: "Tarea Katakana", path: "katakana/tarea" },
];


export const seccionesClase0 = lessons.map((l, i) => ({
    id: l.id,
    label: String.fromCharCode(65 + i),
    title: l.title,
    path: l.path,
}));