export interface Presence {
  nom: string
  dates?: string
  imageSlug?: string
  apport: string
  these: string
  methode: string
  textesCles: Array<{ titre: string; pourquoi: string; slug?: string }>
  limite?: string
}

export interface LigneeFigure {
  slug: string
  lignee: string
  orientation: string
  presences: Presence[]
  role: string
  analyse: string
  periode?: string
  dimension: 'I' | 'II' | 'III' | 'I–III'
  territoires?: string[]
  surface: boolean
}

export const ligneeFigures: LigneeFigure[] = [
  {
    slug: 'maitrise-interieure',
    lignee: 'La Maîtrise intérieure',
    orientation: 'Discipline & Liberté',
    presences: [
      {
        nom: 'Épictète',
        dates: '~50 – 135',
        imageSlug: 'epictete.jpg',
        apport: 'Ce qui dépend de nous — la distinction fondatrice',
        these: "La liberté n'est pas l'absence de contraintes extérieures — c'est la maîtrise totale de ce qui relève de notre volonté. Tout ce qui est extérieur à notre jugement (corps, réputation, possession, mort) est, par nature, indifférent. Ce qui dépend de nous — jugement, désir, impulsion — est le seul domaine où la liberté est possible et où l'exigence morale a un sens.",
        methode: "Épictète ne théorise pas — il enseigne par la répétition d'exercices. Sa méthode est une discipline de reclassification constante : face à chaque événement, poser la question 'est-ce en mon pouvoir ou non ?' avant tout autre réaction. La philosophie stoïcienne n'est pas une conviction mais une pratique quotidienne qui reconfigure les réflexes de perception.",
        textesCles: [
          { titre: 'Le Manuel (Enchiridion)', slug: 'manuel-epictete', pourquoi: "Le texte le plus court qui ait produit le plus de clarté sur ce qu'est la liberté réelle. Chaque chapitre est un exercice, non une thèse. À lire comme un protocole d'entraînement, non comme une lecture." },
          { titre: 'Les Entretiens (Diatribes)', slug: 'entretiens-epictete', pourquoi: "Le cours oral d'Épictète transcrit par Arrien. Plus rugueux que le Manuel — plus proche de la pensée en train de se faire. Révèle la méthode complète, notamment l'usage de la contradiction socratique pour forcer l'élève à voir sa propre incohérence." },
        ],
        limite: "La distinction 'ce qui dépend de nous / ce qui n'en dépend pas' est juste comme orientation — mais elle risque de sous-estimer les déterminismes structurels réels (économiques, sociaux, biologiques) qui contraignent ce que l'individu peut effectivement vouloir. Appliquée sans nuance, elle peut devenir une justification de l'inaction politique.",
      },
      {
        nom: 'Marc Aurèle',
        dates: '121 – 180',
        imageSlug: 'marc-aurele.jpg',
        apport: 'La philosophie comme pratique quotidienne du commandement',
        these: "La philosophie n'est pas un luxe de la paix — c'est ce qui permet de gouverner sous pression sans perdre la mesure. Marc Aurèle démontre qu'on peut exercer le pouvoir absolu tout en maintenant une discipline intérieure qui l'empêche de corrompre le caractère. La vertu n'est pas récompensée — elle est sa propre récompense et sa propre raison d'être.",
        methode: "Les Pensées sont un carnet privé — jamais destiné à être publié, jamais destiné à un lecteur. C'est précisément pour cela qu'elles constituent le document stoïcien le plus authentique : une philosophie pratiquée, non exposée. Sa méthode est le bilan quotidien : chaque soir, examiner les écarts entre les principes affirmés et les actes de la journée.",
        textesCles: [
          { titre: 'Pensées pour moi-même (Ta eis heauton)', slug: 'pensees-marc-aurele', pourquoi: "Document unique dans l'histoire de la philosophie : un homme de pouvoir qui se soumet à lui-même à la même exigence qu'il applique aux autres. La tension entre le pouvoir impérial et la discipline intérieure produit des formulations d'une densité exceptionnelle. À lire comme un miroir, non comme un manuel." },
        ],
        limite: "La résignation stoïcienne peut conduire à accepter des injustices structurelles que l'action politique aurait pu corriger. Marc Aurèle a gouverné un empire esclavagiste sans le remettre en question — sa philosophie personnelle n'a pas produit de transformation institutionnelle.",
      },
      {
        nom: 'Sénèque',
        dates: '~4 av. J.-C. – 65',
        imageSlug: 'seneque.jpg',
        apport: 'La lucidité sur le temps comme forme de souveraineté',
        these: "Le temps est la seule ressource non renouvelable — et la seule que nous dilapidons sans compter. La véritable richesse n'est pas l'accumulation de biens ou de statut, mais la possession pleine de son propre temps. Celui qui vit selon l'opinion des autres n'a jamais commencé à vivre. La mort est un outil de lucidité : penser à elle n'est pas morbide, c'est ce qui permet de distinguer ce qui vaut d'être vécu de ce qui ne l'est pas.",
        methode: "Sénèque écrit des lettres — la forme la plus directe de la transmission. Pas de système, pas de traité — des analyses précises de situations concrètes. Sa méthode est la dissection : prendre une conviction commune ('il faut être occupé', 'la richesse protège'), l'examiner jusqu'à ce qu'elle révèle son inconsistance, proposer le retournement.",
        textesCles: [
          { titre: 'De la brièveté de la vie (De brevitate vitae)', slug: 'de-brevitate-vitae', pourquoi: "Le texte le plus opérationnel de Sénèque. Démontre que le problème n'est pas que la vie est trop courte — c'est qu'on la gaspille. La distinction entre être occupé et vivre pleinement est d'une acuité chirurgicale." },
          { titre: 'Lettres à Lucilius (Epistulae morales)', pourquoi: "124 lettres sur la mort, le temps, la philosophie, l'amitié, la peur. Le format épistolaire produit une intimité que le traité ne peut pas atteindre. La pensée de Sénèque se révèle dans la progression — chaque lettre s'appuie sur la précédente." },
          { titre: 'Le Banquet (Platon)', slug: 'banquet-platon', pourquoi: "Le socle platonicien dont la discipline intérieure stoïcienne hérite : l'ascension du désir vers une Forme plus haute. Sénèque reprend cette architecture — la philosophie comme reconfiguration progressive de ce qu'on choisit d'aimer. Sans ce modèle, la maîtrise de soi reste une contrainte ; avec lui, elle devient une élévation." },
        ],
        limite: "La tension entre la prédication stoïcienne et la vie de Sénèque (l'une des fortunes les plus grandes de Rome) est réelle. Il en avait conscience — cela explique une partie de l'ambivalence de ses textes. La question qu'il laisse ouverte : peut-on pratiquer ce qu'on enseigne dans les conditions réelles du monde ?",
      },
    ],
    role: "La maîtrise intérieure comme fondement de la liberté. Distinguer ce qui dépend de nous de ce qui n'en dépend pas — et n'investir pleinement que dans le premier.",
    analyse: "La lignée stoïcienne pose la question la plus fondamentale de la philosophie pratique : qu'est-ce que la liberté réelle ? Sa réponse contredit l'intuition commune. La liberté n'est pas l'absence de contraintes — c'est l'indépendance du jugement à l'égard de tout ce qui est extérieur à lui. Cette thèse a des conséquences radicales : elle rend la liberté disponible dans n'importe quelle condition matérielle, y compris l'esclavage (Épictète) ou l'empire (Marc Aurèle). Elle déplace la question de la politique vers la psychologie — non pour abandonner la première, mais pour établir la seconde comme condition de la première. Ce que cette lignée transmet n'est pas une consolation : c'est un instrument de perception qui change ce qu'on voit comme modifiable et ce qu'on voit comme donné.",
    periode: 'IIIe s. av. – IIe s. ap. J.-C.',
    dimension: 'II',
    territoires: ['Les Fondements', 'Les Lois'],
    surface: true,
  },
  {
    slug: 'regard-sans-illusions',
    lignee: 'Le Regard sans illusions',
    orientation: 'Pouvoir & Humanisme',
    presences: [
      {
        nom: 'Machiavel',
        dates: '1469 – 1527',
        imageSlug: 'machiavel.jpg',
        apport: 'Le pouvoir lu sans morale superposée',
        these: "Le pouvoir obéit à des lois qui ne sont pas les lois morales — et les ignorer ne les supprime pas, ça les subit. Machiavel n'est pas cynique : il est précis. Sa thèse centrale est que l'efficacité politique exige une lecture exacte du réel humain — les hommes sont ingrats, mobiles, simulateurs. Gouverner à partir de ce qu'ils devraient être plutôt que de ce qu'ils sont est une faute de jugement, pas une vertu.",
        methode: "Machiavel lit l'histoire comme un laboratoire : les configurations se répètent, les erreurs se reproduisent, les structures persistent au-delà des individus. Sa méthode est comparative et structurelle — non 'que devrait faire un prince ?' mais 'qu'ont fait les princes qui ont duré, et pourquoi ?' L'histoire n'est pas un récit moral — c'est une base de données sur les mécanismes humains.",
        textesCles: [
          { titre: 'Le Prince (Il Principe)', slug: 'le-prince', pourquoi: "Pas un manuel de cynisme — une analyse structurelle du pouvoir. Chaque conseil est une loi dérivée d'une observation répétée. À lire non pour imiter les conseils mais pour comprendre la méthode de lecture du réel qu'ils impliquent." },
          { titre: 'Discours sur la première décade de Tite-Live', slug: 'discours-machiavel', pourquoi: "Le vrai chef-d'œuvre de Machiavel. Plus long, plus complexe, plus républicain que Le Prince. Révèle sa pensée complète sur les institutions, la vertu civique et les cycles politiques." },
          { titre: 'La République (Platon)', slug: 'republique-platon', pourquoi: "Le modèle que Machiavel refuse en bloc — et qu'il faut lire pour mesurer la rupture. Là où Platon construit la cité à partir de ce qu'elle devrait être, Machiavel part de ce que les hommes sont. La comparaison des deux textes rend lisible l'acte fondateur de la pensée politique moderne : quitter le normatif pour tenir le descriptif." },
          { titre: 'Du contrat social (Rousseau)', slug: 'du-contrat-social', pourquoi: "Le contrepoint républicain à Machiavel. Rousseau reprend la question du fondement du pouvoir mais en cherche la légitimité plutôt que l'efficacité. Les deux textes, lus ensemble, posent la tension centrale de toute théorie politique : le pouvoir juste est-il celui qui dure, ou celui qui mérite de durer ?" },
        ],
        limite: "La vision machiavélique du pouvoir est descriptive d'une certaine réalité — mais elle naturalise ce qu'elle décrit. En affirmant que 'les hommes sont ainsi', elle risque de légitimer des pratiques qui contribuent précisément à produire les comportements qu'elle observe.",
      },
      {
        nom: 'Léonard de Vinci',
        dates: '1452 – 1519',
        imageSlug: 'leonard-de-vinci.png',
        apport: "L'observation totale comme méthode de connaissance",
        these: "La connaissance vient de l'observation directe, non de l'autorité des textes. Léonard refuse la distinction entre art et science, entre théorie et pratique — tout est une seule forme d'enquête sur le fonctionnement du réel. Son intuition fondamentale : la nature obéit à des lois mathématiques que l'observation rigoureuse peut dégager, et ces lois sont les mêmes du vol des oiseaux à l'anatomie humaine.",
        methode: "Les carnets de Léonard sont la méthode incarnée : observation minutieuse, dessin comme instrument de pensée (non d'illustration), hypothèse, expérimentation, révision. Il passe d'un domaine à l'autre non par dispersion mais parce qu'il cherche les lois communes. L'anatomie lui apprend l'hydraulique, l'hydraulique lui apprend l'aérodynamique.",
        textesCles: [
          { titre: 'Les Carnets (édition Richter)', pourquoi: "Pas un livre — une pensée en acte. La discontinuité des carnets n'est pas un défaut : c'est la forme authentique de la pensée de Léonard, qui refuse les systèmes fermés au profit de l'enquête ouverte." },
        ],
        limite: "La dispersion de Léonard a un coût réel : peu de projets achevés, peu de transmission directe. Son génie est maximal mais sa capacité à structurer et transmettre est limitée. Il incarne la puissance de l'observation — et les limites d'une pensée qui ne se force pas à se fermer.",
      },
      {
        nom: 'Montaigne',
        dates: '1533 – 1592',
        imageSlug: 'montaigne.jpg',
        apport: "L'examen de soi comme forme d'honnêteté intellectuelle",
        these: "Toute pensée qui ne passe pas par l'examen de soi est suspecte. Montaigne invente une forme pour penser sans prétendre à la certitude — l'essai. Sa thèse : 'je' est le seul objet d'étude accessible directement, et en l'étudiant sans complaisance ni système, on touche à quelque chose d'universel. 'Chaque homme porte la forme entière de l'humaine condition.'",
        methode: "L'essai comme méthode : poser une question, explorer sans plan fixé, changer d'avis en chemin, noter le changement, ne pas conclure si la conclusion n'est pas honnête. Montaigne se contredit — et l'assume. Cette honnêteté sur la contradiction est plus rigoureuse que la cohérence forcée.",
        textesCles: [
          { titre: 'Les Essais', slug: 'les-essais', pourquoi: "Le livre le plus personnel de la littérature mondiale — et paradoxalement l'un des plus universels. À lire dans le désordre, en commençant par ce qui résiste. Livre III est le plus mature. 'De l'expérience' (III, 13) est peut-être le texte fondateur de l'humanisme moderne." },
          { titre: "De la démocratie en Amérique (Tocqueville)", slug: 'de-la-democratie-en-amerique', pourquoi: "L'héritier direct de Montaigne dans la lignée : observer sans préconception, laisser le réel imposer ses formes à l'analyse. Tocqueville fait pour la société démocratique ce que Montaigne faisait pour la condition humaine — regarder avant de juger, et noter ce qui résiste à la simplification." },
        ],
        limite: "L'introspection permanente peut mener à l'immobilisme — ou à une forme d'égocentrisme intellectuel qui traite la vie intérieure comme seul domaine digne d'attention. Montaigne évite ce piège grâce à son ancrage dans le monde — mais ses imitateurs pas toujours.",
      },
    ],
    role: "La redécouverte de l'homme dans sa totalité. Machiavel lit le pouvoir sans illusions. Léonard observe sans jugement. Montaigne se retourne sur lui-même.",
    analyse: "Ces trois figures partagent un refus : le refus de mettre la réalité au service d'une idée préconçue. Machiavel refuse la morale comme grille de lecture du pouvoir. Léonard refuse les autorités comme source de connaissance. Montaigne refuse la cohérence forcée comme critère de vérité. Chacun, à sa façon, inaugure un geste qui sera fondateur de la modernité intellectuelle : regarder ce qui est, non ce qu'on voudrait que ce soit. La Renaissance n'est pas un retour à l'Antiquité — c'est la redécouverte du réel comme objet d'étude légitime, contre le dogme médiéval.",
    periode: 'XIVe – XVIIe siècle',
    dimension: 'II',
    territoires: ['Les Cycles', 'Les Fondements'],
    surface: true,
  },
  {
    slug: 'examen-du-reel',
    lignee: "L'Examen du réel",
    orientation: 'Raison & Vérité',
    presences: [
      {
        nom: 'Socrate',
        dates: '~470 – 399 av. J.-C.',
        imageSlug: 'socrate.jpg',
        apport: "L'examen de soi comme acte premier de rigueur",
        these: "La vie non examinée ne mérite pas d'être vécue. Cette formule n'est pas une provocation — c'est un programme. Socrate pose que la vertu est connaissance : on ne fait le mal que par ignorance. La tâche première n'est donc pas l'action mais l'examen — clarifier ce qu'on croit savoir, distinguer la croyance de la connaissance, identifier les contradictions dans ses propres convictions.",
        methode: "La méthode socratique (elenchus) : poser une question simple ('qu'est-ce que la justice ?'), accepter la définition proposée, trouver un contre-exemple qui la met en défaut, répéter jusqu'à ce que l'interlocuteur découvre lui-même l'inconsistance de sa position. L'objectif n'est pas de convaincre — c'est de faire voir. Socrate n'enseigne pas : il accouche (maïeutique).",
        textesCles: [
          { titre: "L'Apologie de Socrate (Platon)", slug: 'apologie-socrate', pourquoi: "Le discours de défense lors du procès — mais surtout la formulation la plus directe de la mission socratique. Révèle pourquoi l'examen philosophique est politiquement dangereux : il déstabilise les certitudes sur lesquelles le pouvoir social repose." },
          { titre: 'Le Ménon (Platon)', pourquoi: "Le dialogue qui pose la question fondamentale : peut-on enseigner la vertu ? La réponse de Socrate — la connaissance est anamnèse (remémoration) — a des implications radicales sur ce qu'est l'apprentissage réel." },
          { titre: 'Les Essais (Montaigne)', slug: 'les-essais', pourquoi: "La méthode socratique intériorisée : au lieu d'examiner l'interlocuteur, Montaigne s'examine lui-même avec la même exigence. L'essai est la forme moderne de l'elenchus — appliquée à soi, sans prétention à conclure. Héritier direct de Socrate par le geste, non par la doctrine." },
          { titre: 'Méditations métaphysiques (Descartes)', slug: 'meditations-descartes', pourquoi: "Le doute méthodique est l'elenchus socratique rigoureusement systématisé. Descartes refait, sur le terrain des certitudes métaphysiques, le geste que Socrate faisait sur les certitudes morales — démonter ce qui se donne comme évident jusqu'à ce qui résiste réellement à l'examen." },
        ],
        limite: "L'intellectualisme moral de Socrate ('on fait le mal par ignorance') sous-estime la part irréductible de la volonté défaillante (akrasia) que même Aristote reconnaîtra. On peut savoir ce qui est bien et ne pas le faire — la connaissance seule ne suffit pas.",
      },
      {
        nom: 'Platon',
        dates: '~428 – 348 av. J.-C.',
        imageSlug: 'platon.png',
        apport: "La distinction entre l'apparence et ce qui est",
        these: "Ce que les sens perçoivent n'est pas le réel — c'est l'ombre du réel. Derrière la multiplicité des choses sensibles existent des Formes (Idées) éternelles, immuables, qui constituent le fondement de leur être. La connaissance vraie est accès à ces Formes — pas observation du monde sensible. L'allégorie de la caverne est la formulation la plus puissante de cette thèse : nous sommes les prisonniers qui prennent les ombres pour la réalité.",
        methode: "Le dialogue comme méthode philosophique. Platon ne parle jamais en son nom — il met ses idées dans la bouche de personnages, principalement Socrate. Ce choix n'est pas rhétorique : il signale que la vérité se cherche dans l'échange, pas dans la déclaration. La dialectique platonicienne est une ascension progressive vers des formes de plus en plus fondamentales.",
        textesCles: [
          { titre: 'La République (Politeia)', slug: 'republique-platon', pourquoi: "L'œuvre la plus complète — politique, éducation, psychologie, métaphysique, esthétique. L'allégorie de la caverne (livre VII) est le texte le plus cité de la philosophie occidentale. À lire en entier pour voir comment la question politique mène aux questions les plus profondes." },
          { titre: 'Le Banquet (Symposion)', slug: 'banquet-platon', pourquoi: "Le discours d'Alcibiade sur Socrate est le portrait le plus vivant du philosophe. Le discours de Diotime sur l'ascension vers la Beauté absolue est la formulation la plus pure du platonisme." },
        ],
        limite: "Le dualisme platonicien (sensible/intelligible) a produit une méfiance durable envers le corps, les sens et la contingence qui a nui à la pensée occidentale. Aristote corrigera en ramenant les Formes dans les choses elles-mêmes.",
      },
      {
        nom: 'Aristote',
        dates: '384 – 322 av. J.-C.',
        imageSlug: 'aristote.jpg',
        apport: 'La classification du réel comme accès à sa structure',
        these: "La connaissance commence par l'observation du monde sensible — non par sa fuite. Les Formes ne sont pas séparées des choses : elles sont dans les choses. La philosophie est une entreprise de classification rigoureuse : distinguer les genres, les espèces, les catégories, les causes. Comprendre un phénomène, c'est identifier ses quatre causes : matérielle, formelle, efficiente, finale.",
        methode: "Aristote est le premier encyclopédiste : biologie, logique, rhétorique, poétique, physique, politique, éthique. Sa méthode est l'induction à partir de cas particuliers vers des principes généraux, suivie de la déduction à partir de ces principes. Il commence toujours par recenser les opinions existantes (endoxa) avant de les soumettre à l'analyse.",
        textesCles: [
          { titre: 'Éthique à Nicomaque', slug: 'ethique-nicomaque', pourquoi: "La réflexion la plus rigoureuse sur la question 'comment vivre bien ?' La notion d'eudaimonia (bonheur comme accomplissement de sa nature propre) et celle de vertu comme juste milieu (mesotès) restent les contributions les plus durables à l'éthique philosophique." },
          { titre: 'La Politique', pourquoi: "L'analyse des régimes politiques à partir de 158 constitutions étudiées. Aristote pose que l'homme est un animal politique — la polis n'est pas un contrat mais l'accomplissement de la nature humaine." },
          { titre: "L'Organon (les traités de logique)", pourquoi: "La fondation de la logique formelle occidentale. Le syllogisme comme forme du raisonnement valide. Resté l'instrument standard du raisonnement philosophique jusqu'au XIXe siècle." },
          { titre: 'Rhétorique', slug: 'art-de-la-rhetorique', pourquoi: "Aristote soumet la persuasion au même regard classificatoire qu'il applique à la nature : ethos, pathos, logos — la tripartition qui permet de distinguer ce qui convainc de ce qui manipule. Prolonge l'examen socratique jusqu'au mécanisme du discours public." },
          { titre: "Essai sur l'entendement humain (Locke)", slug: 'essai-sur-entendement-humain', pourquoi: "Locke radicalise l'empirisme aristotélicien : toute idée vient de l'expérience, aucune n'est innée. L'examen du réel se déplace vers l'examen des conditions mêmes de la connaissance — poursuivant, à l'âge classique, le geste aristotélicien de cartographier ce qu'on peut savoir." },
          { titre: "Enquête sur l'entendement humain (Hume)", slug: 'enquete-sur-entendement-humain', pourquoi: "Hume pousse l'examen jusqu'à son point le plus inconfortable : même la causalité ne résiste pas à l'analyse rigoureuse — elle est une habitude de l'esprit, non une structure du réel. L'examen aristotélicien retourné contre ses propres présupposés." },
        ],
        limite: "La finalité aristotélicienne (tout tend vers sa fin naturelle) peut mener à naturaliser des hiérarchies sociales contingentes — Aristote a justifié l'esclavage 'naturel'. La téléologie, utile comme outil d'analyse, devient dangereuse comme justification de l'ordre existant.",
      },
    ],
    role: "La naissance du questionnement rationnel. Ce que Socrate inaugure — l'examen de soi — Platon structure en formes, et Aristote systématise en catégories.",
    analyse: "Ces trois figures ne forment pas une progression linéaire — elles forment une tension productive que la philosophie occidentale n'a jamais complètement résolue. Socrate pose la méthode (l'examen). Platon pose la métaphysique (les Formes). Aristote pose l'encyclopédie (le réel observable). La tension entre Platon et Aristote — monde des Formes vs formes dans les choses — traverse encore la philosophie contemporaine sous d'autres noms. Ce que cette lignée transmet : la distinction entre opinion et connaissance, entre apparence et structure, entre ce qu'on croit savoir et ce qu'on peut démontrer.",
    periode: '469 – 322 av. J.-C.',
    dimension: 'I',
    territoires: ['Les Fondements', 'Les Lois'],
    surface: true,
  },
  {
    slug: 'strategie-du-flux',
    lignee: 'La Stratégie du flux',
    orientation: 'Flux & Harmonie',
    presences: [
      {
        nom: 'Lao Tseu',
        dates: '~VIe s. av. J.-C.',
        imageSlug: 'lao-tseu.jpg',
        apport: 'Le Tao — la loi qui précède toutes les lois',
        these: "Le Tao (la Voie) est le principe qui sous-tend toute réalité — non une divinité, non une loi morale, mais le flux originel dans lequel tout émerge et vers lequel tout retourne. Le sage ne combat pas ce flux — il s'aligne avec lui. Le wu wei (non-agir) n'est pas passivité : c'est l'action juste qui ne force pas, qui ne se heurte pas, qui tire sa puissance de la compréhension du mouvement naturel des choses.",
        methode: "Le Tao Te Ching est un texte aphoristique — 81 courts chapitres, intentionnellement paradoxaux. La forme n'est pas un défaut : les paradoxes signalent les limites du langage conceptuel pour saisir ce qui précède les concepts. Lao Tseu enseigne en déstabilisant, non en définissant.",
        textesCles: [
          { titre: 'Tao Te Ching (Livre de la Voie et de la Vertu)', slug: 'tao-te-ching', pourquoi: "L'un des textes les plus traduits et les plus commentés de l'histoire. À lire dans plusieurs traductions simultanément — la comparaison révèle ce que chaque traduction force que le texte laisse ouvert. La traduction de François Jullien est la plus analytiquement rigoureuse pour un lecteur occidental." },
        ],
        limite: "L'invitation au wu wei peut être mal comprise comme une justification de l'inaction ou de l'acceptation de toute situation. La pensée de Lao Tseu est subtile — elle vise l'action sans résistance inutile, non l'absence d'action. La distinction est cruciale.",
      },
      {
        nom: 'Confucius',
        dates: '~551 – 479 av. J.-C.',
        imageSlug: 'confucius.jpg',
        apport: "L'ordre dans la relation comme fondement du monde humain",
        these: "La société repose sur la qualité des relations — non sur les lois, les institutions ou le pouvoir. Confucius pose cinq relations fondamentales (prince/sujet, père/fils, mari/femme, aîné/cadet, ami/ami) dont la rectitude produit l'ordre social. Le ren (bienveillance, humanité) est la vertu centrale — sans elle, tous les rituels sont vides.",
        methode: "Les Entretiens (Analectes) sont des fragments de conversations — brefs, souvent sans contexte. La méthode confucéenne est pragmatique : la philosophie se teste dans la relation concrète, dans le comportement quotidien, dans la rectification constante de soi (ce que Confucius appelle 'rectifier les noms').",
        textesCles: [
          { titre: 'Les Entretiens (Lunyu)', pourquoi: "Le texte fondateur du confucianisme. Discontinu, parfois elliptique — mais chaque fragment est dense. À lire avec un commentaire, de préférence celui de Roger Ames qui replace les concepts dans leur contexte philosophique complet." },
        ],
        limite: "Le modèle confucéen des cinq relations est hiérarchique et tend à naturaliser des déséquilibres de pouvoir (mari/femme notamment). La forme contemporaine du confucianisme doit être distinguée de ses applications historiques souvent conservatrices.",
      },
      {
        nom: 'Sun Tzu',
        dates: '~544 – 496 av. J.-C.',
        imageSlug: 'sun-tzu.jpg',
        apport: 'La stratégie comme harmonie avec le flux invisible',
        these: "Vaincre sans combattre est la forme supérieure de la stratégie — non parce que la force est faible, mais parce qu'elle signifie avoir compris le flux de la situation assez précisément pour que l'issue soit déjà décidée avant l'engagement. La victoire appartient à celui qui connaît le terrain, qui connaît l'ennemi, qui se connaît lui-même — et qui agit depuis cette connaissance plutôt que depuis ses désirs.",
        methode: "L'Art de la guerre est un traité d'observation et de positionnement, non d'action directe. La méthode de Sun Tzu : créer les conditions de la victoire avant le combat. L'information, la surprise, l'adaptabilité et la connaissance de soi sont les instruments — la force brute est le dernier recours du stratège médiocre.",
        textesCles: [
          { titre: "L'Art de la guerre (Bingfa)", slug: 'art-de-la-guerre', pourquoi: "13 chapitres, chacun sur un aspect du positionnement stratégique. À lire lentement, en cherchant l'invariant derrière l'exemple militaire. La traduction de Jean Lévi est la plus rigoureuse en français." },
        ],
        limite: "L'application directe de Sun Tzu aux contextes non militaires (business, politique) produit souvent une lecture superficielle — les aphorismes sont extraits de leur contexte de pensée et transformés en slogans. La profondeur du texte exige une lecture patiente et une transposition prudente.",
      },
    ],
    role: "Le Tao comme loi structurelle du monde. Confucius comme ordre dans la relation. Sun Tzu comme stratégie dans l'harmonie avec ce qui coule.",
    analyse: "La tradition de pensée est-asiatique classique aborde le réel d'une façon structurellement différente de la philosophie grecque. Là où Platon cherche les Formes immuables et Aristote les catégories stables, Lao Tseu part du flux comme donné premier. Ce n'est pas une pensée moins rigoureuse — c'est une rigueur différente, qui prend au sérieux le changement, la contextualité et l'interdépendance là où la philosophie occidentale cherche l'invariant et le substantiel. François Jullien a montré que ce contraste n'est pas une opposition — c'est un écart productif qui permet à chaque tradition d'identifier ce que l'autre ne peut pas voir depuis sa propre position.",
    periode: 'VIe s. av. J.-C.',
    dimension: 'I',
    territoires: ['Les Lois', 'Les Cycles'],
    surface: false,
  },
  {
    slug: 'rupture-comme-clarte',
    lignee: 'La Rupture comme clarté',
    orientation: 'Rupture & Transformation',
    presences: [
      {
        nom: 'Voltaire',
        dates: '1694 – 1778',
        imageSlug: 'voltaire.jpg',
        apport: 'La dissolution des fausses autorités par la précision du regard',
        these: "Les autorités intellectuelles et religieuses maintiennent leur pouvoir en obscurcissant — en rendant certaines questions impensables. La première tâche du philosophe est de rendre ces questions pensables : nommer l'obscurantisme, le rendre visible, montrer ce qu'il cache. L'ironie voltairienne n'est pas un ornement stylistique — c'est un instrument de destruction de l'autorité illégitime.",
        methode: "Voltaire combine plusieurs modes : le conte philosophique (Candide, Zadig) pour l'attaque oblique, le traité (Traité sur la tolérance) pour l'attaque directe, le dictionnaire (Dictionnaire philosophique) pour la fragmentation critique. Sa méthode est celle du regard qui refuse l'évidence — chaque institution, chaque croyance est soumise à la question 'mais pourquoi, au juste ?'",
        textesCles: [
          { titre: "Candide ou l'Optimisme", pourquoi: "La critique la plus durable du providentialisme et de l'optimisme métaphysique. Chaque chapitre est une réfutation par l'expérience de la thèse que 'tout est pour le mieux dans le meilleur des mondes possibles'. La fin — 'il faut cultiver notre jardin' — est souvent mal comprise : c'est un appel à l'action concrète et limitée, non à la résignation." },
          { titre: 'Traité sur la tolérance', pourquoi: "Écrit après l'affaire Calas, ce traité pose les fondements philosophiques de la tolérance religieuse. Premier grand texte des droits de l'homme dans leur dimension pratique et politique." },
        ],
        limite: "Voltaire est meilleur destructeur que constructeur. Sa critique des religions est parfois plus rhétorique que rigoureuse, et son propre déisme est peu développé philosophiquement. Il ouvre des espaces — d'autres les habitent.",
      },
      {
        nom: 'Nietzsche',
        dates: '1844 – 1900',
        imageSlug: 'nietzsche.jpg',
        apport: "La nomination de ce que personne n'osait encore nommer",
        these: "Les valeurs morales dominantes ne sont pas universelles — elles sont le produit d'une histoire, d'un rapport de forces, d'un ressentiment codifié. La morale chrétienne et ses héritiers laïques (utilitarisme, égalitarisme) représentent un retournement des valeurs de la vie au profit des valeurs du déclin. La tâche du philosophe est la transvaluation (Umwertung) — non la destruction des valeurs, mais la remise en question de leur fondement.",
        methode: "Nietzsche écrit en aphorismes, en essais, parfois en prose poétique. Cette discontinuité est délibérée : il refuse les systèmes clos parce qu'ils figent ce qui doit rester ouvert. Sa méthode est la généalogie (Genealogie der Moral) — tracer l'origine historique et psychologique des valeurs pour en révéler la contingence.",
        textesCles: [
          { titre: 'La Généalogie de la morale', slug: 'genealogie-morale', pourquoi: "Le texte le plus rigoureux de Nietzsche. Trois essais sur l'origine du bien/mal, de la faute/mauvaise conscience, et de l'idéal ascétique. La distinction 'bon/mauvais' (noble) vs 'bien/mal' (morale du ressentiment) est l'une des analyses les plus pénétrantes de l'histoire de la philosophie morale." },
          { titre: 'Par-delà bien et mal', slug: 'par-dela-bien-et-mal', pourquoi: "Critique systématique de la philosophie et de la morale. L'introduction de la 'volonté de puissance' et du 'perspectivisme' (toute connaissance est perspective, non vérité absolue) — ses deux contributions épistémologiques majeures." },
        ],
        limite: "Nietzsche a été récupéré par le nazisme — récupération qu'il n'aurait pas autorisée (il était explicitement anti-nationaliste et anti-antisémite). Mais certaines formulations de sa pensée (surhomme, volonté de puissance) ont une instabilité qui les rend susceptibles d'usages qu'il n'anticipait pas. Sa lecture exige une vigilance permanente sur le contexte.",
      },
      {
        nom: 'Darwin',
        dates: '1809 – 1882',
        imageSlug: 'darwin.jpg',
        apport: "L'évolution sans finalité — le réel transformé sans téléologie",
        these: "Les espèces ne se transforment pas vers un but — elles se transforment sous l'effet de la sélection naturelle, mécanisme aveugle qui favorise les variations adaptées à l'environnement présent. Cette thèse est philosophiquement révolutionnaire : elle supprime la finalité de la nature. Il n'y a pas de direction, pas de progrès, pas d'objectif — seulement la contingence et l'adaptation.",
        methode: "Darwin a accumulé des données pendant 20 ans avant de publier. Sa méthode est inductive à l'extrême : des milliers d'observations particulières avant une thèse générale. L'argument de L'Origine des espèces est une démonstration cumulative — chaque chapitre répond à une objection potentielle.",
        textesCles: [
          { titre: "De l'origine des espèces (On the Origin of Species)", slug: 'origine-especes', pourquoi: "L'un des livres les plus importants de l'histoire intellectuelle. À lire directement, pas seulement des résumés — la force de l'argument est dans sa progression rigoureuse, pas dans la thèse seule." },
          { titre: "La Descente de l'homme (The Descent of Man)", pourquoi: "Applique la sélection naturelle à l'espèce humaine — tabou à l'époque. La sélection sexuelle comme mécanisme complémentaire de la sélection naturelle est développée ici pour la première fois." },
        ],
        limite: "Le darwinisme social — l'application des mécanismes évolutifs aux sociétés humaines pour justifier les inégalités — est une erreur de lecture fondamentale que Darwin lui-même n'a jamais cautionnée. La confusion entre description (l'évolution fonctionne ainsi) et prescription (les sociétés devraient fonctionner ainsi) est une faute logique.",
      },
    ],
    role: "La remise en question des fondements comme acte de vision. Voltaire dissout les fausses autorités. Nietzsche nomme ce que personne n'osait nommer. Darwin montre que le réel évolue sans téléologie.",
    analyse: "Ces trois figures partagent un geste commun : elles rendent pensable ce qui était impensable dans leur contexte. Voltaire rend pensable la critique de la religion dans un contexte de censure. Nietzsche rend pensable la critique de la morale dans un contexte de consensus victorien. Darwin rend pensable l'évolution sans Dieu dans un contexte de création divine supposée. Ce geste — rendre pensable ce qui ne l'était pas — est l'une des formes les plus rares et les plus coûteuses de l'intelligence. Chacun a payé un prix personnel pour l'exercer.",
    periode: 'XVIIIe – XIXe siècle',
    dimension: 'III',
    territoires: ['Les Cycles'],
    surface: false,
  },
  {
    slug: 'signal-dans-le-bruit',
    lignee: 'Le Signal dans le bruit',
    orientation: 'Signal & Noise',
    presences: [
      {
        nom: 'Chomsky',
        dates: '1928 –',
        imageSlug: 'chomsky.jpg',
        apport: 'Le pouvoir lu dans le langage et la fabrication du consentement',
        these: "Dans les démocraties, le contrôle n'est pas exercé par la force — il est exercé par la fabrication du consentement. Les médias de masse, dans un système de marché, convergent vers des intérêts qui structurent ce qui est pensable et ce qui ne l'est pas — non par complot, mais par des mécanismes systémiques que le modèle 'propagande' permet de cartographier.",
        methode: "Chomsky applique à l'analyse des médias la même rigueur qu'à la linguistique : il part des faits (articles, décisions éditoriales, couvertures comparées) pour en dégager les structures. Son approche est empirique, non conspirationniste — il s'intéresse aux contraintes institutionnelles qui produisent les biais sans qu'aucun acteur n'ait à les vouloir consciemment.",
        textesCles: [
          { titre: "La Fabrication du consentement (Manufacturing Consent)", slug: 'fabrication-consentement', pourquoi: "Avec Edward Herman. Le modèle de propagande en 5 filtres (propriété, publicité, sources, contre-feu, idéologie) est l'outil analytique le plus puissant pour comprendre les biais structurels des médias. À appliquer à n'importe quel système médiatique." },
          { titre: 'Comprendre le pouvoir (Understanding Power)', pourquoi: "Compilation de conférences — la forme la plus accessible à l'analyse politique de Chomsky. La richesse des exemples concrets permet de saisir la méthode par l'application." },
        ],
        limite: "Le modèle de Chomsky est puissant mais tend à sous-estimer la complexité et les contradictions internes des médias. Sa vision systémique peut obscurcir les espaces réels d'autonomie et de résistance qui existent dans tout système médiatique.",
      },
      {
        nom: 'Taleb',
        dates: '1960 –',
        imageSlug: 'taleb.jpg',
        apport: "L'antifragile et le cygne noir — ce que l'incertitude enseigne",
        these: "Les événements extrêmes (cygnes noirs) sont la règle, non l'exception — et les systèmes qui prétendent les modéliser sont dangereux parce qu'ils donnent une fausse confiance. La réponse n'est pas de mieux prédire l'imprévisible — c'est de construire des systèmes qui bénéficient du désordre (antifragiles) plutôt que de le subir.",
        methode: "Taleb combine l'analyse statistique rigoureuse (les queues de distribution ne suivent pas une loi normale) avec une épistémologie pratique : comment agir sous incertitude radicale ? Sa méthode est la distinction des domaines (Mediocristan vs Extrémistan) pour calibrer l'importance des événements rares selon le contexte.",
        textesCles: [
          { titre: 'Le Cygne Noir (The Black Swan)', slug: 'le-cygne-noir', pourquoi: "L'argument central : nous sous-estimons systématiquement l'impact des événements rares et imprévisibles, et nos modèles de risque nous rendent plus vulnérables en nous donnant une fausse confiance. La distinction Médiocristan/Extrémistan est un outil de lecture du réel." },
          { titre: 'Antifragile', slug: 'antifragile', pourquoi: "Au-delà du cygne noir : comment construire quelque chose qui gagne à être exposé à la volatilité et au désordre. Le concept d'antifragilité dépasse la robustesse — il désigne ce qui s'améliore sous le stress." },
          { titre: 'Skin in the Game', slug: 'skin-in-the-game', pourquoi: "La règle opérationnelle qui prolonge Le Cygne Noir : le jugement fiable est celui qui engage son auteur. Ce qui est dit sans coût pour celui qui parle est, par construction, du bruit. Taleb pose ici le filtre le plus simple pour distinguer les signaux des discours qui n'ont pas été payés." },
        ],
        limite: "Taleb peut être répétitif et son style parfois arrogant nuit à la réception de ses thèses. Sa critique des experts est légitime — mais la conclusion implicite (l'expertise est généralement inutile) est une simplification excessive.",
      },
      {
        nom: 'Kahneman',
        dates: '1934 – 2024',
        imageSlug: 'kahneman.jpg',
        apport: 'Les biais structurels du jugement comme lecture du réel',
        these: "La pensée humaine n'est pas un processus rationnel qui fait parfois des erreurs — c'est un système double (Système 1 rapide/intuitif et Système 2 lent/analytique) dont les erreurs sont structurelles, prévisibles et reproductibles. Les biais cognitifs ne sont pas des défauts individuels à corriger : ce sont des caractéristiques du système de jugement humain.",
        methode: "La méthode de Kahneman est expérimentale : des expériences contrôlées qui révèlent les écarts entre jugement réel et raisonnement normatif. Chaque biais est documenté par des études reproductibles. Son approche avec Tversky a fondé l'économie comportementale en montrant que les modèles de l'homo economicus rationnel ne correspondent pas au comportement humain réel.",
        textesCles: [
          { titre: 'Système 1 / Système 2 : Les deux vitesses de la pensée (Thinking, Fast and Slow)', slug: 'systeme-1-systeme-2', pourquoi: "La synthèse la plus accessible de 40 ans de recherche sur le jugement et la prise de décision. Indispensable pour comprendre les erreurs systématiques du raisonnement humain. À lire comme un manuel de vigilance cognitive, non comme une promesse de correction." },
        ],
        limite: "La crise de réplication en psychologie a touché certaines études citées par Kahneman. La robustesse de certains effets (notamment le priming) a été remise en question. Kahneman lui-même a reconnu certaines de ces limitations. Le cadre général reste solide — les effets spécifiques exigent plus de prudence.",
      },
    ],
    role: "L'abondance d'information comme nouvelle forme d'obscurcissement. Chomsky lit le pouvoir dans le langage. Taleb nomme l'antifragile. Kahneman révèle les biais structurels du jugement.",
    analyse: "Ces trois figures opèrent dans un contexte radicalement nouveau : l'abondance d'information a remplacé la rareté comme problème principal de la connaissance. Ce n'est plus 'comment trouver l'information ?' mais 'comment distinguer le signal du bruit dans un environnement saturé ?' Chomsky montre que les structures de pouvoir façonnent ce qui est perçu comme information vs bruit. Taleb montre que les événements qui changent vraiment le monde sont précisément ceux que nos modèles classifient comme improbables. Kahneman montre que nos instruments de filtrage cognitif sont systématiquement biaisés. Ensemble, ils construisent une épistémologie de la méfiance — non le scepticisme nihiliste, mais la vigilance méthodique.",
    periode: 'XXe – XXIe siècle',
    dimension: 'II',
    territoires: ['Les Fondements', 'Les Lois'],
    surface: false,
  },
]
