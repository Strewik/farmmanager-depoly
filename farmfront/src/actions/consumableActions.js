import axios from "axios";
import {
  GET_CONSUMABLE,
  DELETE_CONSUMABLE,
  DETAIL_CONSUMABLE,
  ADD_CONSUMABLE,
  UPDATE_CONSUMABLE
} from "./types";

//FETCH CONSUMABLES
export const getConsumables = () => dispatch => {
  axios
    .get("http://localhost:8000/api/consumable/")
    .then(res => {
      dispatch({
        type: GET_CONSUMABLE,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch consumables", err));
};

//DELETE CONSUMABLE
export const deleteConsumable = id => dispatch => {
         axios
           .delete(`http://localhost:8000/api/consumable/${id}/`)
           .then(res => {
             dispatch({
               type: DELETE_CONSUMABLE,
               payload: id
             });
           })
           .catch(err =>
             console.log("Axios not able to delete consumable", err)
           );
       };

// GET DETAILS OF CONSUMABLE
export const detailConsumable = id => dispatch => {
         axios
           .get(`http://localhost:8000/api/consumable/${id}/`)
           .then(res => {
             dispatch({
               type: DETAIL_CONSUMABLE,
               payload: res.data
             });
           })
           .catch(err =>
             console.log("Axios not able to fetch single consumable", err)
           );
       };
