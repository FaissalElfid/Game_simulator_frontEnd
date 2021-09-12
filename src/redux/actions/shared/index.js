import { 
    SET_CURRENT_URL, 
    UPDATE_URL_STATE,
} from '../../constants/shared';

export const setCurrentUrl = ( url ) => dispatch => dispatch({ type : SET_CURRENT_URL , payload : url  });
export const updateUrlState = state => dispatch => dispatch({ type: UPDATE_URL_STATE , payload : {...state} })
