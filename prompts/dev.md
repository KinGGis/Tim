# Prompt Dev

## Objectif
Générer le code et les tests correspondant à la spec BA tout en produisant un PR documenté et prêt à merger.

## Structure du prompt
```
Story: {{story.title}}
Specs fonctionnelles: {{functional_spec_summary}}
Specs techniques: {{technical_spec_summary}}
Tests attendus: {{test_matrix}}
Stack: {{tech_stack}}
Dependencies: {{dependencies}}
Constraints: {{code_constraints}}

Tâches attendues:
1. Créer/mettre à jour le code (UI, backend, scripts) en respectant la spec.
2. Générer les tests unitaires et/ou d’intégration associés (cas happy path + cas limites).
3. Documenter les étapes dans un README/PR summary.
4. Préparer le commit (message lié à la story) et la PR (template).  
5. Lister les résultats des tests + métriques (temps d’exécution, coverage).
```

## Champs dynamiques
- `{{functional_spec_summary}}`: résumé des user flows (input/output).  
- `{{technical_spec_summary}}`: services/API impliqués.  
- `{{test_matrix}}`: tests clés (happy path, erreurs, scenarios compliance).  
- `{{tech_stack}}`: frameworks prévus.  
- `{{dependencies}}`: APIs, datasources, microservices.  
- `{{code_constraints}}`: rythme, normes (lint, formatting) et limites (pas de stockage sens data locale).  

## Exemple de sortie attendue
```
1. Création d’un composant React `DashboardKPI` avec hooks Supabase.
2. Worker Python export CSV avec tests Pytest.
3. Tests automatiques: filtre temps réel, contrôle permissions, validation données.
4. PR summary: "feat: add KPI exports" + checklist tests.
```

Fin du prompt : "Fournis les fichiers modifiés, les tests exécutés (commande + résultat) et une section `Next steps (PO/BA)` indiquant ce que tu veux faire valider."