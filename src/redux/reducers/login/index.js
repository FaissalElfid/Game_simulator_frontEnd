import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_FAILED,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_LOADING,
  GET_USER_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_LOADING,
  LOGOUT_REQUEST_FAILED,
} from "../../constants/login";

const initialState = {
  loading: false,
  connected: true,
  user: {},
  error: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, connected: true, loading: false, error: "" };
    case LOGIN_REQUEST_LOADING:
      return { ...state, connected: false, loading: true };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        connected: false,
        loading: false,
        error: action.payload,
      };
    case GET_USER_REQUEST_SUCCESS:
      return { ...state, connected: true, user: action.payload, loading: false, error: "" };
    case GET_USER_REQUEST_LOADING:
      return { ...state, connected: true,  loading: true };
    case GET_USER_REQUEST_FAILED:
      return {
        ...state,
        connected: false,
        loading: false,
        // error: action.payload,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return { ...state, connected: false,user: null, loading: false, error: "" };
    case LOGOUT_REQUEST_LOADING:
      return { ...state, connected: true, loading: true };
    case LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        connected: true,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;