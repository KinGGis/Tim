# Transition guide multi-agent

Pour chaque story, on suit cette séquence contrôlée :

1. **PO → BA**
   - Trigger : issue GitHub (story) créée + contexte rempli (objectifs, KPIs, contraintes) dans `stories/<id>.json`.
   - Check PO : story satisfaisante ? critères invest ? priorisation claire ?
   - Artefact remis : template backlog + critères d’acceptance + note de cadrage (contexte métier, sécurité, contraintes fintech).

2. **BA → Dev**
   - Trigger : spec fonctionnelle + matrice de test validées.
   - Check BA : pas d’ambiguïté, mapping exigences/tests, hypothèses explicitées, cas d’erreur documentés.
   - Artefact remis : doc Markdown (`docs/stories/<id>.md`) + prompts Copilot contextualisés (issue + spec + tests).

3. **Dev → Validation / Feedback**
   - Trigger : code + tests finalisés, PR ouverte.
   - Check Dev : tests passants, PR documentée, notes techniques alignées sur spec BA.
   - Artefact remis : PR + rapport tests + récit technique dans issue.

4. **Boucle de feedback**
   - Après merge, BA/PO valident la recette avec les métriques (lead time, rework). Toute anomalie crée une nouvelle task backlog.
   - Monitoring : `docs/feedback.md` récapitule les statuts des KPIs et décisions pour la story suivante.
