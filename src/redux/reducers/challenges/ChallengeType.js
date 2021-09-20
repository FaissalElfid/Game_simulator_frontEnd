import {
  GET_CHALLENGES_TYPE_STATE_FAILED,
  GET_CHALLENGES_TYPE_STATE_LOADING,
  GET_CHALLENGES_TYPE_STATE_SUCCESS,
  ADD_CHALLENGE_TYPE_SUCCESS,
  ADD_CHALLENGE_TYPE_LOADING,
  ADD_CHALLENGE_TYPE_FAILED,
} from "../../constants/challenges/ChallengeType";

const initialState = {
  loading: false,
  challengeTypes: [],
  challengesTypeAdded: "",
  error: "",
};

const challengesTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHALLENGES_TYPE_STATE_LOADING:
      return { ...state, loading: true, challengeTypes: [] };
    case GET_CHALLENGES_TYPE_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        challengeTypes: [].concat(action.payload),
        error: "",
      };
    case GET_CHALLENGES_TYPE_STATE_FAILED:
      return {
        ...state,
        challengeTypes: [],
        loading: false,
        error: action.payload.message,
      };
    case ADD_CHALLENGE_TYPE_SUCCESS:
      return {
        ...state,
        challengesTypeAdded: action.payload,
        loading: false,
        error: "",
      };
    case ADD_CHALLENGE_TYPE_LOADING:
      return { ...state, loading: true };
    case ADD_CHALLENGE_TYPE_FAILED:
      return {
        ...state,
        challengesTypeAdded: "",
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};
export default challengesTypeReducer;
