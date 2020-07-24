const monsters = {
    id: 'monsters',
    title: 'The Ooozers in the Bad Lands',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/OozeMosters.png',
    description: `
        While traversing the Bad Lands, you encounter what you thought was a wicked dance party, but you realize that it is not a party but a MOB OF OOZERS feasting on the BEAT! 
    `,
    choices: [{
        id: 'negotiate',
        description: 'Try and Take the Brief Case',
        result: `
            The Oozers take notice immediately. Now you have done it, they are furious everything they hold near and dear is in that brief case! They mob  you and since you were unprepared to fight you get bitten and become a Ooozer your self for the rest of your life! 
        `,
        img: '../assets/original.jpg',
        hp: -35,
        gold: 0
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You launch yourself at the Ooozers using your sword, and little do you know hwo truly outnumbered you are. You begin regret the decision, but you persevere! You end up heavily damaged with some gold for your troubles. Oh by the way it's okay to cry about your boo boos. Awhhhhh...
        `,
        img: '../assets/afterfight.jpeg',
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: `Pretend like you didn't see them...`,
        result: `
            The Oozer were too busy dancing that they didn't mind that you ran away. As you're running away you realize you've been running for hours and you don't realize how tired you are. 
        `,
        img: '../assets/finnrun.gif',
        hp: -10,
        gold: 0
    }, {
        id: 'dance',
        description: `Try and Join the Dance Party`,
        result: `
            As you join the dance party the Oozers take notice of your surprisingly good dance moves. They create a dance circle around you, and.. you.. IMPRESS them so much that they can't help, but throw gold at you!
        `,
        img: '../assets/jake-dance.gif',
        hp: 0,
        gold: 100
    }]
};

const dragon = {
    id: 'dragon',
    title: 'The Mysterious Snow Golem',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/snowgolem.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        While traveling to the Ice Kingdom you see from afar a Snow Golem that appears to be carrying a Fire Wolf pup on a stick. You're super curious on what going on, but will you do something about that curiosity?
    `,
    choices: [{
        id: 'run',
        description: `Try and ask the Snow Golem what's going on?`,
        result: `
            You try to communicate with the Snow Golem, but you realize that there's a language barrier. You keep trying to talk to them, and they frantically try to communicate with you. The Snow Golem gets angry and throws a snow ball at you, and leaves. 
        `,
        img: '../assets/snowball.png',
        hp: -5,
        gold: 0
    }, {
        id: 'fight',
        description: 'Offer to take the Fire Wolf pup off their hands',
        result: `
            You successfully attempt to extend the offer of taking the Fire Wolf off their hands. The Snow Golem is so alighted that he hands you a snowball. In your confusion you realize as the snow ball melts it reveals an amount of gold.
        `,
        img: '../assets/firepup.png',
        hp: 0,
        gold: 35
    }, {
        id: 'archer',
        description: 'Mind your own business and continue traveling to the Ice Kingdom',
        result: `
            You decide to just keep heading to the Ice Kingdom. On your way to the Ice Kingdom you being to wonder what the Snow Golem and the Fire Wolf pup are up to now. Well let me tell you... The Snow Golem kept trying to get rid of the pup, but the pup just kept coming back. The pup saw them as their parent. Eventually the Snow Golem broke down giving the pup the attention that the pup wanted. To the surprise to everyone who might here about this tale someday the Golem and pup became real close. They became family, and lived happily ever after. <3
        `,
        img: '../assets/firesnow.jpeg',
        hp: 0,
        gold: 0
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'http://www.placekitten.com/200/200',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];

export default quests;