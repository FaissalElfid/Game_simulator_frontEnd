import {
    TEST_FOLLOW_SUCCESS,
    TEST_FOLLOW_LOADING,
    TEST_FOLLOW_FAILED,
  } from "../../constants/testFollow";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  // here i'am writing the service and the action to change the
  export const getResponse = (userId, name, numberUserFollow, EnemieUsername, password) =>
    async (dispatch) => {  
      dispatch({ type: TEST_FOLLOW_LOADING });
      await axios
        .post(`${API_URL}/follow`, {
          userId: userId,
          name: name,
          number_of_users_to_follow: Number(numberUserFollow),
          password: password,
          enemieusername: EnemieUsername,
        })
        .then((response) => {
          console.log(response);
          dispatch({ type: TEST_FOLLOW_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: TEST_FOLLOW_FAILED, payload: error.message });
        });
    };
  
  export const testFollowLoading = () => (dispatch) => {
    dispatch({ type: TEST_FOLLOW_LOADING });
  };
  
  export const testFollowFailed = () => (dispatch) => {
    dispatch({ type: TEST_FOLLOW_FAILED });
  };
  