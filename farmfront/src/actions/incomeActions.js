import axios from "axios";
import {
  GET_INCOME,
  DETAIL_INCOME,
  DELETE_INCOME,
  ADD_INCOME,
  UPDATE_INCOME
} from "./types";

//FETCH ADVANCES

export const getIncome = () => dispatch => {
  axios
    .get("http://localhost:8000/api/income/")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_INCOME,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// GET ONE INCOME
export const detailIncome = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/income/${id}/`)
    .then(res => {
      // console.log(res.data);
      // .then((INCOMEs) =>
      dispatch({
        type: DETAIL_INCOME,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single income", err));
};

//DELETE INCOME
export const deleteIncome = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/income/${id}/`)
    .then(res => {
      // console.log(res.id);
      dispatch({
        type: DELETE_INCOME,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete income", err));
};

// //ADD_INCOME

// export const addIncome = IncomeData => dispatch => {
//   console.log("add INCOME");
//   fetch("http://127.0.0.1:8000/api/income/", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(IncomeData)
//   })
//     .then(res => res.json())
//     .then(
//       income =>
//         dispatch({
//           type: ADD_INCOME,
//           payload: income
//         })
//       // alert("income added");
//       // Alert.alert(responseJson);
//       // this.props.navigation.navigate("IncomeLand");
//     )
//     .catch(error => {
//       console.error("Failed to add income", error);
//     });
// };

// //UPDATE INCOME
