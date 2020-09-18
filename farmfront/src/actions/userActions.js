import axios from "axios";
import {
  GET_USER,
  DELETE_USER,
  DETAIL_USER,
  ADD_USER,
  UPDATE_USER
} from "./types";

//FETCH USERS
export const getUsers = () => dispatch => {
  axios
    .get("http://localhost:8000/api/user/")
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch Users", err));
};

//DELETE USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/user/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete user", err));
};

// GET DETAILS OF USER
export const detailUser = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/user/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_USER,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single User", err));
};

//ADD_USER

// export const createUSER = (USERData) => dispatch => {
//   console.log('creating USER')
//     fetch("http://127.0.0.1:8000/api/user/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(USERData)
//     })
//       .then(response => response.json())
//       .then(USER =>
//       dispatch({
//         type: ADD_USER,
//           payload: USER
//       })
//       // alert(USER)
//       )
//       .catch(error => {
//         console.error("Failed to add USER", error);
//       });
//   };

// //UPDATE USER
