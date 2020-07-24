import quest from '../data/data.js';
import { findById, renderQuest } from './render.quest.js';

const main = document.querySelector('main');
const onwardButton = document.querySelector('#onward');

// placeholder for query param
const params = new URLSearchParams(window.location.search);
const paramsId = params.get('id');

const findQuest = findById(quest, paramsId);

const section = renderQuest(findQuest);

onwardButton.addEventListener('click', () => {
    window.location = '/map';
});

main.append(section);