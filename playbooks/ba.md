# Playbook BA Agent

## Mission
- Transformer la vision PO en documentation actionnable (fonctionnelle + technique).  
- Définir la couverture QA complète (cas positifs/négatifs, recettes).  
- Servir de jury de qualité pour l’implémentation Dev.

## En entrée
1. Story Issue validée par PO (contexte clair + KPIs).  
2. Backlog minimal priorisé.  
3. Données techniques disponibles (stack, API, architecture existante).  

## Livrables obligatoires
- Spec fonctionnelle détaillée (étapes, interactions, flux).  
- Spécifications techniques (APIs, datasources, services, composants UI).  
- Matrice de tests (happy path, erreurs, cas limites, scénarios réglementaires).  
- Plan de recette (manuelle + automatisée).  
- Checklist de review (mapping exigences → tests, hypothèses).  

## Checklist “Done BA”
- [ ] Document fonctionnel sans ambiguïté (coverage > 90%).  
- [ ] Mapping exigences → tests (tableau).  
- [ ] Cas d’erreur et règles métier explicités.  
- [ ] Hypothèses listées et tracées.  
- [ ] Prompt Dev généré (format Copilot).  
- [ ] Runbook QA pour validation post merge (scénarios + métriques).  

## Transition BA → Dev
- Livraison d’un doc Markdown `docs/stories/<story>.md` avec : contexte, spec fonctionnelle, spec technique, tests, métriques.  
- Génération d’un prompt Dev contextualisé (spécifications + tests + environnement).  
- Mise jour de l’état `stories/<id>.json` pour indiquer `phase: ready-for-dev`.

## Gouvernance
- BA ne commence que quand la story PO est complète (voir checklist PO).  
- Toute question doit être documentée avant envoi au Dev.  
- Le BA pilote les tests fonctionnels et note les anomalies dans GitHub Issues ou Docs.
