import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

// var t = require("tcomb-form-native");
// const Form = t.form.Form;

// const Farm = t.struct({
//   Farm: t.String
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {}
//   },
//   controlLabel: {
//     normal: {
//       color: "#006432",
//       fontSize: 20
//     },
//     error: {
//       color: "red",
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: "600"
//     }
//   }
// };

// const options = {
//   fields: {
//     Farm: {
//       autoFocus: true,
//       label: "Enter Your Farm Name",
//       error: "Please fill this part"
//     }
//   },
//   stylesheet: formStyles
// };

export default class HomeScreen extends Component {
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
            <View style={styles.image}>
              <Image source={require("../images/farmmanager_logo.jpeg")} />
            </View>
            <Text style={styles.title}>FARM MANAGER</Text>
            <Text style={styles.title2}>Automate your Farm</Text>
            <View style={styles.hline}></View>
            <View style={styles.body}>
              <Text>Enter Your Farm Name</Text>
              <TextInput>Enter Your Farm Name</TextInput>
            </View>
            {/* <Form ref={c => (this._form = c)} type={Farm} options={options} /> */}
            <View style={styles.button}>
              <Button
                title="LOG IN"
                color="#0A802B"
                // onPress={this.handleSubmit.bind(this)}
                onPress={() => navigation.navigate("Login")}
              />
            </View>
            <View style={styles.hline}></View>
            <Text style={styles.question}>Are you new here?</Text>
            <Text
              style={styles.creatFarm}
              onPress={() => navigation.navigate("Password 0ne")}
            >
              Create Your Farm Now
            </Text>
            <View style={styles.button}>
              <Button
                title="REGISTER"
                color="#0A802B"
                // onPress={this.handleSubmit.bind(this)}
                onPress={() => navigation.navigate("SignUp")}
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
    marginTop: 15,
    padding: 20,
    backgroundColor: "#fff",
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // alignSelf: "stretch",
    marginTop: 5,
    color: "#006432",
    textAlign: "center"
    // marginBottom: 25
  },
  title2: {
    color: "#650205",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold"
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

  creatFarm: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    color: "#006432"
  }
});
