import {
    GET_USERS_STATE_FAILED,
    GET_USERS_STATE_LOADING,
    GET_USERS_STATE_SUCCESS,
  } from "../../constants/getUsers";

const initialState = {
    loading: false,
    users : [],
    error: '',
}

const usersReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case GET_USERS_STATE_LOADING:
        return { ...state, loading: true, users: [] };
        case GET_USERS_STATE_SUCCESS:
        return {
            ...state,
            loading: false,
            users: [].concat(action.payload),
            error: "",
        };
        
        case GET_USERS_STATE_FAILED:
        return {
            ...state,
            users: {},
            loading: false,
            error: action.payload.message,
        };
            default:
                return state;
        }
}
export default usersReducer;