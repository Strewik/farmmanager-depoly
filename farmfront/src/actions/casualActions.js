import axios from "axios";
import {
  GET_CASUAL,
  DELETE_CASUAL,
  DETAIL_CASUAL,
  ADD_CASUAL,
  UPDATE_CASUAL
} from "./types";

//FETCH CASUALS
export const getCasuals = () => dispatch => {
  axios
    .get("http://localhost:8000/api/casual/")
    .then(res => {
      dispatch({
        type: GET_CASUAL,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch casuals", err));
};

//DELETE CASUAL
export const deleteCasual = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/casual/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CASUAL,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete casual", err));
};

// GET DETAILS OF CASUAL
export const detailCasual = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/casual/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_CASUAL,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single casual", err));
};
