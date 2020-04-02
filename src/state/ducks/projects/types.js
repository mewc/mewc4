import { SCOPES } from '../../../assets/strings/constants';
import { ACTION_STATE } from '../../../assets/strings/constants';

const TYPE_PROJECT = 'PROJECT_CALL';

const PROJECT_START = `${SCOPES.APAPIP}/${TYPE_PROJECT}_${ACTION_STATE.START}`;
const PROJECT_END = `${SCOPES.API}/${TYPE_PROJECT}_${ACTION_STATE.END}`;

export default {
    PROJECT_START,
    PROJECT_END
}