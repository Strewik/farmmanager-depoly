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
const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
});

const RecoveryOne = t.struct({
  Email: Email
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
    }
  },
  stylesheet: formStyles
};

export default class PasswordRecovery extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
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
            <Text style={styles.word}>Enter Account Email</Text>
            <Form
              ref={c => (this._form = c)}
              type={RecoveryOne}
              options={options}
            />
            <View>
              <Text
                style={styles.recovery}
                onPress={() => navigation.navigate("Password Two")}
              >
                Send Recovery Link To My Email
              </Text>
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
    alignItems: "center",
    marginTop: 10
  },
  word: {
    fontSize: 20,
    marginTop: 10,
    color: "#006432",
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10
  },
  recovery: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#006432"
  }
});

