# /note-book

Carnet de bord du sanctuaire LUMEN. Capture les décisions doctrinales, les idées de corpus, les observations sur le visiteur, les chantiers en cours.

## Contexte permanent

Ce carnet sert le sanctuaire LUMEN — un espace de perception, de sagesse et de stratégie dont la mission est d'élever l'humain.
Formule-source : **Voir juste. Nommer net. Structurer profond. Transmettre haut.**

Toute note est lue dans ce cadre. Une idée de contenu est évaluée contre les 7 critères de jugement LUMEN. Une décision est tracée pour ne pas être refaite deux fois.

## Fichier de stockage

`c:\index\lumen\.claude\notes\lumen-notebook.md`

Format :
```markdown
# Carnet LUMEN

## Décisions doctrinales
- [date] Décision

## Idées de corpus
- [date] Idée (chambre cible si connue)

## Observations visiteur
- [date] Observation sur l'expérience ou la conversion

## Chantiers en attente
- [date] Description du chantier

## Fragments bruts
- [date] Formulation brute à travailler
```

## Commandes

- `/note-book` — affiche tout le carnet
- `/note-book decision [texte]` — enregistre une décision
- `/note-book idea [texte]` — capture une idée de corpus
- `/note-book visitor [texte]` — observation sur l'expérience visiteur
- `/note-book fragment [texte]` — formulation brute à potentiellement intégrer au corpus
- `/note-book todo [texte]` — chantier à traiter plus tard

## Comportement

1. Crée le dossier/fichier si absent
2. Effectue l'opération
3. Si c'est une idée ou un fragment : évalue brièvement sa cohérence avec la doctrine LUMEN avant de l'enregistrer
4. Confirme en une ligne

$ARGUMENTS