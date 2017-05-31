const user = {
    name: 'Steen G. Sargent',
    location: 'Vineyard',
    occupations: ['student', 'coder?', 'unemployed'],
    hobbies: [{
            name: 'soccer',
            type: 'sport'
        },
        {
            name: 'hiking',
            type: 'outdoors'
        },
        {
            name: 'motorcycle',
            type: 'extreme'
        }
    ],
    family: [{
            name: 'Erika',
            relation: 'spouse',
            gender: 'female'
        },
        {
            name: 'Bjorn',
            relation: 'dog',
            gender: 'male'
        }, {
            name: 'Darcie',
            relation: 'dog',
            gender: 'female'
        }
    ],
    restaurants: [{
            name: 'Tucanos',
            type: 'Brazilian',
            rating: '1'
        },
        {
            name: 'In-n-Out',
            type: 'American',
            rating: '3'
        },
        {
            name: 'Chipotle',
            type: 'Mexican',
            rating: '2'
        }
    ]
};
module.exports = user;