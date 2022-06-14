import axios from "axios";

const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POST_REQUEST" });
  try {
    const response = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    dispatch({ type: "FETCH_POST_SUCSES", payload: response.data });
  } catch {
    dispatch({ type: "FETCH_POST_ERROR", Error });
  }
};

export default fetchPosts;
