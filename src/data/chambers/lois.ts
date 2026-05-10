export interface Loi {
  numero: string
  enonce: string
  developpement: string
  exemple?: string
  interrogation?: string
  connexions?: {
    figures: Array<{ slug: string; nom: string }>
    lectures: Array<{ slug: string; titre: string; auteur: string }>
  }
  dimension: 'I' | 'II' | 'III'
  surface: boolean
}

export const lois: Loi[] = [
  {
    numero: 'I',
    enonce: "Ce qui n'est pas nommé ne peut pas être tenu.",
    developpement:
      "La perception sans langage reste impression — vivante, mais non transmissible. Ce qui n'a pas de nom ne peut pas être pensé deux fois de la même manière, ne peut pas être communiqué, ne peut pas être corrigé. Nommer avec précision n'est pas un exercice de style : c'est l'acte fondateur de toute maîtrise. Les organisations qui échouent nomment mal leurs problèmes. Les hommes qui souffrent longtemps nomment mal ce qui leur arrive. Le flou n'est pas une lacune — c'est souvent une protection délibérée. La clarté exige le courage de voir ce qu'on aurait préféré laisser dans l'ombre.",
    exemple:
      "Wittgenstein l'a posé comme axiome : les limites de mon langage sont les limites de mon monde. Ce n'est pas une métaphore — c'est un constat opérationnel. Darwin n'a pas observé plus que les autres naturalistes de son époque ; il a nommé ce que les autres décrivaient. La nomenclature précède la découverte.",
    interrogation:
      "Quelle chose, dans ta vie, reste sans nom — précisément parce que la nommer t'obligerait à la traiter ?",
    connexions: {
      figures: [
        { slug: 'examen-du-reel',      nom: "L'Examen du réel" },
        { slug: 'rupture-comme-clarte', nom: 'La Rupture comme clarté' },
      ],
      lectures: [
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
        { slug: 'manuel-epictete',  titre: 'Le Manuel',           auteur: 'Épictète' },
        { slug: 'art-de-la-rhetorique', titre: 'Rhétorique', auteur: 'Aristote' },
        { slug: 'essai-sur-entendement-humain', titre: "Essai sur l'entendement humain", auteur: 'John Locke' },
      ],
    },
    dimension: 'I',
    surface: true,
  },
  {
    numero: 'II',
    enonce: 'Toute structure visible repose sur une loi invisible.',
    developpement:
      "Les événements sont des surfaces. Derrière une crise économique, une loi de comportement humain sous contrainte. Derrière une organisation qui s'effondre, une architecture d'incentives mal posée. Derrière un conflit, une logique de territoire et de rang que les protagonistes eux-mêmes ne perçoivent pas. Comprendre un système, c'est refuser de s'arrêter à ce qu'il affiche — c'est remonter jusqu'à ce qui le contraint réellement. La plupart des erreurs d'analyse consistent à traiter des effets comme des causes, et à répondre à la surface quand le problème est en profondeur.",
    exemple:
      "Tocqueville, décrivant la Révolution française, ne s'attarde pas sur les événements — il cherche la structure. Il trouve : la centralisation progressive de l'État monarchique avait préparé le terrain bien avant la rupture. La forme de la révolution était déjà inscrite dans la structure de l'Ancien Régime. C'est ce niveau de lecture que LUMEN entraîne.",
    interrogation:
      "Quel événement récent t'a paru subi — alors qu'une structure que tu refusais de voir le rendait inévitable ?",
    connexions: {
      figures: [
        { slug: 'strategie-du-flux', nom: 'La Stratégie du flux' },
        { slug: 'examen-du-reel',    nom: "L'Examen du réel" },
      ],
      lectures: [
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
        { slug: 'le-prince',        titre: 'Le Prince',           auteur: 'Machiavel' },
        { slug: 'tao-te-ching', titre: 'Tao Te Ching', auteur: 'Lao Tseu' },
        { slug: 'republique-platon', titre: 'La République', auteur: 'Platon' },
        { slug: 'origine-especes', titre: "De l'origine des espèces", auteur: 'Darwin' },
      ],
    },
    dimension: 'I',
    surface: true,
  },
  {
    numero: 'III',
    enonce: 'Le rang se construit dans le silence, non dans la déclaration.',
    developpement:
      "Il y a une logique d'économie dans le rang : ce qui a besoin de se déclarer révèle par là même son insécurité. La puissance réelle n'argumente pas sa puissance — elle la manifeste. Les individus qui occupent une position haute dans un système n'ont pas besoin de l'expliquer : leur présence suffit à le signaler. Ce principe vaut pour les institutions, les œuvres, les idées. Un texte qui annonce dès l'ouverture sa propre profondeur n'est généralement pas profond. La déclaration est un substitut à la réalité — utile quand la réalité manque, coûteux quand elle est présente.",
    exemple:
      "Marc Aurèle écrit les Pensées pour lui seul — sans lecteur supposé, sans effet visé. C'est précisément pour cette raison qu'elles tiennent deux mille ans. Taleb nomme cette distinction skin in the game : ce qu'on risque réellement dit plus sur ce qu'on croit vraiment que n'importe quelle déclaration de principe.",
    interrogation:
      "À quel endroit déclares-tu un rang que ta présence seule ne suffit pas encore à signaler ?",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure',  nom: 'La Maîtrise intérieure' },
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'le-prince',         titre: 'Le Prince',              auteur: 'Machiavel' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
        { slug: 'tao-te-ching', titre: 'Tao Te Ching', auteur: 'Lao Tseu' },
        { slug: 'par-dela-bien-et-mal', titre: 'Par-delà bien et mal', auteur: 'Nietzsche' },
        { slug: 'skin-in-the-game', titre: 'Skin in the Game', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'II',
    surface: true,
  },
  {
    numero: 'IV',
    enonce: 'Un système mal nommé se retourne toujours contre son auteur.',
    developpement:
      "Quand un projet est mal défini, il attire des ressources, des attentes et des engagements incompatibles. Quand une relation est mal nommée, elle accumule des malentendus jusqu'à rupture. Quand une stratégie est formulée dans le flou, elle protège ses auteurs — jusqu'au moment où le réel exige une décision que personne ne peut prendre parce que le cadre ne le permet pas. La précision du nom n'est pas un détail rhétorique : c'est la fondation sur laquelle tout le reste repose ou s'effondre. Ce qui est nommé faux finit toujours par être démenti par les faits. La question n'est pas si — c'est quand.",
    exemple:
      "Les grandes réformes institutionnelles qui échouent portent presque toujours le même vice originel : elles ont été nommées selon ce qu'on voulait qu'elles signifient, non selon ce qu'elles étaient. 'Transformation', 'agilité', 'changement de culture' — autant de noms qui permettent à chacun d'entendre ce qu'il veut. Tant que le nom reste commode, personne ne fait face à la réalité. Le nom flou est un accord tacite pour ne pas avoir à décider.",
    connexions: {
      figures: [
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'V',
    enonce: 'La transmission est une architecture, non un geste.',
    developpement:
      "L'émotion peut déclencher. Elle ne peut pas transmettre. Ce qui passe par l'émotion seule disparaît avec elle — l'enthousiasme du discours, la force du moment, la présence de celui qui parlait. Ce qui dure a été structuré : articulé en niveaux, ancré dans des exemples répétables, éprouvé par des contradictions réelles. Les grandes traditions intellectuelles — stoïcisme, droit romain, géométrie euclidienne — ont survécu parce qu'elles ont construit des formes de transmission : des textes précis, des exercices, des commentaires successifs. Transmettre haut suppose d'avoir d'abord construit quelque chose qui mérite d'être transmis, puis d'avoir eu le soin de lui donner une forme que le temps ne détruira pas.",
    exemple:
      "Épictète n'a rien écrit. Ce qu'on possède de lui vient d'Arrien, son élève, qui a transcrit ses leçons avec une précision quasi sténographique. Sans cette architecture de transmission — le maître, l'élève rigoureux, la transcription fidèle — il ne resterait rien. La pensée sans forme disparaît. La forme sans pensée résiste mais ne transmet pas. Les deux sont nécessaires.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
      ],
      lectures: [
        { slug: 'manuel-epictete',   titre: 'Le Manuel',              auteur: 'Épictète' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
        { slug: 'banquet-platon', titre: 'Le Banquet', auteur: 'Platon' },
        { slug: 'entretiens-epictete', titre: 'Les Entretiens', auteur: 'Épictète' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    numero: 'VI',
    enonce: 'La confusion persistante est un signal — rarement du réel, toujours du regard.',
    developpement:
      "La confusion est d'abord confortable. Elle permet de suspendre le jugement, de rester dans le provisoire, d'éviter les décisions que la clarté rendrait inévitables. Quand elle dure, elle cesse d'être un signe d'humilité et devient un signe d'évitement. Le réel est complexe — mais il n'est pas intrinsèquement confus. La confusion persistante signale que le cadre de lecture est inadapté, que les catégories utilisées ne correspondent pas à la structure de ce qu'on observe. Changer de cadre n'est pas simplifier : c'est trouver l'axe depuis lequel la complexité devient lisible sans être trahie.",
    exemple:
      "Kuhn, dans La Structure des révolutions scientifiques, documente ce mécanisme à l'échelle des communautés savantes : les anomalies s'accumulent, la confusion croît, jusqu'au moment où un nouveau paradigme réorganise l'ensemble. Ce qui semblait inexplicable devient simple — non parce que le réel a changé, mais parce que le regard a trouvé son axe. Ce que Kuhn décrit pour la science vaut pour chaque domaine où l'on cherche à comprendre.",
    connexions: {
      figures: [
        { slug: 'examen-du-reel',   nom: "L'Examen du réel" },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
        { slug: 'les-essais', titre: 'Les Essais', auteur: 'Montaigne' },
        { slug: 'systeme-1-systeme-2', titre: 'Système 1 / Système 2', auteur: 'Daniel Kahneman' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
  {
    numero: 'VII',
    enonce: 'On ne choisit pas ses lois. On les découvre ou on les subit.',
    developpement:
      "Il y a une illusion de maîtrise propre à certaines époques : l'idée que les contraintes du réel sont négociables, que la volonté suffit à reconfigurer les lois de l'humain et du social. Cette illusion a un coût précis. Les lois de la psychologie sous pression, de la dynamique des groupes, des cycles de pouvoir et de légitimité — ces structures préexistent aux individus qui les traversent. Les nommer, les étudier, les cartographier n'est pas se soumettre à elles : c'est acquérir les seuls leviers réels. L'ignorance des lois ne les suspend pas — elle les rend plus coûteuses. Ce que l'homme non lucide subit, l'homme lucide le comprend et, parfois, le retourne.",
    exemple:
      "Machiavel a compris ce que les moralistes de son époque refusaient de regarder : les lois du pouvoir n'obéissent pas aux souhaits de ceux qui les ignorent. Le Prince n'est pas un manuel de cynisme — c'est un traité de lucidité. Voir les lois telles qu'elles sont, non telles qu'on voudrait qu'elles soient : c'est la condition préalable à toute action efficace dans le monde réel.",
    connexions: {
      figures: [
        { slug: 'strategie-du-flux',    nom: 'La Stratégie du flux' },
        { slug: 'rupture-comme-clarte', nom: 'La Rupture comme clarté' },
      ],
      lectures: [
        { slug: 'le-prince',    titre: 'Le Prince',    auteur: 'Machiavel' },
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
        { slug: 'par-dela-bien-et-mal', titre: 'Par-delà bien et mal', auteur: 'Nietzsche' },
        { slug: 'candide', titre: "Candide ou l'Optimisme", auteur: 'Voltaire' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    numero: 'VIII',
    enonce: "La pression ne révèle pas un caractère — elle révèle ce qui n'a pas encore été installé.",
    developpement:
      "Il existe une croyance répandue selon laquelle la pression révèle le vrai moi d'un individu — comme si l'adversité avait le pouvoir de sonder une vérité cachée. Cette croyance est inexacte et coûteuse. La pression réduit les ressources cognitives disponibles : elle contraint à opérer depuis les couches les plus automatisées du comportement. Ce qu'elle révèle n'est pas une essence — c'est le niveau de travail déjà accompli sur soi. Les réflexes sont ce qui reste quand il n'y a plus de capacité délibérative disponible. La seule réponse utile à ce constat n'est pas l'introspection au moment de la crise — c'est le travail préalable qui installe, avant la crise, des réflexes qui méritent d'être automatisés.",
    exemple:
      "Épictète l'avait formalisé deux mille ans avant les neurosciences : ce qu'on n'a pas installé avant ne peut pas être improvisé sous pression. Les Entretiens reviennent sur ce point sans relâche — c'est la raison d'être des exercices quotidiens (prosochê) qu'il impose à ses élèves. L'anecdote rapportée par Arrien est précise : un homme averti d'un naufrage possible récite les principes stoïciens à table, et tremble dans la tempête. Épictète en tire la conclusion méthodique : on ne juge pas un principe à ce qu'on en dit au calme, mais à ce qui reste quand le jugement délibératif est submergé. Ce qui n'a pas été répété jusqu'à devenir réflexe cède au premier choc réel.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
        { slug: 'systeme-1-systeme-2', titre: 'Système 1 / Système 2', auteur: 'Daniel Kahneman' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'IX',
    enonce: "Tout système produit exactement ce pour quoi il a été construit — rarement ce pour quoi il a été déclaré.",
    developpement:
      "Les systèmes ont deux niveaux de finalité : la finalité déclarée (ce qu'ils annoncent) et la finalité effective (ce que leur structure d'incentives produit réellement). Quand les deux divergent, c'est toujours la seconde qui gagne. Un système d'évaluation qui récompense les apparences de travail produit des apparences de travail — quelles que soient les valeurs affichées. Une organisation qui dit valoriser l'initiative mais punit l'échec produit de l'inertie. La finalité effective d'un système se lit dans ses résultats concrets, non dans ses textes fondateurs. La correction commence par l'honnêteté sur cet écart — ce qui exige, préalablement, de le voir.",
    exemple:
      "Les grandes réformes scolaires du XXe siècle ont déclaré vouloir l'égalité des chances. Les structures mises en place — notation normative, filières précoces, valorisation du capital culturel implicite — ont produit la reproduction des hiérarchies sociales. Non par malveillance : par architecture. Ce que Bourdieu a documenté avec précision : le système produit ce que sa structure d'incentives rend inévitable, indépendamment des intentions de ses acteurs.",
    connexions: {
      figures: [
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
        { slug: 'le-cygne-noir', titre: 'Le Cygne Noir', auteur: 'Nassim Taleb' },
        { slug: 'genealogie-morale', titre: 'La Généalogie de la morale', auteur: 'Nietzsche' },
        { slug: 'fabrication-consentement', titre: 'La Fabrication du consentement', auteur: 'Chomsky & Herman' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'X',
    enonce: "Le silence est une décision. L'inaction est une action dont on ne revendique pas les conséquences.",
    developpement:
      "La neutralité n'existe pas dans un système où des forces sont à l'œuvre. Ne pas intervenir dans un conflit, c'est laisser les forces en présence produire leur issue sans résistance — ce qui avantage structurellement la force dominante. Ne pas nommer ce qu'on observe, c'est laisser le nom de l'autre s'imposer. Ne pas décider, c'est décider que le statu quo continue. La différence entre le silence délibéré et l'inaction subie n'est pas visible de l'extérieur — mais elle est décisive pour celui qui agit : l'un possède ses conséquences, l'autre les subit en croyant y avoir échappé. La lucidité requiert de compter l'inaction dans le bilan de ses choix.",
    exemple:
      "Sun Tzu pose ce problème comme une question de timing : l'armée qui attend de voir comment la bataille se développe pour décider a déjà cédé l'initiative. L'initiative n'est pas un avantage parmi d'autres — c'est la condition qui détermine dans quel cadre tous les autres avantages s'exercent. Renoncer à l'initiative, c'est accepter de jouer dans le cadre posé par l'autre.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'strategie-du-flux', nom: 'La Stratégie du flux' },
      ],
      lectures: [
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
        { slug: 'tao-te-ching', titre: 'Tao Te Ching', auteur: 'Lao Tseu' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'XI',
    enonce: "La complexité excessive est rarement le signe d'un problème complexe. C'est presque toujours le signe d'un regard insuffisant.",
    developpement:
      "Il y a une économie de la complexité : elle protège. Un problème formulé de façon complexe n'exige pas de décision claire — il permet de différer, de déléguer, de diluer la responsabilité. Les organisations qui accumulent les niveaux de validation, les processus à multiples intervenants, les documents de cadrage successifs ne sont pas aux prises avec une réalité plus complexe que les autres : elles ont institutionnalisé la difficulté de décider. La vraie complexité n'est pas éliminable — mais elle est articulable. Ce qui ne peut pas être articulé n'est pas complexe : c'est confus. La confusion n'est pas de la profondeur. Elle en a l'allure — elle n'en a pas la substance.",
    exemple:
      "La physique quantique est d'une complexité absolue — et pourtant ses principes fondamentaux se formulent en quelques énoncés précis. Ce qui ne se formule pas n'est pas encore compris. Feynman formulait cela directement : si vous ne pouvez pas expliquer quelque chose simplement, c'est que vous ne le comprenez pas encore assez bien. La complexité articulée est un signe de maîtrise. La complexité inarticulable est un signe de travail inachevé.",
    connexions: {
      figures: [
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'structure-revolutions-scientifiques', titre: 'La Structure des révolutions scientifiques', auteur: 'Kuhn' },
        { slug: 'meditations-descartes', titre: 'Méditations métaphysiques', auteur: 'Descartes' },
        { slug: 'enquete-sur-entendement-humain', titre: "Enquête sur l'entendement humain", auteur: 'David Hume' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
  {
    numero: 'XII',
    enonce: "Le pouvoir réel se lit dans la résistance qu'il rencontre — non dans les titres qui le déclarent.",
    developpement:
      "Le titre, le grade, le mandat — ce sont des légitimités formelles. La légitimité formelle et le pouvoir réel coïncident parfois. Rarement complètement. Le pouvoir réel se mesure à la capacité de faire bouger un système contre sa résistance naturelle : décider sans que personne ne contourne la décision, réorienter sans qu'une coalition se forme pour l'annuler, imposer une contrainte que le système absorbe sans la neutraliser. Ce diagnostic n'est lisible que dans le temps et dans les faits, pas dans les organigrammes. C'est pourquoi les analyses de pouvoir fondées sur les structures formelles sont si souvent fausses — et si souvent utiles à ceux dont le pouvoir réel ne correspond pas au rang déclaré.",
    exemple:
      "Tocqueville observe que dans les démocraties naissantes, le pouvoir formel est plus visible que dans les monarchies — mais le pouvoir social informel, la tyrannie de l'opinion majoritaire et la pression de la conformité, est plus puissant et plus difficile à nommer. Le paradoxe : plus les structures formelles sont transparentes, plus le pouvoir réel se déplace vers ce que personne ne regarde. La visibilité de la forme est une protection pour la substance.",
    connexions: {
      figures: [
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
        { slug: 'strategie-du-flux', nom: 'La Stratégie du flux' },
      ],
      lectures: [
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
        { slug: 'fabrication-consentement', titre: 'La Fabrication du consentement', auteur: 'Chomsky & Herman' },
        { slug: 'du-contrat-social', titre: 'Du contrat social', auteur: 'Rousseau' },
        { slug: 'de-la-democratie-en-amerique', titre: 'De la démocratie en Amérique', auteur: 'Tocqueville' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'XIII',
    enonce: "L'urgence chronique est le symptôme d'un système sans doctrine.",
    developpement:
      "Un système qui réagit en permanence — qui passe d'une urgence à l'autre sans jamais anticiper — n'est pas plus actif qu'un système ordonné : il est plus coûteux et moins efficace. L'urgence chronique est le signe que les décisions n'ont pas été prises en amont. Les problèmes structurels non résolus reviennent sous forme de crises. La doctrine — l'ensemble des principes qui permettent de décider avant que la situation l'impose — est précisément ce qui transforme la réactivité en délibération. Sans doctrine, chaque situation est une première fois. Avec elle, la plupart des configurations ont déjà une réponse préparée. L'urgence est alors l'exception, non la règle.",
    exemple:
      "Les études sur les unités militaires d'élite convergent sur ce point : leur supériorité en situation de stress vient moins de capacités physiques exceptionnelles que de l'étendue de leur doctrine intégrée. Ce qui est préparé est exécuté rapidement. Ce qui ne l'est pas est improvisé lentement et à grand coût. La lenteur dans la crise est presque toujours le prix d'une préparation absente.",
    connexions: {
      figures: [
        { slug: 'strategie-du-flux', nom: 'La Stratégie du flux' },
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
      ],
      lectures: [
        { slug: 'art-de-la-guerre', titre: "L'Art de la guerre", auteur: 'Sun Tzu' },
        { slug: 'discours-machiavel', titre: 'Discours sur la première décade de Tite-Live', auteur: 'Machiavel' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    numero: 'XIV',
    enonce: "Ce qu'on ne peut pas perdre, on ne peut pas vraiment le tenir.",
    developpement:
      "L'attachement à un résultat particulier est une source structurelle de distorsion du jugement. Celui qui ne peut pas se permettre d'échouer ne peut pas lire correctement les signaux qui annoncent l'échec — il les filtre. Celui qui ne peut pas perdre sa position ne peut pas évaluer honnêtement les décisions qui la mettent en jeu. La liberté de perdre est une condition de la clarté du jugement. Ce n'est pas un argument pour le détachement affectif : c'est un constat structurel. Le jugement qui ne peut pas se permettre une certaine conclusion est un jugement compromis avant d'avoir commencé — quelle que soit l'intelligence de celui qui le produit.",
    exemple:
      "Taleb formalise ce principe sous la forme du skin in the game : on ne peut faire confiance au jugement de celui qui ne risque rien dans ce qu'il conseille. Mais l'inverse est aussi vrai — et moins souvent dit : celui qui risque l'essentiel dans un résultat unique ne peut pas non plus être objectif. La zone de fiabilité du jugement est entre les deux : une exposition réelle, mais pas une exposition existentielle. L'enjeu suffisant pour rendre honnête, insuffisant pour rendre aveugle.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'antifragile', titre: 'Antifragile', auteur: 'Nassim Taleb' },
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'skin-in-the-game', titre: 'Skin in the Game', auteur: 'Nassim Taleb' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'XV',
    enonce: "Comprendre une fois n'est pas comprendre. Ce qui n'a pas été répété jusqu'à l'automatisme reste fragile.",
    developpement:
      "La compréhension intellectuelle d'un principe et son installation dans le comportement sont deux événements distincts. On peut savoir qu'il faut nommer avant d'agir, comprendre pourquoi, être capable de l'expliquer à d'autres — et ne pas le faire sous pression. L'écart entre ce qu'on comprend et ce qu'on fait est la mesure exacte de ce qui n'a pas encore été travaillé. Toutes les traditions de transmission qui ont duré le savent : la répétition n'est pas la preuve d'une compréhension insuffisante — elle est la condition de son installation. Ce qu'on ne répète pas jusqu'à l'automatisme reste une connaissance déclarative. Elle n'agit pas.",
    exemple:
      "Pierre Hadot a montré que la philosophie antique n'était pas une doctrine à croire — c'était un ensemble de pratiques à répéter jusqu'à ce qu'elles reconfigurent la perception. Le journal du soir d'Épictète, le bilan quotidien de Marc Aurèle ne sont pas des rituels symboliques. Ce sont des protocoles d'installation : répéter, vérifier l'écart entre le principe et l'acte, corriger, recommencer. La philosophie comme manière de vivre, non comme système de pensée.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
      ],
      lectures: [
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
        { slug: 'pensees-marc-aurele', titre: 'Pensées pour moi-même', auteur: 'Marc Aurèle' },
        { slug: 'entretiens-epictete', titre: 'Les Entretiens', auteur: 'Épictète' },
        { slug: 'essai-sur-entendement-humain', titre: "Essai sur l'entendement humain", auteur: 'John Locke' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    numero: 'XVI',
    enonce: "La hiérarchie est une structure — non une injustice. La question n'est pas son existence, mais le critère qui la fonde.",
    developpement:
      "La confusion entre hiérarchie et inégalité illégitime a un coût précis : elle rend impossible l'analyse de ce qui structure réellement les systèmes. Les hiérarchies existent dans tout système organisé — biologique, social, intellectuel. Les nier, c'est les subir sans les comprendre. Les identifier, c'est acquérir un levier de lecture. La question pertinente n'est pas 'y a-t-il une hiérarchie ?' — il y en a toujours une — mais 'sur quel critère est-elle construite ?' et 'ce critère produit-il ce que le système déclare vouloir ?' Une hiérarchie fondée sur la production de valeur réelle n'est pas équivalente à une hiérarchie fondée sur la conformité ou la visibilité — même si elles se ressemblent de l'extérieur.",
    exemple:
      "Aristote distinguait les constitutions droites, qui servent le bien commun, des constitutions déviantes, qui servent les gouvernants. La distinction ne porte pas sur la présence ou l'absence de hiérarchie — toutes en ont une — mais sur le critère qui la fonde et la finalité qu'elle sert. La question politique pertinente n'est pas 'qui commande ?' mais 'pourquoi ce critère, et à qui profite-t-il ?'",
    connexions: {
      figures: [
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'ethique-nicomaque', titre: "Éthique à Nicomaque", auteur: 'Aristote' },
        { slug: 'le-prince', titre: 'Le Prince', auteur: 'Machiavel' },
        { slug: 'republique-platon', titre: 'La République', auteur: 'Platon' },
        { slug: 'du-contrat-social', titre: 'Du contrat social', auteur: 'Rousseau' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'XVII',
    enonce: "Ce qui résiste à l'examen mérite d'être transmis. Ce qui ne le supporte pas mérite d'être abandonné.",
    developpement:
      "Le test de l'examen est la seule procédure de validation intellectuelle qui ne dépende pas du prestige de la source, de l'ancienneté de la croyance ou de la taille du consensus. Une idée qui résiste aux meilleures objections disponibles n'est pas nécessairement vraie — mais elle a acquis un droit provisoire d'opérer. Une idée qui ne peut pas être examinée, qui devient fragile au contact de la question, qui ne peut être défendue que par l'autorité de celui qui l'énonce — cette idée n'est pas une connaissance, c'est une croyance. La distinction entre les deux n'est pas rhétorique : elle détermine ce qui peut être transmis avec intégrité et ce qui doit être retenu ou abandonné.",
    exemple:
      "Socrate n'a jamais prétendu enseigner. Il a prétendu examiner — et si quelque chose résistait à l'examen, il acceptait de l'apprendre. La méthode elenctique — réfutation par le contre-exemple jusqu'à ce que l'interlocuteur découvre lui-même l'inconsistance de sa position — est le premier protocole rigoureux de validation intellectuelle dans l'histoire occidentale. Ce qu'elle produit n'est pas la certitude : c'est la distinction entre ce qu'on sait et ce qu'on croit savoir. Cette distinction est déjà immense.",
    connexions: {
      figures: [
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
        { slug: 'signal-dans-le-bruit', nom: 'Le Signal dans le bruit' },
      ],
      lectures: [
        { slug: 'apologie-socrate', titre: "L'Apologie de Socrate", auteur: 'Platon' },
        { slug: 'ethique-nicomaque', titre: "Éthique à Nicomaque", auteur: 'Aristote' },
        { slug: 'les-essais', titre: 'Les Essais', auteur: 'Montaigne' },
        { slug: 'candide', titre: "Candide ou l'Optimisme", auteur: 'Voltaire' },
        { slug: 'meditations-descartes', titre: 'Méditations métaphysiques', auteur: 'Descartes' },
        { slug: 'enquete-sur-entendement-humain', titre: "Enquête sur l'entendement humain", auteur: 'David Hume' },
      ],
    },
    dimension: 'I',
    surface: false,
  },
  {
    numero: 'XVIII',
    enonce: "Les cycles ne se répètent pas — mais leur structure, si. Lire le passé n'est pas de la nostalgie : c'est de la cartographie.",
    developpement:
      "L'histoire ne se répète pas à l'identique. Elle reproduit des structures : des configurations de légitimité en crise, des dynamiques de transition entre phases d'un cycle, des mécanismes d'effondrement et de renouveau. Celui qui ne connaît pas ces structures doit les redécouvrir à ses frais, au moment le plus coûteux. Celui qui les connaît peut les reconnaître plus tôt, avant qu'elles soient pleinement déployées. Ce n'est pas de la prédiction — c'est de la reconnaissance de patterns. La cartographie des cycles passés est un instrument de lecture du présent, non un instrument de prophétie. La différence entre les deux est précisément la différence entre l'analyse et l'idéologie.",
    exemple:
      "Tocqueville, analysant la Révolution américaine puis la française, identifie des structures communes : la montée de l'égalité de condition, la crise de légitimité des corps intermédiaires, le risque de centralisation qui suit toute révolution démocratique. Il ne prédit pas — il cartographie les forces en jeu. Cette cartographie lui permet de voir dans la démocratie américaine des tensions que ses contemporains français ne perçoivent pas encore, parce qu'ils sont trop près du moment pour en voir la structure.",
    connexions: {
      figures: [
        { slug: 'rupture-comme-clarte', nom: 'La Rupture comme clarté' },
        { slug: 'regard-sans-illusions', nom: 'Le Regard sans illusions' },
      ],
      lectures: [
        { slug: 'ancien-regime-revolution', titre: "L'Ancien Régime et la Révolution", auteur: 'Tocqueville' },
        { slug: 'structure-revolutions-scientifiques', titre: 'La Structure des révolutions scientifiques', auteur: 'Kuhn' },
        { slug: 'origine-especes', titre: "De l'origine des espèces", auteur: 'Darwin' },
        { slug: 'de-la-democratie-en-amerique', titre: 'De la démocratie en Amérique', auteur: 'Tocqueville' },
      ],
    },
    dimension: 'II',
    surface: false,
  },
  {
    numero: 'XIX',
    enonce: "La transmission sans forme disparaît. La forme sans substance est un monument vide.",
    developpement:
      "Il existe deux erreurs symétriques dans la construction de ce qui dure. La première : croire que la qualité d'une idée suffit à assurer sa survie. L'histoire intellectuelle est pleine de pensées profondes qui n'ont laissé aucune trace parce que personne n'a eu soin de leur donner une forme résistante — une structure mémorable, un texte précis, une pratique répétable. La seconde erreur, inverse : investir dans la forme sans que la substance justifie cet investissement. Les dispositifs institutionnels, les formats éditoriaux, les architectures de contenu peuvent survivre longtemps à la pensée qui les a fondés. Ce qui dure vraiment associe les deux : une idée qui mérite de survivre et une architecture qui le lui permet.",
    exemple:
      "Les Dialogues de Platon ont traversé deux millénaires et demi. Non uniquement parce que les idées sont profondes — mais parce que la forme du dialogue est pédagogiquement irremplaçable. Elle montre la pensée en train de se faire, non ses résultats figés. Elle intègre la contradiction, le doute, le changement de position. La forme n'est pas un ornement : elle est ce qui rend la pensée transmissible dans sa texture vivante, non seulement dans ses conclusions.",
    connexions: {
      figures: [
        { slug: 'maitrise-interieure', nom: 'La Maîtrise intérieure' },
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
      ],
      lectures: [
        { slug: 'banquet-platon', titre: 'Le Banquet', auteur: 'Platon' },
        { slug: 'manuel-epictete', titre: 'Le Manuel', auteur: 'Épictète' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
  {
    numero: 'XX',
    enonce: "La clarté sans courage est stérile. Le courage sans clarté est dangereux.",
    developpement:
      "Voir juste n'est pas suffisant. La lucidité qui ne s'exprime pas, la compréhension qui ne produit pas d'acte, le diagnostic qui reste dans le for intérieur par calcul des conséquences — cette forme de clarté est stérile. Elle protège son détenteur et laisse inchangé ce qu'il a compris. À l'inverse, le courage sans clarté — l'énergie déployée dans la mauvaise direction, l'action audacieuse sur un diagnostic faux — est destructeur avec les meilleures intentions. Ces deux erreurs symétriques définissent les deux façons de rater le moment. La formule de LUMEN — voir juste, nommer net, structurer profond, transmettre haut — est une architecture qui exige les deux : la clarté comme fondation, le courage comme passage à l'acte. L'une sans l'autre est incomplète.",
    exemple:
      "Socrate a choisi la mort plutôt que de renoncer à l'examen. Ce n'est pas un geste mystique ou une démonstration de vertu morale — c'est une démonstration de cohérence structurelle. Celui qui enseigne que la vie non examinée ne mérite pas d'être vécue ne peut pas acheter sa vie en abandonnant l'examen. La cohérence entre la compréhension et l'acte est la forme la plus rare et la plus lisible du courage intellectuel : non le courage du risque physique, mais le courage de ne pas trahir ce qu'on a compris.",
    connexions: {
      figures: [
        { slug: 'examen-du-reel', nom: "L'Examen du réel" },
        { slug: 'rupture-comme-clarte', nom: 'La Rupture comme clarté' },
      ],
      lectures: [
        { slug: 'apologie-socrate', titre: "L'Apologie de Socrate", auteur: 'Platon' },
        { slug: 'de-brevitate-vitae', titre: 'De la brièveté de la vie', auteur: 'Sénèque' },
      ],
    },
    dimension: 'III',
    surface: false,
  },
]
