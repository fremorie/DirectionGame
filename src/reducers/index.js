// @flow

import {handleActions, type Handlers} from 'typed-actions/immer';

import {
    type Actions, TEST_ACTION,
} from '../actions';

export default handleActions(
    ({
        [TEST_ACTION]: state => {
            state.smth = 'ololo';
        },
    }: Handlers<*, Actions>),
);
