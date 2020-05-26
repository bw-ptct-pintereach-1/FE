import axios from "axios";

export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const RECIEVED_ARTICLES = "RECIEVED_ARTICLES";
export const EDITING_ARTICLE = "FETCHING_ARTICLES";
export const DELETING_ARTICLE = "DELETING_ARTICLE";

export const getArticles = () => (disptach) => {
  dispatch({ type: FETCHING_ARTICLES });
  axios
    .get("https://pintreach1.herokuapp.com/article")
    .then((res) => {
      console.log("Fetching Article", res.data);
      dispatch({ type: RECIEVED_ARTICLES, payload: res.data });
    })
    .catch((err) => {
      console.log(err, "Failed to get Smurf Err");
    });
};
