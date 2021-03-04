import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SwithcNavigator from "./navigation/LoginNavigation";

import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwithcNavigator />
      </Provider>
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
