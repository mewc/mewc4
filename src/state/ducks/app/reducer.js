import * as actions from './actions';
import * as pActions from '../projects/actions';
import { handleActions, combineActions } from 'redux-actions';

export const initState = {
    loading: {}
}

const {
    loadingStart, loadingEnd
} = actions;
const {
    projectCallStart, projectCallEnd,

} = pActions;


export default handleActions({
    [combineActions(loadingStart, projectCallStart)]: (state, action) => {
        let l = state.loading;
        l[action.type.split("/")[0]] = true;
        return { ...state, loading: l }
    },
    [combineActions(loadingEnd, projectCallEnd)]: (state, action) => { //end loading actions
        let l = state.loading;
        if (Object.keys(l).length > 1) {
            delete l[action.type.split("/")[0]];
        } else {
            l = {};
        }
        return { ...state, loading: l }
    }
}, initState)