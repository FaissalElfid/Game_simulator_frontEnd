import {
    GET_USERS_STATE_FAILED,
    GET_USERS_STATE_LOADING,
    GET_USERS_STATE_SUCCESS,
  } from "../../constants/getUsers";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  export const getUsers = () => async (dispatch) => {
    dispatch({ type: GET_USERS_STATE_LOADING });
    await axios
      .get(
        `${API_URL}/user/`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        response.data.forEach(element => {
            if(element.profileImage){
                element.profileImage = `${API_URL}/user/profile-image/${element.profileImage}`;
            }
            
          });
        dispatch({ type: GET_USERS_STATE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: GET_USERS_STATE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  