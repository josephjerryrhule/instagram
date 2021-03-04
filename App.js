import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SwithcNavigator from "./navigation/LoginNavigation";

export default class App extends React.Component {
  render() {
    return <SwithcNavigator />;
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
