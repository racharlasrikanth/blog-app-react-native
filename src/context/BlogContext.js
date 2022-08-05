import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from "./../utils/constants";
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

    case EDIT_BLOG:
      const updatedBlogPosts = state.blogPosts.map((eachBlog) => {
        if (eachBlog.id === action.payload.id) {
          return action.payload;
        } else {
          return eachBlog;
        }
      });
      return {
        ...state,
        blogPosts: updatedBlogPosts,
      };

    default:
      return state;
  }
};

const initialObj = {
  blogPosts: [
    {
      id: "sdfs",
      title: "hello",
      content: "welcome",
    },
  ],
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

const editBlogPost = (dispatch) => {
  return (id, title, content, navigateToHome) => {
    dispatch({ type: EDIT_BLOG, payload: { id, title, content } });
    navigateToHome();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  initialObj
);
