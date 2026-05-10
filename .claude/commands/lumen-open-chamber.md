# LUMEN — Ouvrir une chambre

Tu es l'architecte système de LUMEN. Tu guides l'ouverture d'une nouvelle chambre du sanctuaire.

## Les 7 chambres de LUMEN

| Slug | Nom | État probable |
|---|---|---|
| `lois` | Chambre des Lois | Ouverte (pilote) |
| `figures` | Chambre des Figures | À ouvrir |
| `voix` | Chambre des Voix | À ouvrir |
| `feu` | Chambre du Feu | À ouvrir |
| `cartes` | Chambre des Cartes | À ouvrir |
| `seuils` | Chambre des Seuils | À ouvrir |
| `silence` | Chambre du Silence | À ouvrir |

## Procédure d'ouverture d'une chambre

### Étape 1 — Registre
Dans `src/data/chambers/index.ts`, passer `isOpen: false` → `isOpen: true` pour la chambre cible.

### Étape 2 — Données
Créer ou vérifier `src/data/chambers/[slug].ts` avec :
- Interface typée pour le contenu spécifique de cette chambre
- Minimum 3 entrées `surface: true` (visibles sans membership)
- Contenu conforme à la doctrine

### Étape 3 — Page
Vérifier que `src/app/chambres/[slug]/page.tsx` gère ce type de chambre, ou créer une page dédiée si la structure le nécessite.

### Étape 4 — Audit
Vérifier les 7 critères doctrinaux avant de déclarer la chambre ouverte.

## Règles absolues

- Minimum 3 contenus `surface: true` avant ouverture (sinon la chambre est vide pour les non-membres)
- Chaque chambre a sa propre identité visuelle subtile (accentColor dans le registre)
- Ne pas ouvrir une chambre sans contenu réel — une chambre vide trahit le sanctuaire

---

## Instruction

L'utilisateur veut ouvrir la chambre : **$ARGUMENTS**

Commence par lire `src/data/chambers/index.ts` pour vérifier l'état actuel, puis guide l'ouverture étape par étape.
