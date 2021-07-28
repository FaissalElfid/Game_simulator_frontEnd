import { TEST_REQUEST_SUCCESS , TEST_REQUEST_LOADING , TEST_REQUEST_FAILED } from '../../constants/test1';


const initialState = {
    loading: false,
    list : [],
    error : ''
}

export const test1Reducer = ( state = initialState , action ) => {

    switch (action.type) {
        case TEST_REQUEST_SUCCESS:
            return { ...state , loading: false , list: action.payload }
        case TEST_REQUEST_LOADING:
            return { ...state , loading: true , list: [] }
        case TEST_REQUEST_FAILED:
            return { ...state , loading: false , list:[], error : action.payload }
        default:
            return state;
    }
}

