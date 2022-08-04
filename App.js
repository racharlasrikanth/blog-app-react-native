import React from "react";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    IndexScreen: IndexScreen,
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
