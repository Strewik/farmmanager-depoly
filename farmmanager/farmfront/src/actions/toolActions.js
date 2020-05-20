import axios from "axios";
import {
  GET_TOOL,
  DELETE_TOOL,
  DETAIL_TOOL,
  ADD_TOOL,
  UPDATE_TOOL
} from "./types";

//FETCH TOOLS
export const getTools = () => dispatch => {
  axios
    .get("http://localhost:8000/api/tool/")
    .then(res => {
      dispatch({
        type: GET_TOOL,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch tools", err));
};

//DELETE TOOL
export const deleteTool = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/tool/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TOOL,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete tool", err));
};

// GET DETAILS OF TOOL
export const detailTool = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/tool/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_TOOL,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single tool", err));
};
