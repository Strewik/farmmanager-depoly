import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;
const Email = t.refinement(t.String, (Email) => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
    return reg.test(Email);
});
const Phone = t.refinement(t.Number, (Phone) => {
    const reg = /^[0]?[0-9]\d{9}$/;
    return reg.test(Phone);
});
const Name = t.refinement(t.String, (Name) => {
    const regex = /^[a-zA-Z].*[\s\.]*$/g;
    return regex.test(Name);
});

const User = t.struct({
    Name: Name,
    Email: Email,
    Phone: Phone,
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
    },
}};

const options = {
    fields: {
        Name: {
            autoFocus: true,
            label: "Name",
            returnKeyType: "next",
            error: "Please enter a correct Name"
        },
        Email: {
            label: "Email",
            returnKeyType: "next",
            error: "Please enter a correct email address"
        },
        Phone: {
            label: "Phone",
            returnKeyType: "next",
            error: "Please enter a correct phone number"
        },
        Password: {
            label: "Password",
            error: "Please create a password",
            Password: true,
            secureTextEntry: true
        }
    },
    stylesheet: formStyles
};

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.Name, this.Email, this.Phone, this.Password;
    }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.Name,
        email: this.Email,
        phone: this.Phone,
        password: this.Password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert("Thank You for Signing Up!");
        Alert.alert(responseJson);
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.Name = value.Name),
        (this.Email = value.Email),
        (this.Phone = value.Phone),
        (this.Password = value.Password),
        this.InsertDataToServer();
      // clear all fields after submit
      this.clearForm();
      alert("User captured!");
    } else console.log("No data entered");
  };

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Sign Up</Text>
            <Form
              ref={c => (this._form = c)}
              type={User}
              options={options}
              onChange={this.onChange.bind(this)}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Sign Up"
                // onPress={this.handleSubmit}
                onPress={() => navigation.navigate("Landing Page")}
              />
            </View>
            <Text style={styles.question}>Have an account?</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Log In
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
    // borderWidth: 5,
    // borderColor: "#006432",
    // borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 80,
    marginLeft: 80
  },
  question: {
    color: "gray",
    textAlign: "center",
    fontSize: 18
  },
  link: {
    color: "#006432",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});
