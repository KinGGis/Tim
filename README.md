# Tim: Multi-Agent AI Orchestrator

Ce repo contient la base pour un système multi-agent (PO/BA/Dev) orchestré via des scripts et des templates Copilot. Objectif : automatiser la conception, la documentation et la production de features tout en gardant un point de contrôle humain.

## Structure

- `playbooks/` : checklist, prompts et templates pour chaque rôle.
- `scripts/` : orchestrateur Node + helpers (prompt builder, status tracker).
- `prompts/` : prompts de référence (PO, BA, Dev) et exemples d'histoires.
- `docs/` : architecture, pipeline et guides d'intégration (GitHub Actions, Copilot CLI).
- `automation/` : définitions de workflows (GitHub Actions, CI, surveillance).
- `src/` : outils d'interfaçage (si besoin, ex. API wrappers).

## Prochaines étapes

1. Compléter `playbooks/` avec templates de briefing, specs et tickets.
2. Remplir `prompts/` pour chaque rôle en lien avec les stories initiales.
3. Implémenter un script `scripts/orchestrator.js` qui enchaîne PO → BA → Dev.
4. Ajouter une pipeline GitHub Actions dans `automation/` pour valider, tester, et monitorer.
