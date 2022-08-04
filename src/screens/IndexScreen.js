import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);
  console.log(blogPosts);

  return (
    <View>
      <Text>IndexScreen {blogPosts.length}</Text>
      <Button title="add" onPress={addBlogPost} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
