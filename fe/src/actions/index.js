import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";

export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const RECIEVED_ARTICLES = "RECIEVED_ARTICLES";

export const EDITING_ARTICLE = "FETCHING_ARTICLES";
export const DELETING_ARTICLE = "DELETING_ARTICLE";

export const getArticles = () => (dispatch) => {
  dispatch({ type: FETCHING_ARTICLES });
  axiosWithAuth()
    .get("/articles")
    .then((res) => {
      console.log("Fetching Article", res.data);
      dispatch({ type: RECIEVED_ARTICLES, payload: res.data });
    })
    .catch((err) => {
      console.log("The error is", err);
    });
};

export const deleteArticle = (article) => (dispatch) => {
  axiosWithAuth()
    .delete(`articles/${article.id}`)
    .then((res) => {
      dispatch({ DELETING_ARTICLE, payload: article });
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const updateArticle = (title, content, category) => (dispatch) => {
//   dispatch({ type: EDITING_ARTICLE });
//   axiosWithAuth().post();
// };
