import { ADD_BLOG } from "./../utils/constants";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG:
      const newBlogPosts = [...state.blogPosts, action.payload];
      return {
        ...state,
        blogPosts: newBlogPosts,
      };
    default:
      return state;
  }
};

const initialObj = {
  blogPosts: [],
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: ADD_BLOG, payload: { title: "hello" } });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  initialObj
);
