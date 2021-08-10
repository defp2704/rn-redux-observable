import {
    ActionType,
    createReducer,
} from 'typesafe-actions';

import {
    AuthenticateErrorAction,
    AuthenticateState,
    AuthenticateSuccessAction,
} from '../interfaces';
import * as authenticateActions from './authenticateActions';

type ActionsType = ActionType<typeof authenticateActions>;

export const initialState: AuthenticateState = {
    isLoading: false,
    isLogged: false,
    token: '',
};

export const authenticateReducer = createReducer<AuthenticateState, ActionsType>(
    initialState,
).handleAction(authenticateActions.authenticateAction, () => ({
    ...initialState,
    isLoading: true,
})).handleAction(authenticateActions.authenticateSuccess, (state: AuthenticateState, { payload }: AuthenticateSuccessAction) => ({
    ...state,
    isLoading: false,
    isLogged: payload.success,
    token: payload.token,
})).handleAction(authenticateActions.authenticateError, (state: AuthenticateState, { payload }: AuthenticateErrorAction) => ({
    ...state,
    isLoading: false,
    isLogged: payload.success,
    token: '',
}));
