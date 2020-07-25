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
        hp: -50,
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
    title: 'Cosmic Reality of Possibilities',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../assets/prismo.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        While traversing the mountains you decide to take a rest. While you're sleeping you get visited by a Cosmic Owl in your dream. This snatches you and take you to the Cosmic Realm. In the Cosmic Realm you meet Prismo a very friendly wish master. He proceeds to tell you that you get one wish. This wish will send you to an alternate universe where to get to live this wish. What will you wish for?
    `,
    choices: [{
        id: 'wooden',
        description: 'Wish for riches',
        result: `You tell Prismo that you wish for riches, his reply 'Wow.. So original...' He proceeds to grant you your wish. You end up with massive amounts of wealth, but you know how they say money doesn't buy happiness, well this is the case here you come to realize that deep down your feeling down. Even though on the outside your facade shows that your dancing with joy, but really you regret it.`,
        img: '../assets/finngold.gif',
        hp: -10,
        gold: 1000000
    }, {
        id: 'golden',
        description: 'Wish for Finn cakes',
        result: `You tell Prismo that you wish for Finn cakes, his reply 'Wow. What are Finn cakes?' You tell him that they are the most delicious cakes in the entire universe. Prismo in shock and enjoyment grants your wish while also providing himself with copious amounts of these cakes. You go on to receive you freshly baked Finn cakes, and end up achieving maximum happiness`,
        img: '../assets/finncakes.jpeg',
        hp: 0,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'Wish for a Horse',
        result: `You tell Prismo that you wish for a horse, his reply 'Wow. Okay well here's a horse I guess?' He then grants your wish, but you notice immediately that something is off about this horse... OH NO! He ended up giving you a Poo Brain Horse! Well good luck with that...`,
        img: '../assets/poobrain.jpg',
        hp: -10,
        gold: 0
    }, {
        id: 'sandwich',
        description: 'Wish for a Sandwich...',
        result: `You tell Prismo that you wish for sandwich since you're really hungry right now, his reply 'Wow. You know you could wish for anything like truly anything you know? But alright here your sandwich I guess? You receive your sandwich while chowing down you realize that you could have wished for anything, and boom you realize your mistake...Luckily for you Prismo offers you some of his homemade pickles so it's no that bad.'`,
        img: '../assets/sandwich.jpeg',
        hp: 10,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];

export default quests;