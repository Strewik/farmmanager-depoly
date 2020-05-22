import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import moment from "moment";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const telephone = t.refinement(t.Number, telephone => {
  const reg = /^[0]?[0-9]\d{9}$/;
  return reg.test(telephone);
});

const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
});

const terms = t.enums({
  1: "Prepayment",
  2: "Cash on delivery",
  3: "7 Day credit",
  4: "14 Day credit",
  5: "30 Day credit",
  6: "60 Day credit"
});

const Supplier = t.struct({
  name: t.String,
  code: t.maybe(t.String),
  companyname: t.String,
  telephone1: telephone,
  telephone2: t.maybe(telephone),
  email: t.maybe(Email),
  busaddress: t.String,
  category: t.String,
  terms: t.maybe(terms),
  tin: t.maybe(t.Number)
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
    name: {
      autoFocus: true,
      label: "Full Name",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    code: {
      label: "Supplier Code",
      returnKeyType: "next"
    },
    companyname: {
      label: "Company Name",
      error: "Please fill correct name",
      returnKeyType: "next"
    },
    telephone1: {
      label: "Telephone 1",
      error: "Please enter a correct phone number",
      returnKeyType: "next"
    },
    telephone2: {
      label: "Telephone 2",
      error: "Please enter a correct phone number",
      returnKeyType: "next"
    },
    email: {
      label: "Email Address",
      error: "Please enter a correct email address",
      returnKeyType: "next"
    },
    busaddress: {
      label: "Business Address",
      error: "Please enter a correct address",
      returnKeyType: "next"
    },
    category: {
      label: "Supplier Category",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    terms: {
      label: "Terms",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    tin: {
      label: "TIN",
      error: "Please enter a correct TIN"
    }
  },
  stylesheet: formStyles
};

export default class SupplierForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/supplier/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.name,
        code: this.code,
        companyname: this.companyname,
        telephone1: this.telephone1,
        telephone2: this.telephone2,
        email: this.email,
        busaddress: this.busaddress,
        category: this.category,
        terms: this.terms,
        tin: this.tin
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.name = value.name),
        (this.code = value.code),
        (this.companyname = value.companyname),
        (this.telephone1 = value.telephone1),
        (this.telephone2 = value.telephone2),
        (this.email = value.email),
        (this.busaddress = value.busaddress),
        (this.category = value.category),
        (this.terms = value.terms),
        (this.tin = value.tin),
        this.InsertDataToServer();
      this.clearForm();
      alert("Supplier captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Supplier Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Supplier}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit}
                />
              </View>
            </TouchableOpacity>
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
    marginBottom: 50,
    marginRight: 80,
    marginLeft: 80
  }
});
