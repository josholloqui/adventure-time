import quests from '../data/data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('GAME OVER');
    alert(`This is how much gold you accrued ${user.gold}`);
    window.location = '../';
}

let completedQuest = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuest++;
    }
}

if (completedQuest === quests.length) {
    alert(`Wow, you have completed your adventure! You ended up with this much gold ${user.gold}`);
}

const section = document.querySelector('section');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quests.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {
        const link = document.createElement('a');
        link.textContent = quest.title;
        link.href = '/quest/?id=' + quest.id;

        section.append(link);
    }
    
}

