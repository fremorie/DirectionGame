// @flow

import {handleActions, type Handlers} from 'typed-actions/immer';

import {
    type Actions, TEST_ACTION,
} from '../actions';

import {PROCESS_ANSWER} from '../actions';

export default handleActions(
    ({
        [TEST_ACTION]: state => {
            state.smth = 'ololo';
        },
        [PROCESS_ANSWER]: (state, {payload}) => {
            state.scoreBoard = [...state.scoreBoard, payload];
        },
    }: Handlers<*, Actions>),
);
