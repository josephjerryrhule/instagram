import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

export default function App() {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("LOGIN");
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>You are now logged in</Text>

      <TouchableOpacity onpress={signOutUser}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
