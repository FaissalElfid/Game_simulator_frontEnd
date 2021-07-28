import { TEST_UNFOLLOW_SUCCESS , TEST_UNFOLLOW_LOADING , TEST_UNFOLLOW_FAILED } from '../../constants/testUnfollow';


const initialState = {
    loading: false,
    list : [],
    error : ''
}

export const testUnfollowReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case TEST_UNFOLLOW_SUCCESS:
            return { ...state , loading: false , list: action.payload }
        case TEST_UNFOLLOW_LOADING:
            return { ...state , loading: true , list: [] }
        case TEST_UNFOLLOW_FAILED:
            return { ...state , loading: false , list:[], error : action.payload }
        default:
            return state;
    }
}

