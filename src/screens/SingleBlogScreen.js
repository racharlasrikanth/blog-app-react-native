import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const SingleBlogScreen = ({ navigation }) => {
  const { blogPosts } = useContext(BlogContext);

  const id = navigation.getParam("id");

  const singleBlogPost = blogPosts.find((eachPost) => eachPost.id === id);

  return (
    <View style={styles.blogContainer}>
      <Text style={{ ...styles.textView }}>{singleBlogPost.id}</Text>
      <Text style={{ ...styles.textView, ...styles.title }}>
        {singleBlogPost.title}
      </Text>
      <Text style={{ ...styles.textView }}>{singleBlogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    margin: 15,
  },
  textView: {
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 0.7,
    color: "#333",
  },
  title: {
    fontWeight: "bold",
    color: "green",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: "green",
  },
});

export default SingleBlogScreen;
