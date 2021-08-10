import { createAction } from 'typesafe-actions';

import HomeActionsTypes from './homeActionTypes';

/**
 * (resolve) => (id: number) => resolve({ id: id + 1 }),
 */
export const homeGetAction = createAction(
    HomeActionsTypes.HOME_SUM_DATA,
    (newId: number) => ({ id: newId })
)();
