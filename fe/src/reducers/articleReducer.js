import {
  CAUGHT_ARTICLES,
  DELETING_ARTICLE,
  ADDING_ARTICLE,
} from "../actions/index";

const initialState = {
  articles: [],

  currentUser: 0,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAUGHT_ARTICLES:
      return { ...state, articles: action.payload };

    case DELETING_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case ADDING_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };

    default:
      return state;
  }
};
