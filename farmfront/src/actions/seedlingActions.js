import axios from "axios";
import {
  GET_SEEDLING,
  DELETE_SEEDLING,
  DETAIL_SEEDLING,
  ADD_SEEDLING,
  UPDATE_SEEDLING
} from "./types";

//FETCH CUSTOMERS
export const getSeedlings = () => dispatch => {
  axios
    .get("http://localhost:8000/api/seedling/")
    .then(res => {
      dispatch({
        type: GET_SEEDLING,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch seedlings", err));
};

//DELETE CUSTOMER
export const deleteSeedling = id => dispatch => {
         axios
           .delete(`http://localhost:8000/api/seedling/${id}/`)
           .then(res => {
             dispatch({
               type: DELETE_SEEDLING,
               payload: id
             });
           })
           .catch(err => console.log("Axios not able to delete seedling", err));
       };

// GET DETAILS OF COSTUMER
export const detailSeedling = id => dispatch => {
         axios
           .get(`http://localhost:8000/api/seedling/${id}/`)
           .then(res => {
             dispatch({
               type: DETAIL_SEEDLING,
               payload: res.data
             });
           })
           .catch(err =>
             console.log("Axios not able to fetch single seedling", err)
           );
       };
