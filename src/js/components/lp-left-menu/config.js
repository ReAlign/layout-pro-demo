const config = {};

config.GRID_BASE = [
    { title: '12', col: [12] },
    { title: '6-6', col: [6, 6] },
    { title: '444', col: [4, 4, 4] },
    { title: '3-3-3-3', col: [3, 3, 3, 3] }
];

config.getGrid = () => {
    config.GRID_BASE.forEach((item) => {
        item.value = item.col.join(' ');
        item.classCol = item.col.map((c) => `span${c} column`);
    });

    return config.GRID_BASE;
};

export default config;