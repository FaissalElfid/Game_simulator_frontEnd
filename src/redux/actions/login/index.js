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
    .then((response) => {
      dispatch({ type: GET_USER_REQUEST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
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
