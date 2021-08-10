import { AuthenticateRequest } from '../interfaces';

/**
 * Use reject to send an error
 * 
 * @param {AuthenticateRequest}
 * @returns {Promise}
 */
export const authenticate = ({ email, password }: AuthenticateRequest) => new Promise((resolve) => {
    console.log('authenticateApi authenticate', { email, password });
    resolve({
        success: true,
        token: '123',
    });
});
