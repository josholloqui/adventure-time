import quest from '../data/data.js';
import { findById, renderQuest } from './render.quest';

const main = document.querySelector('main');

// placeholder for query param
const params = new URLSearchParams(window.location.search);
const paramsId = params.get('id');

const findQuest = findById(quest, paramsId);

const section = renderQuest(findQuest);

main.append(section);