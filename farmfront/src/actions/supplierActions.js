import axios from "axios";
import {
  GET_SUPPLIER,
  DELETE_SUPPLIER,
  DETAIL_SUPPLIER,
  ADD_SUPPLIER,
  UPDATE_SUPPLIER
} from "./types";

//FETCH CUSTOMERS
export const getSuppliers = () => dispatch => {
  axios
    .get("http://localhost:8000/api/supplier/")
    .then(res => {
      dispatch({
        type: GET_SUPPLIER,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch suppliers", err));
};

//DELETE CUSTOMER
export const deleteSupplier = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/supplier/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_SUPPLIER,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete supplier", err));
};

// GET DETAILS OF COSTUMER
export const detailSupplier = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/supplier/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_SUPPLIER,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single supplier", err));
};
