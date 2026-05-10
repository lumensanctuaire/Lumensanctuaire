import Link from 'next/link'
import Header from '@/components/Header'
import ThresholdLine from '@/components/ThresholdLine'
import ChamberMark, { type ChamberMarkSlug } from '@/identity/chamberMarks'

const corpus = [
  {
    slug: 'lois',
    nom: 'Les Lois',
    nature: 'Ce que LUMEN a dégagé comme structurant le réel — invisible, persistant, invariant. Les principes qui gouvernent la perception, le pouvoir, les systèmes humains, la transmission. Ce qui est vrai indépendamment de l\'époque.',
    forme: 'Principes · Structures · Connexions',
    dimension: 'I–III',
  },
  {
    slug: 'figures',
    nom: 'Les Figures',
    nature: "Les lignées que LUMEN reconnaît comme fondatrices. Non pour célébrer — pour s'orienter. Chaque présence est une façon de tenir le monde. Six lignées, dix-huit présences, chacune avec sa thèse, sa méthode, ses limites.",
    forme: 'Présences · Thèses · Corpus d\'œuvre',
    dimension: 'I',
  },
  {
    slug: 'lectures',
    nom: 'Les Lectures',
    nature: "La bibliothèque commentée. Trente textes choisis pour ce qu'ils ont produit dans la pensée et dans l'action — avec un commentaire sur leur apport réel, pas sur leur réputation. Formes variées : traité, essai, aphorismes, journal, enquête.",
    forme: 'Textes · Commentaires · Extraits',
    dimension: 'I',
  },
  {
    slug: 'cartes',
    nom: 'Les Cartes',
    nature: 'Les représentations qui tiennent. Schémas mentaux, architectures de pensée, taxonomies du réel. Ce que les mots seuls ne peuvent pas nommer — rendu visible, transmissible, utilisable sous pression.',
    forme: 'Schémas · Architectures · Structures',
    dimension: 'II',
  },
  {
    slug: 'reel',
    nom: 'Le Réel',
    nature: 'Les domaines d\'application où les lois opèrent concrètement : pouvoir, travail, psychologie, création, transmission. Non comme théorie — comme cartographie de ce qui se passe réellement dans chaque domaine.',
    forme: 'Domaines · Mécanismes · Exemples',
    dimension: 'II',
  },
  {
    slug: 'oeuvres',
    nom: 'Les Œuvres',
    nature: "Les formes longues et achevées. Essais, études de cas, lexiques, traités. Ce que LUMEN a produit quand une loi ou une idée demandait à être développée jusqu'à sa forme complète — pas compressée, pas résumée.",
    forme: 'Essais · Traités · Études de cas',
    dimension: 'III',
  },
  {
    slug: 'feu',
    nom: 'Le Feu',
    nature: "Manifestes, paroles de seuil, appels à l'élévation. Les textes qui ne cherchent pas à expliquer — qui cherchent à installer. Ce qui reste quand la connaissance devient conviction.",
    forme: 'Manifestes · Fragments · Doctrines',
    dimension: 'III',
  },
]

export default function BibliothequePage() {
  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />

      <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">

        <div style={{ marginBottom: '4rem' }}>
          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', marginBottom: '1.5rem' }}
          >
            LUMEN · Corpus
          </p>
          <h1
            className="font-cinzel"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: '600', letterSpacing: '0.04em', color: '#E8E2D3', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            La Bibliothèque
          </h1>
          <p
            className="font-manrope"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.85, maxWidth: '520px' }}
          >
            Ce n&apos;est pas une bibliothèque de consultation.
            C&apos;est le corpus vivant du sanctuaire —
            ce que LUMEN a retenu du réel, ordonné en sept territoires,
            rendu transmissible. Chaque chambre est une façon de voir.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>

        <div>
          {corpus.map((section, i) => (
            <div
              key={section.slug}
              className="py-10 border-b"
              style={{ borderColor: 'rgba(232,226,211,0.06)' }}
            >
              <div className="flex items-start gap-8">
                <span
                  className="font-cinzel text-[10px] tracking-[0.2em] shrink-0 mt-1 w-6"
                  style={{ color: 'rgba(207,174,106,0.28)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2
                      className="font-cinzel font-semibold"
                      style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.3 }}
                    >
                      {section.nom}
                    </h2>
                    <div className="flex items-center shrink-0" style={{ gap: '0.55rem', marginTop: '4px' }}>
                      <ChamberMark
                        slug={section.slug as ChamberMarkSlug}
                        size={14}
                        color="rgba(207,174,106,0.35)"
                      />
                      <span
                        className="font-cinzel"
                        style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.25)' }}
                      >
                        Dim. {section.dimension}
                      </span>
                    </div>
                  </div>
                  <p
                    className="font-manrope"
                    style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '1rem' }}
                  >
                    {section.nature}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-cinzel text-[9px] tracking-[0.32em] uppercase"
                      style={{ color: '#6B5B8E' }}
                    >
                      {section.forme}
                    </span>
                    <Link
                      href={`/chambres/${section.slug}`}
                      className="font-cinzel text-[9px] tracking-[0.28em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
                      style={{ color: 'rgba(207,174,106,0.35)' }}
                    >
                      Entrer →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <p
            className="font-manrope"
            style={{ fontSize: '13px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.85 }}
          >
            Le corpus complet est accessible aux membres du sanctuaire.
          </p>
          <Link
            href="/entrer"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A] mt-3 inline-block"
            style={{ color: 'rgba(207,174,106,0.45)' }}
          >
            Franchir le seuil →
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/chambres"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.4)' }}
          >
            ← Les Chambres
          </Link>
          <Link
            href="/figures"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.4)' }}
          >
            Les Figures →
          </Link>
        </div>
      </div>
    </main>
  )
}