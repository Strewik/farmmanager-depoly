import axios from "axios";
import {
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  DETAIL_EMPLOYEE,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE
} from "./types";

//FETCH EMPLOYEES
export const getEmployees = () => dispatch => {
  axios
    .get("https://farmmanager-api.herokuapp.com/api/employee/")
    .then(res => {
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch employees", err));
};

//DELETE EMPLOYEE
export const deleteEmployee = id => dispatch => {
         axios
           .delete(`https://farmmanager-api.herokuapp.com/api/employee/${id}/`)
           .then(res => {
             dispatch({
               type: DELETE_EMPLOYEE,
               payload: id
             });
           })
           .catch(err => console.log("Axios not able to delete employee", err));
       };

// GET DETAILS OF EMPLOYEE
export const detailEmployee = id => dispatch => {
         axios
           .get(`https://farmmanager-api.herokuapp.com/api/employee/${id}/`)
           .then(res => {
             dispatch({
               type: DETAIL_EMPLOYEE,
               payload: res.data
             });
           })
           .catch(err =>
             console.log("Axios not able to fetch single employee", err)
           );
       };
