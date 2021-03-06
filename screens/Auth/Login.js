import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, login } from "../../actions/user";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 80,
            fontFamily: "Billabong",
            margin: 30,
            marginVertical: 60,
          }}
        >
          Instagram
        </Text>
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
        </View>
        <View
          style={{
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: screenWidth * 0.9,
              heigh: 50,
              padding: 12,
              borderRadius: 8,
              backgroundColor: "#0095f6",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => this.props.login()}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Log in
            </Text>
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              margin: 10,
              flexDirection: "row",
              position: "absolute",
              bottom: -170,
            }}
          >
            <Text style={{ fontSize: 15 }}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#0095f6" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login }, dispatch);
};

const mapStateToProps = (state) => {
  return { user: state.user, post: state.post };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
