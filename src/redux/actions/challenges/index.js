import {
    GET_CHALLENGES_STATE_FAILED,
    GET_CHALLENGES_STATE_LOADING,
    GET_CHALLENGES_STATE_SUCCESS,
    ADD_CHALLENGE_FAILED,
    ADD_CHALLENGE_LOADING,
    ADD_CHALLENGE_SUCCESS,
    DELETE_CHALLENGE_FAILED,
    DELETE_CHALLENGE_LOADING,
    DELETE_CHALLENGE_SUCCESS,
  } from "../../constants/challenges";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  export const getChallenges = () => async (dispatch) => {
    dispatch({ type: GET_CHALLENGES_STATE_LOADING });
    await axios
      .get(
        `${API_URL}/challenge/`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: GET_CHALLENGES_STATE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: GET_CHALLENGES_STATE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const addChallenge = (data) => async (dispatch) => {
    dispatch({ type: ADD_CHALLENGE_LOADING });
    await axios
      .post(
        `${API_URL}/challenge/${data.challengeType}`,
        {
            title: data.title,
            description: data.description,
            reunlockable: data.reunlockable,
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
        {dispatch({ type: ADD_CHALLENGE_SUCCESS, payload: response.data.message + ' id:' +response.data.id });}
        else{
          dispatch({
            type: ADD_CHALLENGE_FAILED,
            payload: response.data.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_CHALLENGE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const deleteChallenge = (data) => async (dispatch) => {
    dispatch({ type: DELETE_CHALLENGE_LOADING });
    await axios
      .delete(
        `${API_URL}/challenge/${data}`,
        null,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if(!response.data.type)
        {dispatch({ type: DELETE_CHALLENGE_SUCCESS, payload: response.data.message});}
        else{
          dispatch({
            type: DELETE_CHALLENGE_FAILED,
            payload: response.data.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_CHALLENGE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  