# Prompt PO

## Objectif
Transformer un besoin brut en backlog priorisé et prompt contextualisé pour les phases suivantes.

## Structure du prompt
```
Contexte: {{context}}
KPIs ciblés: {{kpis}}
Contraintes: {{constraints}}
Objectif de la story: {{objective}}
Dépendances/risques: {{risks}}

Tâches attendues:
1. Reformuler la valeur métier (qui bénéficie de quoi?).
2. Prioriser l'effort (coût/valeur) et assigner un niveau d'urgence.
3. Générer les user stories INVEST associées (titre + description + critères). 
4. Rédiger les critères d'acceptance (happy path + cas limites).
5. Lister les questions ouvertes pour la BA.
6. Fournir les instructions spécifiques pour le prompt BA (format Markdown, sections).
```

## Champs dynamiques
- `{{context}}`: description rapide du projet (dashboard analytique, API, outil interne).  
- `{{kpis}}`: lead time story, rework ratio, qualité specs ciblée.  
- `{{constraints}}`: réglementation, stack techno, données sensibles.  
- `{{objective}}`: valeur client / métier pour cette story.  
- `{{risks}}`: dépendances, blocages potentiels, cas réglementaires.

## Exemple
```
Contexte: portail KPI temps réel pour clients internes.
KPIs: lead time -40%, qualité specs >90%.
Contraintes: RGPD, pas de données de paiement stockées.
Objectif: permettre à la direction finance de piloter l'engagement client.
Dépendances: API Supabase, dashboards React.
```

Fin du prompt : "Crée une issue GitHub avec ces éléments, marque-la `ready-for-ba` et fournis le JSON de story pour la suite."