import {
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_LOADING,
    REGISTER_REQUEST_FAILED,
    REGISTERED_FALSE
  } from "../../constants/register";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  export const register = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST_LOADING });
    await axios
      .post(
        `${API_URL}/user/`,
        {
            name: data.name,
            password: data.password,
            description: data.description,
            email: data.email
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_REQUEST_FAILED,
          payload: error.response.data.message,
        });
      });
  };

  export const addUser = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST_LOADING });
    await axios
      .post(
        `${API_URL}/user/`,
        {
            name: data.name,
            lastName: data.lastName,
            password: data.password,
            description: data.description,
            email: data.email,
            isAdmin: data.isAdmin,
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
        dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_REQUEST_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  
  export const registerRequestLoading = () => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST_LOADING });
  };
  
  export const registerRequestFailed = () => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST_FAILED });
  };
  export const registeredFalse = () => (dispatch) => {
    dispatch({ type: REGISTERED_FALSE });
  };
  