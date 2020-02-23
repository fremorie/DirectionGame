// @flow

import {createActions, action} from 'typed-actions';

export const TEST_ACTION = 'game/TEST_ACTION';
export const PROCESS_ANSWER = 'game/PROCESS_ANSWER';

let actions;

export const {
    [TEST_ACTION]: testAction,
    [PROCESS_ANSWER]: processAnswer,
} = (actions = createActions({
    [TEST_ACTION]: (payload: string) => action(payload),
    [PROCESS_ANSWER]: (payload: string) => action(payload),
}));

export type Actions = typeof actions;
