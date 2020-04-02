import {
    createAction
} from 'redux-actions';
import types from './types';

export const projectCallStart = createAction(types.PROJECT_START, () => true);
export const projectCallEnd = createAction(types.PROJECT_END, (data) => data);
