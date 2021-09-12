import { 
    SET_CURRENT_URL, 
    UPDATE_URL_STATE,
} from '../../constants/shared';

const initialState = {
    url : '/',
    urlState : {},
}

const sharedReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case SET_CURRENT_URL:
            return { ...state , url: action.payload };
        case UPDATE_URL_STATE : 
            return {
                ...state,
                urlState : {
                    ...state.urlState,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}
export default sharedReducer;