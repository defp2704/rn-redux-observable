import {
    ActionType,
    createReducer,
} from 'typesafe-actions';

import * as homeActions from './homeActions';

type ActionsType = ActionType<typeof homeActions>;

interface HomeState {
    id: number;
};

export const initialState = {
    id: 0,
};

export const homeReducer = createReducer<HomeState, ActionsType>(
    initialState,
).handleAction(homeActions.homeGetAction, (state, { payload }) => ({
    ...state,
    ...payload,
}));
