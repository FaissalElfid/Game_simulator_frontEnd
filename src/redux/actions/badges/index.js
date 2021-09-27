import {
    GET_BADGES_STATE_FAILED,
    GET_BADGES_STATE_LOADING,
    GET_BADGES_STATE_SUCCESS,
    ADD_BADGE_FAILED,
    ADD_BADGE_LOADING,
    ADD_BADGE_SUCCESS,
    DELETE_BADGE_FAILED,
    DELETE_BADGE_LOADING,
    DELETE_BADGE_SUCCESS,
  } from "../../constants/badges";
  import axios from "axios";
  import { API_URL } from "../../../config/source";
  
  export const getBadges = (idChallenge) => async (dispatch) => {
    dispatch({ type: GET_BADGES_STATE_LOADING });
    await axios
      .get(
        `${API_URL}/badge/challenge/${idChallenge}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: GET_BADGES_STATE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: GET_BADGES_STATE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const addBadge = (data) => async (dispatch) => {
    console.log(data)
    dispatch({ type: ADD_BADGE_LOADING });
    const formData = new FormData();
      formData.append("file", data.picture[0]);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("pronos", data.pronos);
      if(data.recurrent){
      formData.append("recurrent", data.recurrent);}
      formData.append("coins", data.coins)
      if(data.reunlockable){
      formData.append("reunlockable", data.reunlockable);}
      formData.append("level", data.level);
      formData.append("file", data.image);
      console.log(data);
    await axios
      .post(
        `${API_URL}/badge/${data.idChallenge}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if(!response.data.type)
        {dispatch({ type: ADD_BADGE_SUCCESS, payload: response.data.message + ' id:' +response.data.id });}
        else{
          dispatch({
            type: ADD_BADGE_FAILED,
            payload: response.data.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_BADGE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const deleteBadge = (challendeId, badgeId) => async (dispatch) => {
    dispatch({ type: DELETE_BADGE_LOADING });
    await axios
      .delete(
        `${API_URL}/badge/${challendeId}/${badgeId}`,
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
        {dispatch({ type: DELETE_BADGE_SUCCESS, payload: response.data.message});}
        else{
          dispatch({
            type: DELETE_BADGE_FAILED,
            payload: response.data.message,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_BADGE_FAILED,
          payload: error.response.data.message,
        });
      });
  };
  export const updateUserBadge = (userId, badgeId, counter) => async (dispatch) => {
    dispatch({ type: ADD_BADGE_LOADING });
    await axios
      .post(
        `${API_URL}/user/${userId}/${badgeId}`,
        {counter: counter},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: ADD_BADGE_SUCCESS, payload: response.data.message});
      })
      .catch((error) => {
        dispatch({
          type: ADD_BADGE_FAILED,
          payload: error.response.data.message,
        });
      });
  };