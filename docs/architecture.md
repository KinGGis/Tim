# Architecture multi-agent Tim

## Rôles & responsabilité
| Rôle | Mission | Livrables obligatoires | Critères “Done” | Artéfacts de transition |
| --- | --- | --- | --- | --- |
| **PO (Proxy métier)** | Cadrer le besoin, prioriser, arbitrer | Vision produit, backlog priorisé, user stories INVEST, critères d’acceptance | Story claire, valeur explicite, priorisation justifiée, acceptance criteria testables | Issue GitHub (story) + template backlog + contexte prompt stocké dans `stories/` |
| **BA (Documentation & QA)** | Transformer la vision en specs/testables | Spec fonctionnelle détaillée, spec technique, matrice de tests, plan de recette, hypothèses | Pas d’ambiguïté, mapping exigences→tests, cas d’erreur listés, scenarios de recette | Docs Markdown dans `docs/stories/<story>.md`, plan de tests + checklist dans `playbooks/ba.md` |
| **Dev (Implémentation)** | Générer code/tests, respecter specs | Code versionné, tests unitaires/intégration, PR documentée, notes techniques | Conformité specs BA, tests passants, pas de dérive fonctionnelle, PR prête pour review | Branch/PR GitHub, artefact tests (résultats ou rapports), commentaires liés dans issue |

## Gouvernance & transitions
- Aucune implémentation sans specs BA validées.
- Aucun changement sans validation PO.
- Toute ambiguïté arrête le pipeline (automation doit signaler). 
- Une story passe de PO → BA → Dev lorsque le livrable “Done” est signé (checklist dans `playbooks/`), et un état JSON (`stories/<id>.json`) indique la phase courante.

## Orchestration technique
1. L’orchestrateur (`scripts/orchestrator.js`) lit un état `stories/<id>.json` (contexte, KPI, phase, validateurs) et déclenche séquentiellement les prompts fournis dans `prompts/`. Il remonte automatiquement la phase (`po` → `ba` → `dev` → `validation`).
2. Les GitHub Actions de `automation/` vérifient que les artefacts obligatoires sont présents, exécutent des scripts de test (`scripts/`), puis mettent à jour l’état de la story (ex : `status: dev→validation`).
3. Le suivi post-release (monitoring/feedback) est documenté dans `docs/feedback.md` avec les métriques clés (lead time, rework, qualité specs, taux d’auto).

### Exécution locale / CLI
- Commande : `npm run orchestrate -- --story=kpi-portal --roles=po,ba,dev`
- Le script charge `stories/kpi-portal.json`, génère les prompts pour chaque rôle en injectant ctx/KPI/tests, les affiche et note la progression dans le JSON.
- On peut ensuite extraire `stories/kpi-portal.json` modifié pour mesurer la transition de phase et alimenter les playbooks.
