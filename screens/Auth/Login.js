import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Login Page </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{
            backgroundColor: "black",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
