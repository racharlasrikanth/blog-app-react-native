import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={{ margin: 15 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput
          style={{ ...styles.input }}
          value={title}
          placeholder="Enter Title..."
          onChangeText={(newText) => setTitle(newText)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Content</Text>
        <TextInput
          style={{ ...styles.input, ...styles.inputContent }}
          value={content}
          placeholder="Enter Content..."
          onChangeText={(newContent) => setContent(newContent)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!title || !content}
          style={styles.primaryBtn}
          onPress={() => {
            addBlogPost(title, content, () => {
              navigation.navigate("IndexScreen");
            });
          }}
        >
          <Text style={{ ...styles.label, ...styles.btnText }}>
            Enter Content
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
