import { ADD_BLOG, DELETE_BLOG } from "./../utils/constants";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG:
      const newBlogPosts = [...state.blogPosts, action.payload];
      return {
        ...state,
        blogPosts: newBlogPosts,
      };

    case DELETE_BLOG:
      const filteredBlogs = state.blogPosts.filter((eachPost) => {
        return eachPost.id !== action.payload;
      });
      return {
        ...state,
        blogPosts: filteredBlogs,
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
    dispatch({
      type: ADD_BLOG,
      payload: {
        title: "hello i am srikanth racharla how are you",
        id: new Date().getTime().toString(),
      },
    });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: DELETE_BLOG,
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  initialObj
);
