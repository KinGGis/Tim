# Automation

## Pipelines prévus
- `qa-and-pr`: GitHub Action pour lancer la suite de tests générée par Copilot et valider les artefacts.
- `monitoring`: action pour collecter métriques post-release et remonter dans un rapport.

Les workflows s'appuient sur `playbooks/` et `scripts/orchestrator` pour construire les inputs.
