import quest from '../data/data.js';
import { findById, renderQuest } from './render.quest';

const main = document.querySelector('main');

// placeholder for query param
const questName = 'monsters';

const findQuest = findById(quest, questName);

const section = renderQuest(findQuest);

main.append(section);