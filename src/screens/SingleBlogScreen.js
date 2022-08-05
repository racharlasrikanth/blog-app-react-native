import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

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

SingleBlogScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EditScreen", {
            id: navigation.getParam("id"),
          })
        }
      >
        <Feather style={styles.editIcon} name="edit" />
      </TouchableOpacity>
    ),
  };
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
  editIcon: {
    marginRight: 15,
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
  },
});

export default SingleBlogScreen;
