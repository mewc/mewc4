import * as actions from './actions';
import axios from 'axios';

export const getProjectData = () => {
    return dispatch => {
        dispatch(actions.projectCallStart());

        promise.then(r => {
            console.log(r);
            dispatch(actions.loadingEnd(r));
        }).catch(err => {
            console.log(err);
            dispatch(actions.loadingEnd(false))
        })
    }
}
