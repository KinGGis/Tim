#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const roleFiles = {
  po: '../prompts/po.md',
  ba: '../prompts/ba.md',
  dev: '../prompts/dev.md'
};

const phaseOrder = ['po', 'ba', 'dev'];
const storyFolder = path.join(__dirname, '../stories');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { story: 'kpi-portal', roles: phaseOrder };
  args.forEach(arg => {
    if (arg.startsWith('--story=')) {
      options.story = arg.split('=')[1];
    } else if (arg.startsWith('--roles=')) {
      options.roles = arg.split('=')[1].split(',').filter(r => phaseOrder.includes(r));
    }
  });
  return options;
}

function loadStory(id) {
  const file = path.join(storyFolder, `${id}.json`);
  if (!fs.existsSync(file)) {
    throw new Error(`Story file not found: ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function saveStory(story) {
  const file = path.join(storyFolder, `${story.id}.json`);
  fs.writeFileSync(file, JSON.stringify(story, null, 2));
}

function buildPrompt(role, story) {
  const template = fs.readFileSync(path.join(__dirname, roleFiles[role]), 'utf-8');
  const payload = {
    context: story.context,
    kpis: story.kpis.join(', '),
    constraints: story.constraints.join('; '),
    objective: story.objective,
    risks: story.dependencies.join(', '),
    story: {
      title: story.title,
      slug: story.id
    },
    acceptance_criteria: story.acceptanceCriteria.join('; '),
    technical_constraints: story.constraints.join('; '),
    tech_stack: story.dependencies.join(', '),
    initial_tests: story.tests.join('; '),
    functional_spec_summary: story.objective,
    technical_spec_summary: story.technicalNotes,
    test_matrix: story.tests.join('; '),
    dependencies: story.dependencies.join(', '),
    code_constraints: story.constraints.join('; ')
  };

  return template.replace(/{{\s*([^}\s]+)\s*}}/g, (_, key) => {
    const segments = key.split('.');
    let value = payload;
    for (const segment of segments) {
      value = value && value[segment];
      if (value == null) {
        return `{{${key}}}`;
      }
    }
    return value;
  });
}

function runPhase(role, story) {
  const prompt = buildPrompt(role, story);
  console.log(`\n=== ${role.toUpperCase()} PHASE (${new Date().toISOString()}) ===`);
  console.log(`Targeting story: ${story.title} (${story.id})`);
  console.log('--- Prompt start ---');
  console.log(prompt);
  console.log('--- Prompt end ---');
  console.log(`Artifact note: artefact generated for ${role.toUpperCase()}.`);
}

function advancePhase(current) {
  const index = phaseOrder.indexOf(current);
  if (index === -1 || index === phaseOrder.length - 1) {
    return 'validation';
  }
  return phaseOrder[index + 1];
}

function main() {
  const { story: storyId, roles } = parseArgs();
  const story = loadStory(storyId);

  roles.forEach(role => {
    runPhase(role, story);
    if (story.phase === role) {
      story.phase = advancePhase(role);
    }
  });

  saveStory(story);
  console.log(`Story ${story.id} saved with phase "${story.phase}".`);
}

main();
