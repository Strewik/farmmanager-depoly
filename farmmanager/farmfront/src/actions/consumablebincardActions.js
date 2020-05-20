import axios from "axios";
import {
  GET_CONSUMABLEBINCARD,
  DELETE_CONSUMABLEBINCARD,
  DETAIL_CONSUMABLEBINCARD,
  ADD_CONSUMABLEBINCARD,
  UPDATE_CONSUMABLEBINCARD
} from "./types";

//FETCH CONSUMABLE BIN CARDS
export const getConsumablebincards = () => dispatch => {
  axios
    .get("http://localhost:8000/api/consumablebincard/")
    .then(res => {
      dispatch({
        type: GET_CONSUMABLEBINCARD,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch consumablebincards", err));
};

//DELETE CONSUMABLE BIN CARD
export const deleteConsumablebincard = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/consumablebincard/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CONSUMABLEBINCARD,
        payload: id
      });
    })
    .catch(err =>
      console.log("Axios not able to delete consumablebincard", err)
    );
};

// GET DETAILS OF CONSUMABLE BIN CARD
export const detailConsumablebincard = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/consumablebincard/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_CONSUMABLEBINCARD,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Axios not able to fetch single consumablebincard", err)
    );
};
