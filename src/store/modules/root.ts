import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { authenticateEpic } from '@Src/auth/epic/authenticateEpic';

import { authenticateReducer } from '../../auth/state/authenticateReducer';
import { homeReducer } from '../../home/state/homeReducer';

export const rootEpic = combineEpics(
    // epics
    authenticateEpic,
);

export const rootReducer = combineReducers({
    homeReducer,
    authenticateReducer,
});
