# Architecture multi-agent Tim

## Rôles
- **Orchestrateur (humain)** : supervise, valide, reprend les livrables. Contrôle les scripts.
- **Sous-agents** : PO/BA/Dev. Chaque agent est un prompt/template Copilot (CLI ou loops).

## Orchestration
1. Scripts `scripts/orchestrator.js` déclenchent chaque phase en séquence.
2. GitHub Actions dans `automation/` : vérifient existence specs/test, lancent tests Copilot.
3. Monitoring : BA/PO surveillent feedback + metrics.
