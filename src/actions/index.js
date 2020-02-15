// @flow

import {createActions, action} from 'typed-actions';

export const TEST_ACTION = 'game/TEST_ACTION';

let actions;

export const {
    [TEST_ACTION]: testAction,
} = (actions = createActions({
    [TEST_ACTION]: (payload: string) => action(payload),
}));

export type Actions = typeof actions;
