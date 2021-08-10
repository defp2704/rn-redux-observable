export interface Response {
    success: boolean;
    message: string;
};

export interface Error extends Response {
    code: string | number;
};
