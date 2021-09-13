import {
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_LOADING,
  REGISTER_REQUEST_FAILED,
  REGISTERED_FALSE
} from "../../constants/register";

const initialState = {
  loading: false,
  registered: true,
  error: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST_SUCCESS:
      return { ...state, registered: true, loading: false, error: "" };
    case REGISTER_REQUEST_LOADING:
      return { ...state, registered: false, loading: true };
    case REGISTERED_FALSE:
      return { ...state, registered: false, loading: false };
    case REGISTER_REQUEST_FAILED:
      return {
        ...state,
        registered: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default registerReducer;