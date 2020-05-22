import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Farm = t.struct({
  Farm: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginRight: 20,
      marginLeft: 20
    }
  },
  controlLabel: {
    normal: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
      color: "#006432"
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
    Farm: {
      autoFocus: true,
      label: "Enter Your Farm Name",
      error: "Please fill this part"
    }
  },
  stylesheet: formStyles
};

export default class HomeScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    // console.log("value: ", value);
    console.log(value.Farm);
  };

  render() {
    let { navigation } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <View>
              <Image
                style={{
                  alignSelf: "center",
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  marginRight: 5
                }}
                source={require("../images/farmmanager_logo.jpeg")}
              />
            </View>
            <Text style={styles.title}>FARM MANAGER</Text>
            <Text style={styles.title2}>Automate your Farm</Text>
            <View style={styles.hline}></View>
            {/* <Text style={styles.account}>Enter Your Farm Name</Text> */}
            <Form ref={c => (this._form = c)} type={Farm} options={options} />
            <View style={styles.button}>
              <Button
                title="CONTINUE"
                color="#0A802B"
                // onChange={this.handleSubmit.bind(this)}
                onPress={() => navigation.navigate("Login")}
              />
            </View>
            <View style={styles.hline}></View>
            <Text style={styles.question}>Are you new here?</Text>
            <Text style={styles.creatFarm}>Create Your Farm Now</Text>
            <View style={styles.button}>
              <Button
                title="REGISTER"
                color="#0A802B"
                // onPress={this.handleSubmit.bind(this)}
                onPress={() => navigation.navigate("Farm Form")}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
    backgroundColor: "#fff",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "#006432",
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // marginTop: 5,
    color: "#006432",
    textAlign: "center"
  },
  title2: {
    color: "#650205",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
    // alignItems: "center",
    elevation: 10,
    marginRight: 80,
    marginLeft: 80
  },
  question: {
    color: "#650205",
    textAlign: "center",
    fontSize: 18
  },
  creatFarm: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#006432"
  },
  account: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#006432"
  },
  hline: {
    borderBottomColor: "#006432",
    borderBottomWidth: 1,
    marginRight: 28,
    marginLeft: 28,
    marginTop: 10
  }
});
