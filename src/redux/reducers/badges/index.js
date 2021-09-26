import {
    GET_BADGES_STATE_FAILED,
    GET_BADGES_STATE_LOADING,
    GET_BADGES_STATE_SUCCESS,
    ADD_BADGE_SUCCESS,
  ADD_BADGE_LOADING,
  ADD_BADGE_FAILED,
  DELETE_BADGE_SUCCESS,
  DELETE_BADGE_LOADING,
  DELETE_BADGE_FAILED,
  } from "../../constants/badges";

const initialState = {
    loading: false,
    badges : {},
    badgeAdded: '',
    badgeDeleted: '',
    error: '',
}

const badgesReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case GET_BADGES_STATE_LOADING:
        return { ...state, loading: true, badges: {} };
        case GET_BADGES_STATE_SUCCESS:
        return {
            ...state,
            loading: false,
            badges: action.payload,
            error: "",
        };
        case ADD_BADGE_SUCCESS:
      return {
        ...state,
        badgeAdded: action.payload,
        loading: false,
        error: "",
      };
    case ADD_BADGE_LOADING:
      return { ...state, loading: true };
    case ADD_BADGE_FAILED:
      return {
        ...state,
        badgeAdded: "",
        loading: false,
        error: action.payload,
      };
      case DELETE_BADGE_SUCCESS:
        return {
          ...state,
          badgeDeleted: action.payload,
          loading: false,
          error: "",
        };
      case DELETE_BADGE_LOADING:
        return { ...state, loading: true };
      case DELETE_BADGE_FAILED:
        return {
          ...state,
          badgeDeleted: "",
          loading: false,
          error: action.payload,
        };
        case GET_BADGES_STATE_FAILED:
        return {
            ...state,
            badges: {},
            loading: false,
            error: action.payload.message,
        };
            default:
                return state;
        }
}
export default badgesReducer;