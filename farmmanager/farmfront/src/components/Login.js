import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;
const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
});

const LoginForm = t.struct({
  Email: Email,
  Password: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {}
  },
  controlLabel: {
    normal: {
      color: "#006432",
      fontSize: 20
    },
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    Email: {
      autoFocus: true,
      error: "Please enter a valid email"
    },
    Password: {
      error: "Please enter password",
      Password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

export default class Login extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Log In</Text>
            <Form
              ref={c => (this._form = c)}
              type={LoginForm}
              options={options}
            />
            {/* <TouchableOpacity> */}
            <View style={styles.button}>
              <Button
                title="Login"
                color="#0A802B"
                onPress={this.handleSubmit.bind(this)}
              />
            </View>
            {/* </TouchableOpacity> */}
            <Text
              style={styles.forgot}
              onPress={() => navigation.navigate("Password 0ne")}
            >
              Forgot Password?
            </Text>
            <Text style={styles.question}>Don't have an account?</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 15,
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    // alignItems: "center",
    elevation: 10
  },
  question: {
    color: "gray",
    textAlign: "center",
    marginTop: 8,
    fontSize: 18
  },
  link: {
    color: "#006432",
    textAlign: "center",
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
  forgot: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    color: "#006432"
  }
});
