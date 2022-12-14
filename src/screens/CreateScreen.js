import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("IndexScreen"));
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

export default CreateScreen;
