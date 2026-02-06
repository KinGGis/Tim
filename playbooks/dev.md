# Playbook Dev Agent

## Mission
- Implémenter la fonction à la lettre, en s’appuyant sur la spec BA et les prompts générés.  
- Produire du code maintenable, testé, documenté et prêt à merge.

## En entrée
1. Doc `docs/stories/<story>.md` (spec fonctionnelle + technique + tests).  
2. Prompt Dev contextualisé (issue + tests).  
3. Environnement : stack identifiée (React/Supabase/Firebase/Python/APIs).  

## Livrables obligatoires
- Code (branch dédiée).  
- Tests unitaires et/ou d’intégration couvrant les cas définis.  
- Pull Request (template PR + checklist).  
- Notes techniques (README ou commentaire).  

## Checklist “Done Dev”
- [ ] Code conforme à la spec BA (contrats, flux, UI).  
- [ ] Tests automatisés passants et ajoutés au CI.  
- [ ] PR documentée, liée à l’issue + checklist QA.  
- [ ] Résultats de tests archivés (logs, artifacts).  
- [ ] Résumé des actions dans l’issue + update story JSON (`phase: validation`).

## Transition Dev → Validation
- PR ouverte + tests dans GitHub Actions.  
- Template PR inclut : résumé, tests effectués, étapes Copilot, capture d’écran éventuelle, métriques (temps, regressions).  
- Déclenchement d’une revue croisée PO/BA (checklist).  

## Gouvernance
- Dev ne merge qu’après validation BA (recette) et PO (valeur).  
- Toute anomalie post merge doit générer une issue `bug/` et être priorisée.  
- Le Dev note les hypothèses et choix techniques (notamment pour la stack imposée).  
