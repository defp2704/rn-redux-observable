import { ofType } from 'redux-observable';
import {
    from,
    Observable,
    of,
} from 'rxjs';
import {
    catchError,
    delay,
    map,
    mergeMap,
} from 'rxjs/operators';

import { Error } from '@Src/interfaces/BaseResponse';

import { authenticate } from '../api/authenticateApi';
import { AuthenticateRequestAction } from '../interfaces';
import {
    authenticateError,
    authenticateSuccess,
} from '../state/authenticateActions';
import AuthenticateActionsTypes from '../state/authenticateActionTypes';

export const authenticateEpic = (action$: Observable<any>) => action$.pipe(
    ofType(AuthenticateActionsTypes.AUTHENTICATE_REQUEST),
    delay(1000),
    mergeMap(({ payload }: AuthenticateRequestAction) => from(authenticate({
        email: payload.email,
        password: payload.password,
    })).pipe(
        map((response: any) => authenticateSuccess(response)),
        catchError((error: Error) => of(authenticateError(error))),
    )),
);
