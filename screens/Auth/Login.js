import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 80, fontFamily: "Billabong", margin: 30 }}>
          Instagram
        </Text>
        <View style={{ marginTop: 100 }}>
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 10,
              margin: 10,
            }}
            placeholder={"Email"}
          />
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 10,
              margin: 10,
            }}
            placeholder={"Password"}
          />
        </View>
        <View
          style={{
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: screenWidth * 0.6,
              heigh: 50,
              padding: 15,
              borderRadius: 30,
              backgroundColor: "#0095f6",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text>Don't have an account?</Text>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
