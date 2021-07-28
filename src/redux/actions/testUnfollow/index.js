import {
    TEST_UNFOLLOW_SUCCESS,
    TEST_UNFOLLOW_LOADING,
    TEST_UNFOLLOW_FAILED,
  } from "../../constants/testUnfollow";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  // here i'am writing the service and the action to change the
  export const getResponse = (userId, name, numberUserUnfollow, EnemieUsername, password) =>
    async (dispatch) => {  
      dispatch({ type: TEST_UNFOLLOW_LOADING });
      await axios
        .post(`${API_URL}/unfollow`, {
          userId: userId,
          name: name,
          number_of_users_to_unfollow: Number(numberUserUnfollow),
          password: password,
          enemieusername: EnemieUsername,
        })
        .then((response) => {
          console.log(response);
          dispatch({ type: TEST_UNFOLLOW_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: TEST_UNFOLLOW_FAILED, payload: error.message });
        });
    };
  
  export const testUnfollowLoading = () => (dispatch) => {
    dispatch({ type: TEST_UNFOLLOW_LOADING });
  };
  
  export const testUnfollowFailed = () => (dispatch) => {
    dispatch({ type: TEST_UNFOLLOW_FAILED });
  };
  