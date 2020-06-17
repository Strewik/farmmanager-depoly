import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Linking,
  Image
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const RecoveryTwo = t.struct({
  NewPassword: t.String,
  ConfirmPassword: t.String
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
      marginBottom: 5,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    NewPassword: {
      autoFocus: true,
      error: "Please create a new password",
      password: true,
      secureTextEntry: true
    },
    ConfirmPassword: {
      error: "Password should match the one above",
      password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

export default class PasswordRecovery extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "column",
          justifyContent: "center"
        }}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.image}>
              <Image
                style={{
                  alignSelf: "center",
                  width: 150,
                  height: 150,
                  justifyContent: "center",
                  marginRight: 5
                }}
                source={require("../images/user.png")}
              />
            </View>
            <Form
              ref={c => (this._form = c)}
              type={RecoveryTwo}
              options={options}
            />
            <View style={styles.button}>
              <Button
                title="SUBMIT"
                color="#0A802B"
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10
  },
  image: {
    alignItems: "center"
  },
  button: {
    marginTop: 15,
    marginBottom: 50,
    marginRight: 80,
    marginLeft: 80
  }
});
