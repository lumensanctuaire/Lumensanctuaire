import { lois } from './lois'
import { cartes } from './cartes'
import { domainesReel } from './reel'

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

export function getCartesPourFigure(figureSlug: string) {
  return cartes
    .filter((c) => c.connexions?.figures.some((f) => f.slug === figureSlug))
    .map((c) => ({ slug: c.slug, titre: c.titre }))
}

export function getCartesPourLecture(lectureSlug: string) {
  return cartes
    .filter((c) => c.connexions?.lectures.some((l) => l.slug === lectureSlug))
    .map((c) => ({ slug: c.slug, titre: c.titre }))
}

export function getDomainesPourFigure(figureSlug: string) {
  return domainesReel
    .filter((d) => d.connexions?.figures.some((f) => f.slug === figureSlug))
    .map((d) => ({ slug: d.slug, domaine: d.domaine }))
}

export function getDomainesPourLecture(lectureSlug: string) {
  return domainesReel
    .filter((d) => d.connexions?.lectures.some((l) => l.slug === lectureSlug))
    .map((d) => ({ slug: d.slug, domaine: d.domaine }))
}
