import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_FAILED,
  GET_USER_REQUEST_LOADING,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAILED,
  LOGOUT_REQUEST_LOADING,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,
  UPDATE_USER_REQUEST_LOADING,
  UPDATE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAILED,
  UPLOAD_IMG_FAILED,
  UPLOAD_IMG_SUCCESS,
  UPLOAD_IMG_LOADING
} from "../../constants/login";
import axios from "axios";
import { API_URL } from "../../../config/source";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST_LOADING });
  await axios
    .post(
      `${API_URL}/user/login`,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_REQUEST_FAILED,
        payload: error.response.data.message,
      });
    });
};
export const updateUser = (data, id) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST_LOADING });
  await axios
    .patch(
      `${API_URL}/user/${id}`,
      {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        description: data.description,
        phoneNumber: data.phoneNumber,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch({ type: UPDATE_USER_REQUEST_SUCCESS, payload: response.data }); // here i should update the state of the user 
      getUser()
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_USER_REQUEST_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const uploadImage = (data, id) => async (dispatch) => {
  console.log(data)
  dispatch({ type: UPLOAD_IMG_LOADING });
  
  await axios
    .post(`${API_URL}/user/upload`, data, {
      withCredentials: true,
    })
    .then((response) => {
      dispatch({ type: UPLOAD_IMG_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: UPLOAD_IMG_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const updatePassword = (password, id) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST_LOADING });
  
  await axios
    .post(`${API_URL}/user/update-password`, {password: password, id: id}, {
      withCredentials: true,
    })
    .then((response) => {
      dispatch({ type: UPDATE_USER_REQUEST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_USER_REQUEST_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST_LOADING });
  await axios
    .post(`${API_URL}/user/logout`, null, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({ type: LOGOUT_REQUEST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: LOGOUT_REQUEST_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST_LOADING });
  await axios
    .get(`${API_URL}/user/cookie`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then( (response) => {
      response.data.profileImage = `${API_URL}/user/profile-image/${response.data.profileImage}`;
      dispatch({ type: GET_USER_REQUEST_SUCCESS, payload: response.data }); 
    })
    .catch((error) => {
      logout()
      dispatch({
        type: GET_USER_REQUEST_FAILED,
        payload: error.response.data.message,
      });
    });
};
export const loginRequestLoading = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST_LOADING });
};

export const loginRequestFailed = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST_FAILED });
};
