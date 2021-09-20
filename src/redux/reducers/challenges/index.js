import {
    GET_CHALLENGES_STATE_FAILED,
    GET_CHALLENGES_STATE_LOADING,
    GET_CHALLENGES_STATE_SUCCESS,
    ADD_CHALLENGE_SUCCESS,
  ADD_CHALLENGE_LOADING,
  ADD_CHALLENGE_FAILED,
  } from "../../constants/challenges";

const initialState = {
    loading: false,
    challenges : [],
    challengeAdded: '',
    error: '',
}

const challengesReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case GET_CHALLENGES_STATE_LOADING:
        return { ...state, loading: true, challenges: [] };
        case GET_CHALLENGES_STATE_SUCCESS:
        return {
            ...state,
            loading: false,
            challenges: [].concat(action.payload),
            error: "",
        };
        case ADD_CHALLENGE_SUCCESS:
      return {
        ...state,
        challengeAdded: action.payload,
        loading: false,
        error: "",
      };
    case ADD_CHALLENGE_LOADING:
      return { ...state, loading: true };
    case ADD_CHALLENGE_FAILED:
      return {
        ...state,
        challengeAdded: "",
        loading: false,
        error: action.payload,
      };
        
        case GET_CHALLENGES_STATE_FAILED:
        return {
            ...state,
            challenges: [],
            loading: false,
            error: action.payload.message,
        };
            default:
                return state;
        }
}
export default challengesReducer;