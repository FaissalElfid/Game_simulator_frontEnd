import { TEST_FOLLOW_SUCCESS , TEST_FOLLOW_LOADING , TEST_FOLLOW_FAILED } from '../../constants/testFollow';


const initialState = {
    loading: false,
    list : [],
    error : ''
}

export const testFollowReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case TEST_FOLLOW_SUCCESS:
            return { ...state , loading: false , list: action.payload }
        case TEST_FOLLOW_LOADING:
            return { ...state , loading: true , list: [] }
        case TEST_FOLLOW_FAILED:
            return { ...state , loading: false , list:[], error : action.payload }
        default:
            return state;
    }
}

