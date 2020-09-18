import axios from "axios";
import {
  GET_PAYROLL,
  DETAIL_PAYROLL,
  DELETE_PAYROLL,
  ADD_PAYROLL,
  UPDATE_PAYROLL
} from "./types";

//FETCH PayrollS

export const getPayroll = () => dispatch => {
  axios
    .get("http://localhost:8000/api/payroll/")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_PAYROLL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// GET ONE Payroll
export const detailPayroll = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/payroll/${id}/`)
    .then(res => {
      // console.log(res.data);
      // .then((Payroll) =>
      dispatch({
        type: DETAIL_PAYROLL,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single payroll", err));
};

//DELETE Payroll
export const deletePayroll = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/payroll/${id}/`)
    .then(res => {
      // console.log(res.id);
      dispatch({
        type: DELETE_PAYROLL,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete payroll", err));
};

// //ADD_Payroll

// export const addPayroll = payrollData => dispatch => {
//   console.log("add Payroll");
//   fetch("http://127.0.0.1:8000/api/payroll/", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payrollData)
//   })
//     .then(res => res.json())
//     .then(
//       payroll =>
//         dispatch({
//           type: ADD_PAYROLL,
//           payload: payroll
//         })
//       // alert("Payroll added");
//       // Alert.alert(responseJson);
//       // this.props.navigation.navigate("PayrollLand");
//     )
//     .catch(error => {
//       console.error("Failed to add payroll", error);
//     });
// };

// //UPDATE Payroll
