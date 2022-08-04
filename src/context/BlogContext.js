import React, { useReducer } from "react";
import { ADD_BLOG } from "./../utils/constants";

export const BlogContext = React.createContext();

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

export const BlogProvider = ({ children }) => {
  const initialObj = {
    blogPosts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialObj);

  const addBlogPost = () => {
    dispatch({ type: ADD_BLOG, payload: { title: "hello" } });
  };

  return (
    <BlogContext.Provider value={{ ...state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
