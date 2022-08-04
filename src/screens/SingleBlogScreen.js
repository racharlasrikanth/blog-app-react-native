import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const SingleBlogScreen = ({ navigation }) => {
  const { blogPosts } = useContext(BlogContext);

  const id = navigation.getParam("id");

  const singleBlogPost = blogPosts.find((eachPost) => eachPost.id === id);

  return (
    <View>
      <Text>{singleBlogPost.id}</Text>
      <Text>{singleBlogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SingleBlogScreen;
