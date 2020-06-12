import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
    if (value.Email === user.email && value.Password === user.password) {
      alert("Welcome", value.Name);
      this.clearForm();
      // console.log("No data entered");
    } else alert("Email and Password do not match");
  };
  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <View>
              <Image
                style={{
                  alignSelf: "center",
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
            </View>
            <Text style={styles.title}>Log In</Text>
            <Form
              ref={c => (this._form = c)}
              type={LoginForm}
              options={options}
            />
            <View style={styles.button}>
              <Button
                title="LOG IN"
                color="#0A802B"
                // onPress={this.handleSubmit.bind(this)}
                onPress={() => navigation.navigate("Landing Page")}
              />
            </View>
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
    // marginTop: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: "#006432",
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    // alignItems: "center",
    elevation: 10,
    marginRight: 80,
    marginLeft: 80
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
    // marginTop: 8,
    color: "#006432"
  }
});
