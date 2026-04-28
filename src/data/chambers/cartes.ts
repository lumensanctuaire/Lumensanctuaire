export interface Carte {
  slug: string
  titre: string
  territoire: string
  description: string
  lecture: string
  exemple?: string
  connexions?: {
    figures: Array<{ slug: string; nom: string }>
    lectures: Array<{ slug: string; titre: string; auteur: string }>
  }
  dimension: 'I' | 'II' | 'III'
  surface: boolean
}

export const cartes: Carte[] = [
  {
    slug: 'pyramide-des-causes',
    titre: 'La Pyramide des causes',
    territoire: 'Analyse',
    description:
      "Tout événement visible repose sur trois couches distinctes : la surface (ce qui s'est passé), le mécanisme (ce qui a rendu cela possible), et la loi (ce qui aurait rendu tout autre issue impossible). La plupart des analyses s'arrêtent à la surface — et répondent donc à une question que personne n'a posée. Remonter jusqu'à la loi, c'est acquérir le levier qui manque à tous ceux qui travaillent à l'étage du dessous.",
    lecture:
      "La pyramide s'utilise en remontant : identifier l'événement visible, puis le mécanisme qui l'a rendu possible, puis la loi structurelle qui rendait tout autre issue improbable. L'analyse s'arrête là où les leviers deviennent réels — au niveau de la loi, pas de la surface.",
    exemple:
      "Une startup échoue. Surface : le marché n'était pas là. Mécanisme : le produit a été construit avant que le problème soit nommé. Loi : ce qui n'est pas validé par le réel avant d'être construit sera contredit par lui après. Agir sur la surface (changer de marché) reproduit l'erreur. Agir sur la loi transforme la méthode.",
    connexions: {
      figures: [
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'I',
    surface: true,
  },
  {
    slug: 'gradient-attention-signal',
    titre: "Le Gradient attention-signal",
    territoire: 'Perception',
    description:
      "La perception n'est pas neutre. Ce à quoi on consacre de l'attention s'amplifie — non parce que cela grossit, mais parce que le cadre de lecture se reconfigure autour de ce qu'on observe. À l'inverse, ce qu'on ignore ne disparaît pas : il opère hors du champ conscient et revient sous forme de surprise. La qualité du regard n'est pas une question d'intelligence — c'est une question d'architecture de l'attention.",
    lecture:
      "La carte révèle que l'attention n'est pas une ressource neutre : elle reconfigure le champ perçu. L'écart entre ce qu'un système déclare observer et ce qu'il observe réellement est une donnée structurelle — elle révèle la configuration effective de la perception, indépendamment des intentions.",
    exemple:
      "Kahneman a montré que les biais cognitifs ne sont pas des erreurs de raisonnement — ce sont des architectures d'attention qui produisent des résultats systématiques. Le biais de disponibilité : on estime la probabilité d'un événement à partir de la facilité avec laquelle il vient à l'esprit. Ce qui a été récemment vu est perçu comme plus probable. Ce qui n'a pas encore été vu semble improbable. La perception n'est pas une fenêtre sur le réel — c'est une construction.",
    connexions: {
      figures: [
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
      ],
      lectures: [
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
  {
    slug: 'carte-du-pouvoir',
    titre: 'La Carte du pouvoir',
    territoire: 'Pouvoir',
    description:
      "Le pouvoir s'exerce sur quatre axes qui coexistent rarement dans une analyse ordinaire : le contrôle des ressources (ce qui est nécessaire à d'autres), l'asymétrie d'information (ce qu'on sait et qu'ils ignorent), la légitimité (l'autorisation tacite d'exercer une influence), et la capacité de contrainte (ce qu'on peut imposer). La plupart des analyses de pouvoir n'en voient qu'un ou deux. Celui qui voit les quatre comprend des configurations que les autres ne perçoivent pas.",
    lecture:
      "La carte se lit en croisant les quatre axes simultanément — ce qu'une analyse uniaxiale ne peut pas faire. Le pouvoir réel se trouve le plus souvent à l'intersection de deux axes que l'analyse ordinaire ne superpose pas : celui qui tient l'information et la légitimité, non les ressources formelles, gouverne effectivement.",
    exemple:
      "Dans une organisation, le responsable RH n'a souvent aucune légitimité formelle sur les décisions stratégiques. Mais il contrôle l'information sur les mobilités à venir, les tensions entre dirigeants, les évaluations informelles. C'est une puissance d'axe 2 (information) que les organigrammes — construits sur l'axe 1 (ressources) et l'axe 3 (légitimité) — ne voient pas.",
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
    surface: false,
  },
  {
    slug: 'cycle-des-systemes',
    titre: 'Le Cycle des systèmes',
    territoire: 'Cycles',
    description:
      "Tout système organisé traverse une séquence identifiable : émergence (une idée ou une forme prend corps), expansion (elle gagne en portée et en membres), complexification (les règles s'accumulent pour gérer la croissance), rigidité (les règles se substituent au jugement), crise (le réel dépasse ce que les règles peuvent absorber), effondrement ou renouveau (selon que la rigidité résiste ou cède). Cette séquence vaut pour les civilisations, les entreprises, les paradigmes intellectuels, les relations.",
    lecture:
      "La carte fournit un repère de phase, non une prédiction. Ce qu'elle permet de lire : les signes qui distinguent la complexification légitime (les règles répondent à de nouveaux problèmes réels) de la rigidité pathologique (les règles se substituent au jugement et perdent contact avec le réel qu'elles prétendent régir).",
    connexions: {
      figures: [
        { slug: 'rupture-comme-clarte', nom: 'La Rupture comme clarté' },
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    slug: 'architecture-transmission',
    titre: "L'Architecture de la transmission",
    territoire: 'Transmission',
    description:
      "La transmission n'est pas un geste — c'est une construction à quatre éléments nécessaires. La compression : une idée complexe réduite à sa structure minimale sans trahir ce qu'elle contient. La forme : un récipient qui résiste au temps (texte, pratique, exemple incarné). La répétition : non pour fixer mécaniquement, mais pour installer dans la mémoire profonde ce qui doit devenir réflexe. L'exemple : l'ancre dans le réel qui distingue la transmission de l'abstraction. Sans les quatre, quelque chose passe — mais ce n'est pas ce qu'on croyait transmettre.",
    lecture:
      "La carte diagnostique la transmission manquée en identifiant l'élément absent : ce qui ne tient pas dans le temps manque de forme résistante ; ce qui ne change pas le regard manque de compression réelle ; ce qui ne se transfère pas manque d'exemple incarné. Les quatre éléments ne sont pas optionnels — l'absence de l'un suffit à dégrader ce qui passe.",
    exemple:
      "Épictète n'a rien écrit. Ce que nous possédons de lui vient d'Arrien, son élève. La compression : le principe diairétique (ce qui dépend de nous / ce qui n'en dépend pas). La forme : les aphorismes du Manuel, mémorables et précis. La répétition : les exercices quotidiens que le stoïcisme impose. L'exemple : la vie d'Épictète lui-même — esclave, puis maître reconnu. Les quatre éléments sont là. Vingt siècles après, ça tient.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    slug: 'matrice-signal-bruit',
    titre: 'La Matrice signal / bruit',
    territoire: 'Analyse',
    description:
      "Tout ce qui paraît important ne l'est pas. Tout ce qui semble négligeable n'est pas sans conséquence. La matrice signal/bruit s'articule sur deux axes : visibilité (ce qui est vu vs ce qui est invisible) et pertinence (ce qui est réel vs ce qui est construit). Ce qui est visible et pertinent est le signal immédiat. Ce qui est invisible et pertinent est le signal profond — le plus précieux et le plus difficile à acquérir. Ce qui est visible et non pertinent est le bruit structuré — le plus dangereux car il use l'attention sans rien apporter.",
    lecture:
      "La matrice se lit en cherchant d'abord le quadrant invisible-pertinent — le signal profond que l'environnement ne fait pas remonter spontanément. Ce quadrant est structurellement sous-pondéré dans tout système d'attention ordinaire : il exige une démarche active, non une réception passive. Le bruit structuré (visible, non pertinent) est le coût d'opportunité le plus sous-estimé de l'attention.",
    connexions: {
      figures: [
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
]
