import axios from "axios";
import {
  GET_HARVEST,
  DELETE_HARVEST,
  DETAIL_HARVEST,
  ADD_HARVEST,
  UPDATE_HARVEST
} from "./types";

//FETCH HARVESTS
export const getHarvest = () => dispatch => {
  axios
    .get("http://localhost:8000/api/harvest/")
    .then(res => {
      dispatch({
        type: GET_HARVEST,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch harvest", err));
};

//DELETE HARVEST
export const deleteHarvest = id => dispatch => {
         axios
           .delete(`http://localhost:8000/api/harvest/${id}/`)
           .then(res => {
             dispatch({
               type: DELETE_HARVEST,
               payload: id
             });
           })
           .catch(err => console.log("Axios not able to delete harvest", err));
       };

// GET DETAILS OF HARVEST
export const detailHarvest = id => dispatch => {
         axios
           .get(`http://localhost:8000/api/harvest/${id}/`)
           .then(res => {
             dispatch({
               type: DETAIL_HARVEST,
               payload: res.data
             });
           })
           .catch(err =>
             console.log("Axios not able to fetch single harvest", err)
           );
       };
