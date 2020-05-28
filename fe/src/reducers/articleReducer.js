import { RECIEVED_ARTICLES, DELETING_ARTICLE } from "../actions/index";

const initialState = {
  articles: [],
  savedArticles: [],
  currentUser: 0,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVED_ARTICLES:
      return { ...state, articles: action.payload };

    case DELETING_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
