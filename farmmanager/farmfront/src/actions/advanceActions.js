import axios from "axios";
import {
  GET_ADVANCE,
  DELETE_ADVANCE,
  DETAIL_ADVANCE,
  ADD_ADVANCE,
  UPDATE_ADVANCE
} from "./types";

//FETCH ADVANCES
export const getAdvances = () => dispatch => {
  axios
    .get("http://localhost:8000/api/advance/")
    .then(res => {
      dispatch({
        type: GET_ADVANCE,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch advances", err));
};

//DELETE ADVANCE
export const deleteAdvance = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/advance/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_ADVANCE,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete advance", err));
};

// GET DETAILS OF ADVANCE
export const detailAdvance = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/advance/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_ADVANCE,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single advance", err));
};


//ADD_ADVANCE

// export const createAdvance = (advanceData) => dispatch => {
//   console.log('creating advance')
//     fetch("http://127.0.0.1:8000/api/advance/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(advanceData)
//     })
//       .then(response => response.json())
//       .then(advance => 
//       dispatch({
//         type: ADD_ADVANCE,
//           payload: advance
//       })
//       // alert(advance)
//       )
//       .catch(error => {
//         console.error("Failed to add advance", error);
//       });
//   };


// //UPDATE ADVANCE

