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

const name = t.refinement(t.String, name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(name);
});

var gender = t.enums({
  M: "Male",
  F: "Female"
});

var Status = t.enums({
  Permanent: "Permanent",
  Temporary: "Temporary"
});

var PaymentMethod = t.enums({
  Cash: "Cash",
  Bank: "Bank",
  MobileMoney: "Mobile Money"
});

const AdvanceForm = t.struct({
  date: t.Date,
  name: name,
  gender: gender,
  position: t.String,
  status: Status,
  advancedamnt: t.Number,
  reason: t.String,
  recipient: t.String,
  payperiod: t.String,
  paymethod: PaymentMethod
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
    date: {
      label: "Date of Advance",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("YYYY-DD-MM")
      }
      // config: {
      //   defaultValueText: "Select",
      //   format: strDate => utils.convertDateToString(strDate, "YYYY-MM-DD")
      // }
    },
    name: {
      autoFocus: true,
      label: "Staff Name",
      error: "Please enter a correct Name",
      returnKeyType: "next"
    },
    gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    position: {
      label: "Position",
      error: "Please enter the employee's position",
      returnKeyType: "next"
    },
    status: {
      label: "Job Status",
      error: "Please enter the status of the employee",
      returnKeyType: "next"
    },
    advancedamnt: {
      label: "Advance Amount",
      error: "Please enter a correct advance Amount",
      returnKeyType: "next"
    },
    reason: {
      label: "Reason for Advance",
      error: "Please enter a  reason for advance",
      returnKeyType: "next"
    },
    recipient: {
      label: "Advance Recipient",
      error: "Please enter who picked the advance",
      returnKeyType: "next"
    },
    payperiod: {
      label: "Pay Period",
      error: "Please enter pay period",
      returnKeyType: "next"
    },
    paymethod: {
      label: "Payment Method",
      error: "Please select method of payment"
    }
  },
  stylesheet: formStyles
};

export default class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/advance/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.date,
        name: this.name,
        gender: this.gender,
        position: this.position,
        status: this.status,
        advancedamnt: this.advancedamnt,
        reason: this.reason,
        recipient: this.recipient,
        payperiod: this.payperiod,
        paymethod: this.paymethod
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
    console.log(value.name);
    if (value != null) {
      (this.date = value.date),
        (this.name = value.name),
        (this.gender = value.gender),
        (this.position = value.position),
        (this.status = value.status),
        (this.advancedamnt = value.advancedamnt),
        (this.description = value.description),
        (this.reason = value.reason),
        (this.recipient = value.recipient),
        (this.payperiod = value.payperiod),
        (this.paymethod = value.paymethod),
        this.InsertDataToServer();
      this.clearForm();
      alert("Advance captured!");
    } else console.log("No data entered");
  };
  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Advance Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={AdvanceForm}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit.bind(this)}
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
