# Playbook PO Agent

## Mission
- Servir de proxy métier pour le projet Tim.
- Recueillir, cadrer et prioriser les besoins clients.
- Valider la valeur et déclencher la chaîne BA → Dev.

## En entrée
1. Brief client (téléchargement, message, réunion).  
2. Contexte produit (dashboard analytique, API, outil interne).  
3. KPIs ciblés (Lead time, Rework ratio, Qualité specs, Taux d’automatisation).  
4. Contraintes réglementaires/financières (RGPD, KYC, données sensibles).  

## Livrables obligatoires
- Vision produit + impacting KPIs.  
- Backlog priorisé (GitHub Issues: epic > story > task).  
- Stories INVEST (titre clair, description, valeur métier, estimation).  
- Critères d’acceptance testables (happy path + cas limites).  
- Notes de triage sur les contraintes (sécurité DATA, performances, stack imposée).  

## Checklist “Done PO”
- [ ] Story compréhensible sans briefing oral.  
- [ ] Valeur métier explicite et KPI associé.  
- [ ] Priorité justifiée (coût/valeur).  
- [ ] Acceptance criteria complets (happy path + erreurs).  
- [ ] Roadmap minimale (quel milestone + dépendances).  
- [ ] Prompts PO enregistrés dans `prompts/po.md` + contexte JSON stocké (`stories/<id>.json`).

## Transition PO → BA
- Template d’issue avec sections : contexte, objectif, KPIs, risques/contraintes, critères d’acceptance.  
- Pièce jointe : fichier de contexte `stories/<id>.json` contenant les données métier, les KPIs et les dépendances.  
- Notification : tag @BA + lien vers backlog + timeline.  

## Gouvernance
- Pas de story validée sans backlog priorisé.  
- Toute incertitude bloque l’envoi au BA (noter les questions à clarifier).  
- PO arrête le backlog quand la valeur est alignée sur O1–O3.
