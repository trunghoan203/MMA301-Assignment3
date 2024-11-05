import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome";
import SubscribeScreen from "../screens/Subscribe";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          color: "black",
        },
        headerBackTitleVisible: true,
        headerBackTitle: getPreviousScreenTitle(route, navigation),
        headerBackTitleStyle: {
          fontSize: 15,
          color: "#007AFF",
        },
        headerTintColor: "#007AFF",
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        },
        headerTitleContainerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        },
      })}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{ title: "Subscribe" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const getPreviousScreenTitle = (route: any, navigation: any) => {
  const routes = navigation.getState().routes;
  const currentIndex = routes.findIndex((r: any) => r.key === route.key);
  if (currentIndex > 0) {
    return routes[currentIndex - 1].name;
  }
  return "";
};