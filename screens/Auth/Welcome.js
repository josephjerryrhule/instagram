import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { getUser } from "../../actions/user";

class Welcome extends React.Component {
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getUser(user.uid);
        if (this.props.user !== null) {
          this.props.navigation.navigate("StackNavigator");
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: "StackNavigator" }],
          });
        }
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/originals/93/86/e1/9386e13744ab596696fae626f0c99cb0.png",
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser }, dispatch);
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
