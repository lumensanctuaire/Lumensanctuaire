import { lois } from './lois'

export function getLoisPourFigure(figureSlug: string) {
  return lois
    .filter((l) => l.connexions?.figures.some((f) => f.slug === figureSlug))
    .map((l) => ({ numero: l.numero, enonce: l.enonce }))
}

export function getLoisPourLecture(lectureSlug: string) {
  return lois
    .filter((l) => l.connexions?.lectures.some((lec) => lec.slug === lectureSlug))
    .map((l) => ({ numero: l.numero, enonce: l.enonce }))
}
