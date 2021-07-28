import {
  TEST_REQUEST_SUCCESS,
  TEST_REQUEST_LOADING,
  TEST_REQUEST_FAILED,
} from "../../constants/test1";
import axios from "axios";
import { API_URL } from "../../../config/source";

// here i'am writing the service and the action to change the
export const getResponse = (numberOfUsers, testPronoScore, nameIn, password, dateMatch) =>
  async (dispatch) => {
    console.log(numberOfUsers, testPronoScore, nameIn, dateMatch, password);

    dispatch({ type: TEST_REQUEST_LOADING });
      //   await axios
      // .get(`${API_URL}/`)
      // .then((response) => {
      //   console.log(response);
      //   dispatch({ type: TEST_REQUEST_SUCCESS, payload: response.data });
      // })
      // .catch((error) => {
      //   console.error(error);
      //   dispatch({ type: TEST_REQUEST_FAILED, payload: error.message });
      // });
    await axios
      .post(`${API_URL}/`, {
        number_of_users: numberOfUsers,
        test_prono_score: testPronoScore,
        name: nameIn,
        password: password,
        date_match: dateMatch,
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: TEST_REQUEST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: TEST_REQUEST_FAILED, payload: error.message });
      });
  };

export const testRequestLoading = () => (dispatch) => {
  dispatch({ type: TEST_REQUEST_LOADING });
};

export const testRequestFailed = () => (dispatch) => {
  dispatch({ type: TEST_REQUEST_FAILED });
};
