import { 
    SET_CURRENT_URL, 
    UPDATE_URL_STATE,
} from '../../constants/shared';

const initialState = {
    url : '/',
    loading: false,
    urlState : {},
}

const sharedReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case SET_CURRENT_URL:
            return { ...state , url: action.payload, loading: false };
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