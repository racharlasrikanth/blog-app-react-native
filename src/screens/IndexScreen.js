import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { blogPosts, deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={{ margin: 15 }}>
      <Text style={styles.blogCountTitle}>
        We are showing <Text style={styles.blogCount}>{blogPosts.length}</Text>{" "}
        blogs
      </Text>
      <FlatList
        keyExtractor={(eachObj) => eachObj.id}
        data={blogPosts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const { id, title } = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("SingleBlogScreen", { id })}
            >
              <View key={id} style={styles.eachBlog}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                  <Feather name="trash" style={styles.trashIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Feather style={styles.createIcon} name="plus" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  eachBlog: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    shadowColor: "#3333333c",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor: "#3333332a",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    letterSpacing: 1,
    flex: 1,
  },
  trashIcon: {
    fontSize: 24,
    color: "red",
    marginLeft: 10,
  },
  createIcon: {
    marginRight: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  blogCountTitle: {
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 15,
  },
  blogCount: {
    fontWeight: "bold",
    color: "green",
  },
});

export default IndexScreen;
