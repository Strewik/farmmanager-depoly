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

const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

var PaymentMtd = t.enums({
  Cash: "Cash",
  Cheque: "Cheque",
  Inkind: "In-Kind",
  Bank: "Bank",
  MobileMoney: "Mobile Money"
});

const Payroll = t.struct({
  Date: t.Date,
  Name: Name,
  Position: t.String,
  Advance: t.maybe(t.Number),
  Netsalary: t.Number,
  LST: t.maybe(t.Number),
  NSSF: t.maybe(t.Number),
  PAYE: t.maybe(t.Number),
  Grosssalary: t.Number,
  Payperiod: t.Date,
  PaymentMtd: PaymentMtd
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
  ...Form.options,
  fields: {
    Date: {
      label: "Date of Payment",
      mode: "date",
      error: "Please enter a correct date",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Name: {
      label: "Staff Name",
      error: "Please enter a correct Name",
      returnKeyType: "next"
    },
    Position: {
      label: "Position",
      error: "Please enter the employee's position",
      returnKeyType: "next"
    },
    Advance: {
      label: "Advance Taken",
      error: "Advance missing",
      returnKeyType: "next"
    },
    Netsalary: {
      label: "Net Salary",
      error: "Net pay is missing",
      returnKeyType: "next"
    },
    LST: {
      label: "LST",
      error: "Fill in local service tax",
      returnKeyType: "next"
    },
    NSSF: {
      label: "NSSF",
      error: "NSSF is missing",
      returnKeyType: "next"
    },
    PAYE: {
      label: "PAYE",
      error: "PAYE is missing",
      returnKeyType: "next"
    },
    Grosssalary: {
      label: "Gross Salary",
      error: "Please enter gross salary",
      returnKeyType: "next"
    },
    Payperiod: {
      label: "Pay Period",
      mode: "date",
      error: "Please select pay period",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    PaymentMtd: {
      label: "Payment Method",
      error: "Please select a method of payment",
      returnKeyType: "next"
    }
  },
  stylesheet: formStyles
};

export default class PayrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/payroll/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        name: this.Name,
        position: this.Position,
        advance: this.Advance,
        netsalary: this.Netsalary,
        lst: this.LST,
        nssf: this.NSSF,
        paye: this.PAYE,
        grosssalary: this.Grosssalary,
        payperiod: this.Payperiod,
        paymtd: this.PaymentMtd
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
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.Date = value.Date),
        (this.Name = value.Name),
        (this.Position = value.Position),
        (this.Advance = value.Advance),
        (this.Netsalary = value.Netsalary),
        (this.LST = value.LST),
        (this.NSSF = value.NSSF),
        (this.PAYE = value.PAYE),
        (this.Grosssalary = value.Grosssalary),
        (this.Payperiod = value.Payperiod),
        (this.PaymentMtd = value.PaymentMtd),
        this.InsertDataToServer();
      // clear all fields after submit
      this.clearForm();
      alert("Payroll captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Payroll Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Payroll}
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
