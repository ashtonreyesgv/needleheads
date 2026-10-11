// school gear. these three schools and their items come from the shop's old online store
// (needleheadsnyc.net). prices are left off on purpose since that store dates back to 2019

export const schools = [
    {
        id: 'ps82',
        name: 'P.S. 82',
        nickname: 'Lions',
        items: [
            { image: 'schools/ps82-tee', name: 'Cotton tee' },
            { image: 'schools/ps82-hoodie', name: 'Pullover hoodie' },
            { image: 'schools/ps82-full-zip', name: 'Full zip hoodie' },
            { image: 'schools/ps82-polo', name: 'Staff polo' }
        ]
    },
    {
        id: 'ms217',
        name: 'M.S. 217',
        nickname: 'Robert A. Van Wyck',
        items: [
            { image: 'schools/ms217-crewneck', name: 'Crewneck sweatshirt' },
            { image: 'schools/ms217-polo', name: 'Polo' },
            { image: 'schools/ms217-patch', name: 'Embroidered patch' }
        ]
    },
    {
        id: 'is93',
        name: 'I.S. 93',
        nickname: 'Ridgewood',
        items: [
            { image: 'schools/is93-crewneck', name: 'Crewneck sweater' },
            { image: 'schools/is93-polo-royal', name: 'Grade polo' },
            { image: 'schools/is93-long-sleeve', name: 'Long sleeve tee' },
            { image: 'schools/is93-beanie-royal', name: 'Beanie' }
        ]
    }
];

export const teamReasons = [
    {
        title: 'Any age, any sport',
        body: 'Baseball, soccer, hockey, kickball. If it has a roster, we can outfit it.'
    },
    {
        title: 'Names and numbers',
        body: 'Every jersey can carry its own name and number, plus your sponsor on the front.'
    },
    {
        title: 'The whole kit',
        body: 'Jerseys, warm-ups, hats, bags, and a banner for the fence when you win it all.'
    }
];
