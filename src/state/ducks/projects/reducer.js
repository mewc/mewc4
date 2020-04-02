import * as actions from './actions';
import { handleActions } from 'redux-actions';

export const initState = {
    projects: [
        /*
        shortname, link, description
        */
    ]
}

const {
    projectCallStart, projectCallEnd,

} = actions;



export default handleActions({
    [projectCallStart]: (state, action) => {
        let l = state.loading;
        l[action.type.split("/")[0]] = true;
        return { ...state, loading: l }
    },
    [projectCallEnd]: (state, action) => { //end loading actions
        if (!action.payload) return { ...state } //if fail, will return false from operations
        return { ...state, projects: action.payload } //only data we get is project array
    }
}, initState)