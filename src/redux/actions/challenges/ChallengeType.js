import {
  ADD_CHALLENGE_TYPE_FAILED,
  ADD_CHALLENGE_TYPE_LOADING,
    ADD_CHALLENGE_TYPE_SUCCESS,
    GET_CHALLENGES_TYPE_STATE_FAILED,
    GET_CHALLENGES_TYPE_STATE_LOADING,
    GET_CHALLENGES_TYPE_STATE_SUCCESS,
  } from "../../constants/challenges/ChallengeType";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  export const getChallengesType = () => async (dispatch) => {
    dispatch({ type: GET_CHALLENGES_TYPE_STATE_LOADING });
    await axios
      .get(
        `${API_URL}/challengeType/`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: GET_CHALLENGES_TYPE_STATE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: GET_CHALLENGES_TYPE_STATE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const addChallengeType = (data) => async (dispatch) => {
    dispatch({ type: ADD_CHALLENGE_TYPE_LOADING });
    await axios
      .post(
        `${API_URL}/challengeType/`,
        {
            title: data.title,
            description: data.description,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if(!response.data.type)
        {dispatch({ type: ADD_CHALLENGE_TYPE_SUCCESS, payload: response.data.message + ' id:' +response.data.id });}
        else{
          dispatch({
            type: ADD_CHALLENGE_TYPE_FAILED,
            payload: response.data.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_CHALLENGE_TYPE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  