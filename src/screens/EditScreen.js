import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { blogPosts, editBlogPost } = useContext(BlogContext);

  const id = navigation.getParam("id");

  const singleBlogPost = blogPosts.find((eachPost) => eachPost.id === id);

  return (
    <BlogPostForm
      initialValues={{
        title: singleBlogPost.title,
        content: singleBlogPost.content,
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
  },
  input: {
    minHeight: 50,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "white",
    fontSize: 18,
    letterSpacing: 1,
    color: "#333",
    borderColor: "#333333b6",
    borderWidth: 1,
  },
  primaryBtn: {
    backgroundColor: "#0760be",
    borderRadius: 4,
    textTransform: "capitalize",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EditScreen;
