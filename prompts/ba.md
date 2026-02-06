# Prompt BA

## Objectif
À partir de l’issue story PO, construire une documentation fonctionnelle/technique prête pour que Dev génère du code fiable et testable.

## Structure du prompt
```
Story: {{story.title}}
Contexte: {{context}}
KPIs: {{kpis}}
Acceptance criteria: {{acceptance_criteria}}
Contraintes techniques: {{technical_constraints}}
Stack / APIs disponibles: {{tech_stack}}
Tests existants: {{initial_tests}}

Tâches attendues:
1. Produire une spec fonctionnelle détaillée (étapes, UI, flux, règles métier).
2. Résumer la spec technique (services, API, données, produits tiers).
3. Créer la matrice de tests (happy path, cas limites, scénarios réglementaires).
4. Générer un plan de recette (manuelle + automatisée).
5. Définir les hypothèses et les validations requises.
6. Générer un prompt Dev structuré (code/test/PR) en appendice.
```

## Champs dynamiques
- `{{story.title}}`: titre de la story GitHub.
- `{{acceptance_criteria}}`: liste PO des critères.
- `{{technical_constraints}}`: RGPD, KYC, stack imposée.
- `{{tech_stack}}`: React/Supabase/Firebase/Python/API mentionnés pour la story.
- `{{initial_tests}}`: tests déjà identifiés ou exigences QA.

## Exemple (résumé)
```
Story: Export KPI daily.
Context: API Supabase + React dashboard.
KPIs: rework <10%, qualité specs >90%.
Acceptance criteria: filtre temps réel, export CSV, permission admin.
Technical: accès limité aux données financières, oauth, logging.
Stack: Next.js + Supabase + Python worker.
```

Fin du prompt : "Génère la documentation dans `docs/stories/{{story.slug}}.md`, inclut une matrice tests et un prompt prêt pour Dev. Structure la réponse en sections clairement identifiées."