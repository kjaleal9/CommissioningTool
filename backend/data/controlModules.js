const controlModules = [
    {
        name: 'V20500',
        area: 'Cream',
        deviceType: 'Valve',
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',
    },
    {
        name: 'AG20501',
        area: 'Separator',
        deviceType: 'Motor',
        status: {
            completed: true,
        },
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',
    },
    {
        name: 'ZS20502',
        area: 'Batching',
        deviceType: 'Digital Input',
        status: {
            electrical: true,
        },
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',
    },
    {
        name: 'V20500',
        area: 'Cream',
        deviceType: 'Valve',
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',

        tickets: [
            {
                name: 'V20500',
                priority: 'High',
                issueType: 'Mechanical',
                text: 'This valve needs to be replaced',
                isResolved: false,
            },
        ],
    },
    {
        name: 'AG20501',
        area: 'Separator',
        deviceType: 'Motor',
        status: {
            completed: true,
        },
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',
        tickets: [
            {
                name: 'AG20501',
                priority: 'Medium',
                issueType: 'Electrical',
                text: 'This motor needs a new VFD',
                isResolved: false,
            },
        ],
    },
    {
        name: 'ZS20502',
        area: 'Batching',
        deviceType: 'Digital Input',
        status: {
            electrical: true,
        },
        comment:
            'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.',
    },
];

export default controlModules;
