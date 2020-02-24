// @flow

import type {InitialState} from '../types';

export const INITIAL_STATE: InitialState = {
    level: 0,
    scoreBoard: [],
};

export const ARROWS = {
    '40': 'DOWN',
    '39': 'RIGHT',
    '38': 'UP',
    '37': 'LEFT',
};

export const BUBBLES_COUNT = 10;

export const ALGEAS_COUNT = 5;

export const FORMATIONS_PER_LEVEL = 10;
