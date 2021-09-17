import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_FAILED,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_LOADING,
  GET_USER_REQUEST_FAILED,
  UPDATE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_LOADING,
  UPDATE_USER_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_LOADING,
  LOGOUT_REQUEST_FAILED,
  UPLOAD_IMG_FAILED,
  UPLOAD_IMG_LOADING,
  UPLOAD_IMG_SUCCESS,
} from "../../constants/login";

const initialState = {
  loading: false,
  connected: false,
  user: null,
  isAdmin: false,
  loadingUpload: false,
  error: "",
  uploadSuccess: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        connected: true,
        loading: false,
        isAdmin: action.payload.isAdmin,
        error: "",
      };
    case LOGIN_REQUEST_LOADING:
      return { ...state, connected: false, loading: true };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        connected: false,
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_REQUEST_SUCCESS:
      return {
        ...state,
        connected: true,
        uploadSuccess: action.payload.message,
        loadingUpdate: false,
        error: "",
      };
    case UPDATE_USER_REQUEST_LOADING:
      return {
        ...state,
        connected: true,
        uploadSuccess: "",
        loadingUpdate: true,
      };
    case UPDATE_USER_REQUEST_FAILED:
      return {
        ...state,
        loadingUpdate: false,
        error: action.payload,
        uploadSuccess: "",
      };
    case UPLOAD_IMG_SUCCESS:
      return {
        ...state,
        loadingUpload: false,
        uploadSuccess: action.payload.message,
        error: "",
      };
    case UPLOAD_IMG_LOADING:
      return { ...state, loadingUpload: true, uploadSuccess: "" };
    case UPLOAD_IMG_FAILED:
      return {
        ...state,
        loadingUpload: false,
        uploadSuccess: "",
        error: action.payload,
      };
    case GET_USER_REQUEST_SUCCESS:
      return {
        ...state,
        connected: true,
        user: action.payload,
        isAdmin: action.payload.isAdmin,
        loading: false,
        error: "",
      };
    case GET_USER_REQUEST_LOADING:
      return { ...state, connected: true, loading: true };
    case GET_USER_REQUEST_FAILED:
      return {
        ...state,
        connected: false,
        loading: false,
        // error: action.payload,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        connected: false,
        user: null,
        loading: false,
        error: "",
      };
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
