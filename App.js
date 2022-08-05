import React from "react";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import SingleBlogScreen from "./src/screens/SingleBlogScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    IndexScreen: IndexScreen,
    SingleBlogScreen: SingleBlogScreen,
    CreateScreen: CreateScreen,
    EditScreen: EditScreen,
  },
  {
    initialRouteName: "IndexScreen",
    defaultNavigationOptions: {
      title: "Blog Posts",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
