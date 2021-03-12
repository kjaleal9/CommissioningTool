const controlModules = [
    {
        name: 'V20500',
        deviceType: 'Valve',
        area: 'Batching',
    },
    {
        name: 'AG20501',
        deviceType: 'Motor',
        area: 'Cream',
        status: {
            completed: true,
        },
    },
    {
        name: 'ZS20502',
        deviceType: 'Digital Input',
        area: 'Receiving',
        status: {
            electrical: true,
        },
    },
    {
        name: 'V20500',
        deviceType: 'Valve',
        area: 'Separation',
    },
    {
        name: 'AG20501',
        deviceType: 'Motor',
        area: 'Cream',
        status: {
            completed: true,
        },
    },
    {
        name: 'ZS20502',
        deviceType: 'Digital Input',
        area: 'Batching',
        status: {
            electrical: true,
        },
    },
];

export default controlModules;
