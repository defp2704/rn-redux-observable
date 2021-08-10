import { createAction } from 'typesafe-actions';

import { Error } from '@Src/interfaces/BaseResponse';

import {
    AuthenticateRequest,
    AuthenticateResponse,
} from '../interfaces';
import AuthenticateActionsTypes from './authenticateActionTypes';

export const authenticateAction = createAction(
    AuthenticateActionsTypes.AUTHENTICATE_REQUEST,
    (request: AuthenticateRequest) => (request)
)();

export const authenticateSuccess = createAction(
    AuthenticateActionsTypes.AUTHENTICATE_SUCCESS,
    (response: AuthenticateResponse) => (response)
)();

export const authenticateError = createAction(
    AuthenticateActionsTypes.AUTHENTICATE_ERROR,
    (error: Error) => (error)
)();
