import axios from "axios";
import {
  GET_REQUISITION,
  DETAIL_REQUISITION,
  DELETE_REQUISITION,
  ADD_REQUISITION,
  UPDATE_REQUISITION
} from "./types";

//FETCH Requisition

export const getRequisition = () => dispatch => {
  axios
    .get("http://localhost:8000/api/requisition/")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_REQUISITION,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// GET ONE ADVANCE
export const detailRequisition = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/requisition/${id}/`)
    .then(res => {
      // console.log(res.data);
      // .then((advances) =>
      dispatch({
        type: DETAIL_REQUISITION,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Axios not able to fetch single Requisition", err)
    );
};

//DELETE ADVANCE
export const deleteRequisition = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/requisition/${id}/`)
    .then(res => {
      // console.log(res.id);
      dispatch({
        type: DELETE_REQUISITION,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete Requisition", err));
};

// //ADD_ADVANCE

export const addRequisition = requisitionData => dispatch => {
  console.log("add Requisition");
  fetch("http://127.0.0.1:8000/api/Requisition/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requisitionData)
  })
    .then(res => res.json())
    .then(
      requisition =>
        dispatch({
          type: ADD_REQUISITION,
          payload: requisition
        })
      // alert("Requisition added");
      // Alert.alert(responseJson);
      // this.props.navigation.navigate("RequisitionLand");
    )
    .catch(error => {
      console.error("Failed to add Requisition", error);
    });
};

// //UPDATE Requisition
