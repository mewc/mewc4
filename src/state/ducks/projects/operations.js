import * as actions from './actions';
import axios from 'axios';

export const getProjectData = () => {
    console.debug('Get Project Data Start');
    return dispatch => {
        dispatch(actions.projectCallStart());
        axios.get(process.env.REACT_APP_PROJECTDATA_API_ENDPOINT)
            .then(r => {
                console.debug(r);
                dispatch(actions.projectCallEnd(r.data.Items));
            }).catch(err => {
                console.debug(err);
                dispatch(actions.projectCallEnd(false))
            })
    }
}
