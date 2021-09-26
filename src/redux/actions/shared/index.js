import { 
    SET_CURRENT_URL, 
    UPDATE_URL_STATE,
    SET_CURRENT_CHALLENGE,
} from '../../constants/shared';

export const setCurrentUrl = ( url ) => dispatch => dispatch({ type : SET_CURRENT_URL , payload : url  });
export const setCurrentChallenge = ( challenge ) => dispatch => dispatch({ type : SET_CURRENT_CHALLENGE , payload : challenge  });
export const updateUrlState = state => dispatch => dispatch({ type: UPDATE_URL_STATE , payload : {...state} })
