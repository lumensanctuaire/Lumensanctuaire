export interface FragmentFeu {
  slug: string
  incipit: string
  corps: string
  attribution?: string
  dimension: 'I' | 'II' | 'III'
  surface: boolean
}

export const fragmentsFeu: FragmentFeu[] = [
  {
    slug: 'ce-que-lumen-nest-pas',
    incipit: "Ce que LUMEN n'est pas.",
    corps:
      "LUMEN n'est pas un cours. Un cours a des modules, des badges, une progression balisée et une satisfaction à l'arrivée. LUMEN n'a pas de satisfaction à l'arrivée — parce qu'il n'y a pas d'arrivée. C'est une architecture ouverte vers une profondeur qui ne se ferme pas.\n\nLUMEN n'est pas du développement personnel. Le développement personnel part de soi et revient à soi. LUMEN part du réel — de ses lois, de ses structures, de ses figures — et y retourne toujours. Soi est un instrument dans cette traversée, non sa finalité.\n\nLUMEN n'est pas une communauté. Les communautés confortent. LUMEN exige. Ce qu'on trouve ici n'est pas l'accord des pairs — c'est la confrontation avec ce qu'on ne peut plus ignorer une fois qu'on l'a vu.\n\nCe que LUMEN est : un sanctuaire de la perception. L'endroit où ce qui était flou devient nommé, ce qui était épars devient ordonné, ce qui était compris devient transmissible.",
    dimension: 'I',
    surface: true,
  },
  {
    slug: 'imperatif-clarte',
    incipit: "La clarté n'est pas une option.",
    corps:
      "La clarté n'est pas une option. C'est la condition minimale de toute action qui ne se retourne pas contre celui qui l'entreprend.\n\nCe qui est fait dans la confusion coûte deux fois : une fois pour être fait, une autre pour être défait ou corrigé. Ce qui est décidé dans le flou coûte davantage encore : les ressources engagées sur un mauvais cadre ne sont pas récupérables.\n\nLa confusion est confortable parce qu'elle diffère la décision. Elle permet de rester dans le provisoire, d'éviter ce que la clarté rendrait inévitable. C'est une protection à court terme — à prix long terme.\n\nLa clarté exige le courage de voir ce qu'on aurait préféré laisser dans l'ombre. Ce n'est pas une vertu morale — c'est une compétence opérationnelle. Ceux qui la développent agissent mieux, décident mieux, transmettent mieux. Pas parce qu'ils sont meilleurs — parce qu'ils travaillent avec le réel tel qu'il est.",
    dimension: 'I',
    surface: false,
  },
  {
    slug: 'sur-le-rang',
    incipit: 'Le rang ne se déclare pas.',
    corps:
      "Le rang ne se déclare pas. Il se manifeste.\n\nCe qui a besoin de s'annoncer révèle par là même son insécurité. La puissance qui argumente sa puissance est déjà sur la défensive. L'autorité qui réclame le respect ne l'a pas — ou ne l'a plus.\n\nCela vaut pour les individus. Cela vaut pour les institutions. Cela vaut pour les œuvres. Un texte qui annonce dès l'ouverture sa propre profondeur n'est généralement pas profond. Un homme qui commence par se présenter en termes de titres et de positions occupe l'espace que son rang réel ne remplit pas encore.\n\nLe rang réel est silencieux non par humilité performative — mais parce qu'il n'a pas besoin de se justifier. La justification est le signe du doute. Ce qui est n'a pas besoin d'argumenter qu'il est.",
    dimension: 'II',
    surface: false,
  },
  {
    slug: 'doctrine-du-seuil',
    incipit: 'Le seuil sépare.',
    corps:
      "Le seuil sépare ceux qui consomment de ceux qui traversent.\n\nConsommer : prendre ce qui est offert, en faire usage immédiat, passer à la suite. Le consommateur d'idées ressemble au touriste qui photographie : il a été là, il peut le prouver, il n'y est pas resté.\n\nTraverser : s'exposer à ce qu'on rencontre jusqu'à ce que quelque chose change dans la façon dont on voit. Ce changement n'est pas mesurable en temps passé ni en contenus absorbés — il est mesurable dans la manière dont le réel apparaît après, comparée à la manière dont il apparaissait avant.\n\nLUMEN est construit pour ceux qui traversent. Non par élitisme — par honnêteté. Ce qui est ici ne peut pas être consommé. Il faut s'y exposer assez longtemps pour que le regard change. Il n'y a pas de raccourci vers ça.",
    dimension: 'III',
    surface: false,
  },
  {
    slug: 'sur-la-transmission-haute',
    incipit: 'Transmettre haut.',
    corps:
      "Transmettre haut. Ce n'est pas transmettre à beaucoup. Ce n'est pas transmettre simplement. C'est transmettre avec une précision suffisante pour que ce qui passe soit encore reconnaissable dans la tête et dans les actes de celui qui reçoit.\n\nLa transmission basse est le bavardage intellectuel : des idées qui circulent, qui se dégradent à chaque transmission, qui finissent par ne plus ressembler à rien de ce qu'elles étaient au départ. On reconnaît la transmission basse à ce qu'elle produit : des gens qui ont lu sans que leur regard ait changé.\n\nLa transmission haute est rare. Elle suppose une compression exacte, une forme résistante, un exemple incarné. Elle suppose aussi un récepteur prêt — non dans le sens passif d'être disponible, mais dans le sens actif d'avoir un problème réel auquel ce qu'il reçoit peut répondre.\n\nC'est la raison pour laquelle LUMEN n'est pas destiné à tous. Non par arrogance — par précision. Ce qui est ici est construit pour ceux qui ont déjà le problème. Pas ceux qui cherchent à en avoir un.",
    dimension: 'III',
    surface: false,
  },
  {
    slug: 'sur-le-temps',
    incipit: 'Le temps ne manque pas. Il se dilapide.',
    corps:
      "Le temps ne manque pas. Il se dilapide. Personne n'a jamais manqué de temps pour ce qu'il jugeait réellement important — il a manqué de temps pour ce qu'il accumulait sans choix, pour ce que la pression sociale lui imposait, pour les urgences que d'autres lui transmettaient comme si elles étaient les siennes. La pénurie de temps est rarement une donnée du réel. C'est presque toujours un symptôme de hiérarchie défaillante.\n\nIl faut distinguer l'homme occupé de l'homme qui tient son temps. L'homme occupé répond — aux sollicitations, aux urgences, aux attentes. Il peut remplir des journées entières sans produire un seul acte qui lui appartienne. Sa vie s'écoule en opérations qui pèsent autant que celles d'un homme souverain, mais qui ne laissent aucune trace dans l'architecture de ce qu'il construit. Il est actif, et pourtant rien n'est décidé par lui.\n\nL'homme qui tient son temps opère différemment. Il a nommé les fonctions qui méritent sa durée — et il a nommé, avec la même précision, celles qui n'y ont pas droit. Il refuse plus qu'il n'accepte. Il protège des heures qu'aucune urgence visible ne viendra combler. Il laisse paraître de la lenteur dans des moments où d'autres s'agitent. Ce n'est pas du luxe — c'est une discipline. Et cette discipline est la seule qui distingue, à terme, une vie construite d'une vie consommée.\n\nSénèque nomme cette faute la plus subtile du quotidien : la neglegentia temporis, la négligence du temps. Il ne parle pas de paresse — la paresse s'avoue, se voit, se corrige. Il parle de cette dilapidation qui porte le masque de l'activité, qui se croit productive parce qu'elle est remplie, qui ne remarque pas ce qu'elle a cédé parce qu'elle l'a cédé à petites doses. Le temps perdu ne se rend pas. Il ne s'ajoute même pas au total d'une vie — il s'en retranche.\n\nLa souveraineté sur son temps est le seul indicateur fiable du rang intérieur. On peut commander des hommes, diriger des organisations, accumuler des titres — et ne pas posséder une heure de sa propre journée. Ou l'inverse : n'avoir aucun pouvoir formel et tenir rigoureusement ce que l'on fait de chaque intervalle. Le second a un rang que le premier n'a jamais atteint. Parce que le rang réel commence là : savoir ce qui mérite qu'on lui donne son temps, et avoir le courage de refuser tout le reste.",
    dimension: 'II',
    surface: false,
  },
  {
    slug: 'sur-elevation',
    incipit: "L'élévation n'est pas un don. C'est un travail que peu acceptent de commencer.",
    corps:
      "L'élévation n'est pas un don. C'est un travail que peu acceptent de commencer. L'idée qu'il existe des êtres naturellement élevés — et qu'il suffirait de les imiter ou de les fréquenter — est l'une des fictions les plus confortables de la paresse intellectuelle. Elle dispense de faire. Ceux qui paraissent élevés ont payé un prix que ceux qui les admirent ne voient pas — parce qu'ils ne veulent pas voir ce qu'il aurait fallu céder pour produire ce qu'ils admirent.\n\nL'élévation est d'abord une décision. Non pas l'intention vague de s'améliorer — mais l'acte précis de choisir un exigence qui dépasse ce que le milieu demande. Le milieu récompense la conformité, l'adaptation, la production moyenne. L'élévation commence là où l'on cesse de produire pour le milieu et où l'on se met à produire contre ce qu'il attendrait — non par provocation, mais parce qu'on a trouvé un critère intérieur plus exigeant que le critère extérieur disponible.\n\nCe critère a un coût. Il impose des lectures qui ne divertissent pas. Il impose des relations moins nombreuses mais plus rigoureuses. Il impose des silences là où d'autres parlent, des refus là où d'autres s'engagent, des lenteurs là où d'autres se précipitent. Ceux qui s'élèvent acceptent cette désynchronisation — ils comprennent que marcher à un autre rythme est la condition, non l'obstacle. Ils ne cherchent pas à être compris par ceux qui marchent autrement. Ils cherchent à ne pas trahir, par précipitation ou par besoin d'approbation, ce qu'ils ont commencé à apercevoir.\n\nLes Lois disent ce qui opère dans le réel. Les Figures montrent ce que d'autres en ont fait. Entre les deux, il y a un espace — et c'est dans cet espace que l'élévation se joue. Ni dans la connaissance seule (qui reste inerte), ni dans l'imitation seule (qui reste extérieure), mais dans la répétition patiente qui finit par installer, dans le comportement, ce que la lecture avait seulement rendu pensable. Épictète le formulait ainsi : ce qu'on n'a pas installé avant ne peut pas être improvisé sous pression. L'élévation est l'installation lente de ce qui, à terme, tient sans effort.\n\nLa plupart n'acceptent pas de commencer. Non par manque d'intelligence — par refus du prix. Ils préfèrent croire que l'élévation serait donnée, ou qu'elle serait impossible, plutôt que d'admettre qu'elle est disponible — mais qu'elle coûte ce qu'elle coûte. LUMEN est construit pour ceux qui ont déjà dépassé ce refus. Non pour les convaincre de commencer. Pour leur fournir la cartographie de ce qu'ils ont déjà décidé de traverser.",
    dimension: 'III',
    surface: false,
  },
  {
    slug: 'sur-la-decision',
    incipit: "Ce qu'on décide dit ce qu'on est. Ce qu'on ne décide pas dit ce qu'on préfère ignorer.",
    corps:
      "Ce qu'on décide dit ce qu'on est. Ce qu'on ne décide pas dit ce qu'on préfère ignorer. La décision n'est pas, comme on le présente souvent, la résolution d'un problème — c'est un acte de définition de soi. Au moment où l'on tranche, on hiérarchise, on nomme ce qui compte davantage, on accepte ce qu'il faudra perdre. L'ensemble de ces actes, accumulés dans le temps, constitue ce qu'une personne est devenue — non ce qu'elle croit être, non ce qu'elle déclare vouloir, mais ce que ses choix ont installé dans le réel.\n\nLe refus de décider n'est pas une absence de décision. C'est une décision masquée : celle de laisser le temps, les circonstances ou les autres choisir à sa place. Cette délégation a un coût précis. Elle préserve, à court terme, l'illusion de toutes les options encore ouvertes. Elle supprime, à long terme, la possibilité même de se définir. Ce qu'un homme refuse de décider, le réel le décide pour lui — avec moins de précision, moins d'alignement, et souvent plus de dégâts que ne l'aurait coûté une décision lucide assumée au bon moment.\n\nLes grandes décisions révèlent ce que l'intelligence seule ne peut pas révéler : la hiérarchie réelle des valeurs de celui qui décide. On peut énoncer n'importe quelles valeurs au calme — elles ne coûtent rien tant qu'elles ne sont pas confrontées à un choix qui oblige à en préférer une à une autre. La décision force cette confrontation. Elle met à nu ce que l'on accepte de perdre pour garder ce que l'on garde. Ce qu'un homme concède sous pression révèle, avec une précision que le discours ne peut jamais égaler, ce à quoi il tient et ce à quoi il feignait de tenir.\n\nIl y a une différence entre décider une fois et décider toujours. La première est un événement. La seconde est une discipline. Ceux qui se définissent réellement par leurs choix ne sont pas ceux qui ont tranché une fois grandement — ce sont ceux qui tranchent chaque jour petitement dans la même direction, jusqu'à ce que cette direction cesse d'être une option et devienne une structure. L'identité forte n'est pas un état initial : c'est le résidu d'une série de décisions cohérentes que le temps a fini par solidifier.\n\nLa question doctrinale n'est donc pas 'comment prendre de bonnes décisions ?' — elle est : qu'est-ce que mes décisions, prises ensemble, ont déjà dit de moi ? Et suis-je prêt à répondre de ce qu'elles disent ? La lucidité sur ses propres décisions passées est le seul fondement sur lequel peut s'appuyer une décision future qui ne soit pas l'énième dérobade déguisée en délibération. Ce qui n'a pas été regardé en arrière continue d'opérer en avant, à l'insu de celui qui décide et contre ce qu'il croit choisir.",
    dimension: 'II',
    surface: false,
  },
]
