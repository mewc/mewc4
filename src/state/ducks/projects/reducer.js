import * as actions from './actions';
import { handleActions } from 'redux-actions';

export const initState = {
    items: [
        /*
        shortname, link, description
        */
    ]
}

const {
    projectCallEnd
} = actions;



export default handleActions({
    [projectCallEnd]: (state, action) => { //end loading actions
        console.debug(action);
        if (!action.payload) return { ...state } //if fail, will return false from operations
        return { ...state, items: action.payload } //only data we get is project array
    }
}, initState)