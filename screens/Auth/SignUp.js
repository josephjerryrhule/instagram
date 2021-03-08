import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateUsername,
  signup,
} from "../../actions/user";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
class SignUp extends React.Component {
  state = {
    repeat: "",
  };

  onSignupPress = () => {
    if (
      this.props.user.password == this.state.repeat &&
      this.props.user.username !== ""
    ) {
      this.props.signup();
    } else {
      alert("Passwords do not match");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 80 }}>
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 8,
              margin: 10,
            }}
            placeholder={"Username"}
            placeholderTextColor={"grey"}
            value={this.props.user.username}
            onChangeText={(input) => this.props.updateUsername(input)}
          />
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 8,
              margin: 10,
            }}
            placeholder={"Email Address"}
            placeholderTextColor={"grey"}
            value={this.props.user.email}
            onChangeText={(input) => this.props.updateEmail(input)}
          />
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 8,
              margin: 10,
            }}
            secureTextEntry
            placeholder={"Password"}
            placeholderTextColor={"grey"}
            value={this.props.user.password}
            onChangeText={(input) => this.props.updatePassword(input)}
          />
          <TextInput
            style={{
              height: 50,
              width: screenWidth * 0.9,
              backgroundColor: "#eee",
              paddingHorizontal: 20,
              borderRadius: 8,
              margin: 10,
            }}
            secureTextEntry
            placeholder={"Confirm Password"}
            placeholderTextColor={"grey"}
            value={this.state.repeat}
            onChangeText={(input) => this.setState({ repeat: input })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: screenWidth * 0.9,
              heigh: 50,
              padding: 12,
              borderRadius: 8,
              backgroundColor: "#0095f6",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
            onPress={() => this.onSignupPress()}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, updateUsername, signup },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, post: state.post };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
