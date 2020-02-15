// @flow

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const DIRECTION = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: '',
};

export const generateFormation = ({nRows, maxItemsPerRow}) => {
    const formation = [];

    const generalDirectionIndex = getRandomInt(4);
    const generalDirection = DIRECTION[Object.keys(DIRECTION)[generalDirectionIndex]];

    const availableDirections = Object.keys(DIRECTION).filter(direction => direction !== generalDirection);
    const targetDirectionIndex = getRandomInt(availableDirections.length - 1);

    const targetDirection = DIRECTION[availableDirections[targetDirectionIndex]];

    const centralRow = Math.floor(nRows / 2);
    console.log({centralRow, targetDirection});

    for (let i = 0; i < nRows; i++) {
        const itemsInRow = Math.floor(getRandomInt(maxItemsPerRow) / 2) * 2 + 1;
        const row = new Array(itemsInRow).fill(generalDirection);

        if (i === centralRow) {
            const centralItemIndex = Math.floor(itemsInRow / 2);
            console.log({centralItemIndex, centralRow});
            row.splice(centralItemIndex, 1, targetDirection);
        }

        formation.push(row);
    }

    return formation;
};
