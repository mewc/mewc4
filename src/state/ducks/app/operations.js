import * as actions from './actions';

export const appLoading = (promise) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(actions.loadingStart());
            promise.then(r => {
                console.debug(r);
                dispatch(actions.loadingEnd());
            }).catch(err => {
                console.debug(err);
                dispatch(actions.loadingEnd())
            })
        }, 1000);
    }
}
