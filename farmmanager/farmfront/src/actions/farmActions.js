import axios from "axios";
import {
  GET_FARM,
  DELETE_FARM,
  DETAIL_FARM,
  ADD_FARM,
  UPDATE_FARM
} from "./types";

//FETCH FARMS
export const getFarms = () => dispatch => {
  axios
    .get("http://localhost:8000/api/farm/")
    .then(res => {
      dispatch({
        type: GET_FARM,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch farms", err));
};

//DELETE FARM
export const deleteFarm = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/farm/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_FARM,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete farm", err));
};

// GET DETAILS OF FARM
export const detailFarm = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/farm/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_FARM,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single farm", err));
};

//ADD_FARM

// export const createFarm = (FarmData) => dispatch => {
//   console.log('creating FARM')
//     fetch("http://127.0.0.1:8000/api/farm/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(FarmData)
//     })
//       .then(response => response.json())
//       .then(farm =>
//       dispatch({
//         type: ADD_FARM,
//           payload: farm
//       })
//       // alert(farm)
//       )
//       .catch(error => {
//         console.error("Failed to add farm", error);
//       });
//   };

// //UPDATE FARM
