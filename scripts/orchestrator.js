#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const roleFiles = {
  po: '../prompts/po.md',
  ba: '../prompts/ba.md',
  dev: '../prompts/dev.md'
};

function loadPrompt(role) {
  const file = path.join(__dirname, roleFiles[role]);
  return fs.readFileSync(file, 'utf-8');
}

function runPhase(role, context) {
  const prompt = loadPrompt(role);
  console.log(`=== ${role.toUpperCase()} PHASE ===`);
  console.log('Prompt :', prompt.slice(0, 200).replace(/\n/g, ' '));
  console.log('Context', context);
  // TODO: connecter à Copilot CLI / API
}

const storyContext = {
  title: 'Tableau de bord KPI interne',
  kpis: ['engagement', 'sat client'],
  needs: 'Portail type dashboard pour suivre les indicateurs clés',
};

['po', 'ba', 'dev'].forEach(role => runPhase(role, storyContext));
