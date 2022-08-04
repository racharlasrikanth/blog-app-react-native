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
  return (title, content, navigateToHome) => {
    dispatch({
      type: ADD_BLOG,
      payload: {
        title: title,
        id: new Date().getTime().toString(),
        content: content,
      },
    });
    navigateToHome();
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
