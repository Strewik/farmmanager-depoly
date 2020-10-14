import axios from "axios";
import {
  GET_TOOLBINCARD,
  DELETE_TOOLBINCARD,
  DETAIL_TOOLBINCARD,
  ADD_TOOLBINCARD,
  UPDATE_TOOLBINCARD
} from "./types";

//FETCH TOOLS
export const getToolbincards = () => dispatch => {
  axios
    .get("https://farmmanager-api.herokuapp.com/api/toolbincard/")
    .then(res => {
      dispatch({
        type: GET_TOOLBINCARD,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch toolbincards", err));
};

//DELETE TOOL
export const deleteToolbincard = id => dispatch => {
  axios
    .delete(`https://farmmanager-api.herokuapp.com/api/toolbincard/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TOOLBINCARD,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete toolbincard", err));
};

// GET DETAILS OF TOOL
export const detailToolbincard = id => dispatch => {
  axios
    .get(`https://farmmanager-api.herokuapp.com/api/toolbincard/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_TOOLBINCARD,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Axios not able to fetch single toolbincard", err)
    );
};
