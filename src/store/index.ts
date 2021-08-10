import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
    rootEpic,
    rootReducer,
} from './modules/root';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
};

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(epicMiddleware)),
    );
    epicMiddleware.run(rootEpic);
    return store;
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
