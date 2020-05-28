import { RECIEVED_ARTICLES } from "../actions/index";

const initialState = {
  articles: [],
  savedArticles: [],
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVED_ARTICLES:
      return {
        articles: action.payload,
      };
    default:
      return state;
  }
};
