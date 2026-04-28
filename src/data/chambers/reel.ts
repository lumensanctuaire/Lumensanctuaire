export interface DomaineReel {
  slug: string
  domaine: string
  territoire: string
  observation: string
  mecanisme: string
  exemple?: string
  connexions?: {
    figures: Array<{ slug: string; nom: string }>
    lectures: Array<{ slug: string; titre: string; auteur: string }>
  }
  dimension: 'I' | 'II' | 'III'
  surface: boolean
}

export const domainesReel: DomaineReel[] = [
  {
    slug: 'pouvoir-reel',
    domaine: 'Pouvoir',
    territoire: 'Les Cycles',
    observation:
      "Le pouvoir réel ne s'annonce pas. Il s'installe. Les hiérarchies formelles et les hiérarchies réelles divergent presque toujours : celui qui signe les décisions n'est pas nécessairement celui qui les produit. Celui qui est visible n'est pas nécessairement celui qui est puissant. Le pouvoir qui a besoin de se montrer révèle, par là même, sa précarité.",
    mecanisme:
      "Le pouvoir se consolide par la réduction de la dépendance des autres à son égard — non par l'expansion des signes qui le signalent. Celui qui devient indispensable sans paraître l'être accumule une puissance que les organigrammes et les titres ne peuvent ni capturer ni menacer. C'est pourquoi les coups de palais frappent rarement les plus visibles — ils frappent ceux qui ont oublié de rester indispensables.",
    exemple:
      "Machiavel a documenté ce mécanisme avec une précision que ses contemporains ont voulu qualifier de cynisme. Ce n'était pas du cynisme : c'était une lecture exacte. Les princes qui ont duré n'étaient pas les plus cruels ni les plus aimés — c'étaient ceux qui avaient compris la structure des loyautés et s'étaient rendus irremplaçables dans l'esprit de ceux dont ils dépendaient.",
    connexions: {
      figures: [
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
        { slug: 'strategie-du-flux', nom: 'La Stratégie du flux' },
      ],
      lectures: [
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
      ],
    },
    dimension: 'II',
    surface: true,
  },
  {
    slug: 'travail-durable',
    domaine: 'Travail',
    territoire: 'Les Fondements',
    observation:
      "Le travail qui dure possède une logique interne que son auteur n'a pas besoin de justifier à chaque obstacle. Ce qui repose sur la récompense externe — reconnaissance, statut, rémunération — cède précisément quand la résistance est maximale : dans les phases longues sans retour, sous la pression soutenue, dans l'indifférence du contexte. Ce qui repose sur une nécessité interne — sens, contrainte que le sujet s'impose lui-même, maîtrise recherchée pour elle-même — ne dépend pas que les conditions extérieures soient favorables pour continuer.",
    mecanisme:
      "Ce n'est pas une question de volonté. C'est une question d'architecture. Le travail motivé de l'extérieur n'est pas défaillant par manque de courage — il est structurellement fragile parce que son carburant est contingent. Quand la reconnaissance tarde, quand l'argent est incertain, quand le statut n'est pas encore acquis, il n'y a plus rien pour tenir. Celui qui travaille à partir d'une nécessité intérieure n'attend pas ces retours pour continuer — il continue parce que ne pas continuer lui serait impossible.",
    exemple:
      "Marc Aurèle gouvernait un empire et rédigeait ses Pensées pour lui seul. Il n'y cherchait ni lecteur, ni postérité, ni reconnaissance. C'est précisément ce désintéressement de la forme extérieure qui a produit quelque chose qui tient vingt siècles. La qualité n'est pas une conséquence de la pression externe — c'est une conséquence de l'exigence interne.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
      ],
      lectures: [
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    slug: 'psychologie-sous-pression',
    domaine: 'Psychologie',
    territoire: 'Les Fondements',
    observation:
      "Sous pression, les individus reviennent à leurs schémas les plus anciens. Non parce qu'ils choisissent de régresser — parce que la pression réduit les ressources cognitives disponibles pour maintenir les patterns récemment acquis. La pression ne révèle pas un 'vrai moi' mystérieux : elle révèle ce qui n'a pas encore été suffisamment travaillé pour devenir réflexe.",
    mecanisme:
      "Un comportement non intégré demande un effort conscient. Un comportement intégré opère sans coût. Sous pression, la capacité d'effort conscient s'effondre — et ce qui reste, c'est ce qui n'en a plus besoin. C'est pourquoi la discipline philosophique stoïcienne insiste sur la pratique quotidienne plutôt que sur la compréhension théorique : comprendre n'est pas suffisant. Il faut que la conduite soit devenue automatique avant que la pression arrive.",
    exemple:
      "Épictète le formulait différemment, mais le mécanisme est le même : on ne peut pas improviser la maîtrise de soi au moment où elle est nécessaire. Elle doit avoir été installée avant. Les exercices stoïciens — la méditation du matin, le bilan du soir, la préméditation du pire — ne sont pas des rituels de confort. Ce sont des protocoles d'installation de comportements qui résisteront quand tout le reste cède.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
  {
    slug: 'creation-tension',
    domaine: 'Création',
    territoire: 'Les Fondements',
    observation:
      "Toute œuvre naît d'une tension non résolue. Ce qui est entièrement résolu n'a pas besoin d'être dit — il peut être communiqué directement. L'œuvre est la forme que prend une question à laquelle l'auteur n'avait pas encore de réponse au moment de commencer. C'est pourquoi les œuvres les plus précieuses ne sont pas des réponses — elles sont des questions mises en forme avec une précision suffisante pour que d'autres puissent continuer à les habiter.",
    mecanisme:
      "Quand la tension disparaît avant la fin, l'œuvre s'arrête ou devient mécanique. C'est le signe que l'auteur a résolu son problème intérieur sans que la forme en soit l'instrument. À l'inverse, forcer une œuvre vers une résolution avant que la tension réelle soit épuisée produit des conclusions prématurées — qui ont l'apparence de la complétude mais pas sa densité.",
    connexions: {
      figures: [
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'les-essais', titre: 'Les Essais', auteur: 'Montaigne' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    slug: 'transmission-incarnee',
    domaine: 'Transmission',
    territoire: 'Les Fondements',
    observation:
      "Rien de ce qui compte ne se transmet par déclaration. La déclaration informe — elle ne transforme pas. La transformation suppose un récipient prêt (celui qui reçoit a un problème réel que ce qu'il reçoit peut résoudre), une forme adaptée (ni trop complexe pour être reçue, ni trop simplifiée pour être vraie), un temps suffisant (l'installation prend du temps que la transmission ne peut pas compresser), et un exemple incarné (ce que la parole seule ne peut pas produire).",
    mecanisme:
      "La transmission qui manque l'un de ces quatre éléments passe — mais passe comme information, non comme formation. L'information peut être correcte et ne rien changer. La formation, quand elle réussit, change la façon dont le réel apparaît — et ce changement de perception est irréversible. C'est la différence entre savoir que le pouvoir s'installe et voir comment il s'installe dans la situation qu'on traverse en ce moment.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
]
