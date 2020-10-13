import axios from "axios";
import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  DETAIL_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER
} from "./types";

//FETCH CUSTOMERS
export const getCustomers = () => dispatch => {
  axios
    .get("https://farmmanager-api.herokuapp.com/api/customer/")
    .then(res => {
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch customers", err));
};

//DELETE CUSTOMER
export const deleteCustomer = id => dispatch => {
  axios
    .delete(`https://farmmanager-api.herokuapp.com/api/customer/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete customer", err));
};

// GET DETAILS OF COSTUMER
export const detailCustomer = id => dispatch => {
  axios
    .get(`https://farmmanager-api.herokuapp.com/api/customer/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_CUSTOMER,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single customer", err));
};
