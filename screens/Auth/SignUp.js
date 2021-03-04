import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Sign Up Page </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
          style={{
            backgroundColor: "black",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
