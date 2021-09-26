import { 
    SET_CURRENT_URL, 
    UPDATE_URL_STATE,
    SET_CURRENT_CHALLENGE
} from '../../constants/shared';

const initialState = {
    url : '/',
    loading: false,
    urlState : {},
    challenge: {}
}

const sharedReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case SET_CURRENT_URL:
            return { ...state , url: action.payload, loading: false };
        case SET_CURRENT_CHALLENGE:
            return { ...state , challenge: action.payload, loading: false };
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