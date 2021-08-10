import {
    Error,
    Response,
} from '@Src/interfaces/BaseResponse';

export interface AuthenticateRequest {
    email: string;
    password: string;
};

export interface AuthenticateResponse extends Response {
    token: string;
};

export interface AuthenticateState {
    isLoading: boolean;
    isLogged: boolean;
    token: string;
};

export interface AuthenticateRequestAction {
    payload: AuthenticateRequest;
};

export interface AuthenticateSuccessAction {
    payload: AuthenticateResponse;
};

export interface AuthenticateErrorAction {
    payload: Error;
};
