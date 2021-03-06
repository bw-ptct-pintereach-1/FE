import { axiosWithAuth } from "../util/axioswithAuth";
export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const CAUGHT_ARTICLES = "CAUGHT_ARTICLES";
export const DELETING_ARTICLE = "DELETING_ARTICLE";
export const ADDING_ARTICLE = "ADDING_ARTICLE";
export const UPDATING_ARTICLE = "UPDATING_ARTICLES";

export const getArticles = () => (dispatch) => {
  dispatch({ type: FETCHING_ARTICLES });
  axiosWithAuth()
    .get("/articles")
    .then((res) => {
      console.log("Caught Articles", res.data);
      dispatch({ type: CAUGHT_ARTICLES, payload: res.data });
    })
    .catch((err) => {
      console.log("The error is", err);
    });
};

export const deleteArticle = (article) => (dispatch) => {
  axiosWithAuth()
    .delete(`articles/${article.id}`)
    .then((res) => {
      dispatch({ type: DELETING_ARTICLE, payload: article });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addArticle = (user_id, article) => (dispatch) => {
  axiosWithAuth()
    .post(`/articles/${user_id}`, article)
    .then((res) => {
      console.log("RES", res);
      dispatch({ type: ADDING_ARTICLE, payload: article });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editArticle = (user_id, article) => (dispatch) => {
  console.log("updating article test", article);
  axiosWithAuth()
    .put(`/articles/${article.id}/user/${user_id}`, article)
    .then((res) => {
      console.log("Updating Res", res);
      dispatch({ type: UPDATING_ARTICLE, payload: article });
    })

    .catch((err) => {
      console.log(err);
    });
};
