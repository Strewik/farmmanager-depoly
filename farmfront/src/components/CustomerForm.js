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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
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
const Customer = t.struct({
  name: t.String,
  code: t.String,
  companyname: t.maybe(t.String),
  telephone1: telephone,
  telephone2: t.maybe(telephone),
  email: Email,
  billingaddress: t.String,
  deliveryaddress: t.maybe(t.String),
  website: t.maybe(t.String),
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
      label: "Customer Code",
      error: "Please fill this field",
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
    billingaddress: {
      label: "Billing Address",
      error: "Please enter a correct address",
      returnKeyType: "next"
    },
    deliveryaddress: {
      label: "Delivery Address",
      error: "Please enter a correct address",
      returnKeyType: "next"
    },
    website: {
      label: "Website",
      error: "Please enter a correct website",
      returnKeyType: "next"
    },
    tin: {
      label: "TIN",
      error: "Please enter a correct TIN"
    }
  },
  stylesheet: formStyles
};

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/customer/", {
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
        billingaddress: this.billingaddress,
        deliveryaddress: this.deliveryaddress,
        website: this.website,
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
        (this.billingaddress = value.billingaddress),
        (this.deliveryaddress = value.deliveryaddress),
        (this.website = value.website),
        (this.tin = value.tin),
        this.InsertDataToServer();
      this.clearForm();
      alert("Customer captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Customer Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Customer}
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
     height: hp("100%"),
     width: wp("100%"),
     justifyContent: "center",
     // marginTop: 15,
     padding: 20,
     borderWidth: 5,
     borderColor: "#006432",
     borderRadius: 10
   },
   title: {
     // fontSize: 25,
     fontSize: hp("5%"),
     fontWeight: "bold",
     // marginTop: 5,
     marginTop: wp("5"),
     color: "#006432",
     textAlign: "center",
     marginBottom: 25
   },
   button: {
     marginTop: 20,
     marginBottom: wp("30"),
     elevation: 10,
     // marginRight: 80,
     marginRight: wp("20"),
     // marginLeft: 80
     marginLeft: wp("20")
     // borderWidth: 3,
     // borderColor: "#006432",
     // borderRadius: 10
   }
 });
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 20
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: 5,
//     color: "#006432",
//     textAlign: "center",
//     marginBottom: 25
//   },
//   button: {
//     marginTop: 20,
//     marginBottom: 50,
//     marginRight: 80,
//     marginLeft: 80
//   }
// });
