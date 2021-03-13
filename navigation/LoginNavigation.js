import React from "react";
import { View, Text } from "react-native";
//import AppLoading from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import Welcome from "../screens/Auth/Welcome";
import StackNavigator from "./StackNavigator";

const Stack = createStackNavigator();

export default function LoginNavigation() {
  let [fontsLoaded] = useFonts({
    Billabong: require("../assets/fonts/Billabong.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="StackNavigator" component={StackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
