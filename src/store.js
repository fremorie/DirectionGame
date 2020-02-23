import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {INITIAL_STATE} from './constants';

export default function configureStore(initialState=INITIAL_STATE) {
    return createStore(
        reducers,
        initialState,
        // applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}
