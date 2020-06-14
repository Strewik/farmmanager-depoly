import React, { Component, PropTypes } from "react";
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

const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{8}$/;
  return reg.test(Phone);
});
const Customer = t.refinement(t.String, Customer => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Customer);
});

const PaymentMode = t.enums({
  Cash: "Cash",
  Credit: "Credit"
});

const Product = t.enums({
  1: "Robusta Green Bean",
  2: "Robusta Kase",
  3: "Robusta Kiboko",
  4: "Robusta Red Cherry"
});

const VAT = t.enums({
  1: "VAT Inclusive",
  2: "VAT Excluded",
  3: "Not Applicable"
});
const Income = t.struct({
  AmountRec: t.Number,
  ReceiptNumber: t.maybe(t.Number),
  Customer: Customer,
  Phone: Phone,
  Date: t.Date,
  Product: Product,
  Quantity: t.Number,
  Unit: t.String,
  UnitPrice: t.Number,
  SubTotal: t.Number,
  VAT: t.maybe(VAT),
  Total: t.Number,
  PaymentMode: PaymentMode,
  Invnumber: t.maybe(t.Number),
  BalanceDue: t.maybe(t.Number),
  BalanceDueDate: t.maybe(t.Date)
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
    AmountRec: {
      autoFocus: true,
      label: "Amount Received",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    ReceiptNumber: {
      label: "Receipt Number",
      returnKeyType: "next"
    },
    Customer: {
      label: "Customer Name",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Phone: {
      label: "Phone Number",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Date: {
      label: "Date of Sale",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Product: {
      label: "Product Name",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Quantity: {
      label: "Quantity",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Unit: {
      label: "Units",
      error: "Fill this field",
      returnKeyType: "next"
    },
    UnitPrice: {
      label: "Unit Price",
      error: "Fill this field",
      returnKeyType: "next"
    },
    SubTotal: {
      label: "Sub Total",
      error: "Fill this field",
      returnKeyType: "next"
    },
    VAT: {
      label: "VAT",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Total: {
      label: "Total",
      error: "Fill this field",
      returnKeyType: "next"
    },
    PaymentMode: {
      label: "Payment Mode",
      error: "Fill this field",
      returnKeyType: "next"
    },
    Invnumber: {
      label: "Invoice Number",
      error: "Fill this field",
      returnKeyType: "next"
    },
    BalanceDue: {
      label: "Balance Due",
      returnKeyType: "next"
    },
    BalanceDueDate: {
      label: "Due Date",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    }
  },
  stylesheet: formStyles
};

export default class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/income/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amountrecvd: this.AmountRec,
        receiptnum: this.ReceiptNumber,
        customer: this.Customer,
        phone: this.Phone,
        date: this.Date,
        product: this.Product,
        quantity: this.Quantity,
        unit: this.Unit,
        unitprice: this.UnitPrice,
        subtotal: this.SubTotal,
        vat: this.VAT,
        total: this.Total,
        paymode: this.PaymentMode,
        invnumber: this.Invnumber,
        baldue: this.BalanceDue,
        balduedate: this.BalanceDueDate
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
      (this.AmountRec = value.AmountRec),
        (this.ReceiptNumber = value.ReceiptNumber),
        (this.Customer = value.Customer),
        (this.Phone = value.Phone),
        (this.Date = value.Date),
        (this.Product = value.Product),
        (this.Quantity = value.Quantity),
        (this.Unit = value.Unit),
        (this.UnitPrice = value.UnitPrice),
        (this.SubTotal = value.SubTotal),
        (this.VAT = value.VAT),
        (this.Total = value.Total),
        (this.PaymentMode = value.PaymentMode),
        (this.Invnumber = value.Invnumber),
        (this.BalanceDue = value.BalanceDue),
        (this.BalanceDueDate = value.BalanceDueDate),
        this.InsertDataToServer();
      this.clearForm();
      alert("Income captured!");
    } else console.log("No data entered");
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
        (this.Customer = value.Customer),
        (this.Phone = value.Phone),
        (this.Product = value.Product),
        (this.Unit = value.Unit),
        (this.UnitPrice = value.UnitPrice),
        (this.Quantity = value.Quantity),
        (this.SubTotal = value.SubTotal),
        (this.Tax = value.Tax),
        (this.Description = value.Description),
        (this.Total = value.Total),
        (this.InvoiceNumber = value.InvoiceNumber),
        (this.AmountPaid = value.AmountPaid),
        (this.PaymentMode = value.PaymentMode),
        (this.ReceiptNumber = value.ReceiptNumber),
        (this.BalanceDue = value.BalanceDue),
        (this.BalanceDueDate = value.BalanceDueDate),
        this.InsertDataToServer();
      this.clearForm();
      alert("Income captured!");
    } else console.log("No data entered");
  };

  // handlenum1Change = evt => {
  //   const num1 = this._form.getValue().Quantity;
  //   num1 = Number(evt.target.value);
  //   this.setState(prevState => ({
  //     num1,
  //     result: num1 + prevState.num2
  //   }));
  // };

  // handlenum2Change = evt => {
  //   const num2 = this._form.getValue().UnitPrice;
  //   num2 = Number(evt.target.value);
  //   this.setState(prevState => ({
  //     num2,
  //     result: prevState.num1 + num2
  //   }));
  // };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Income</Text>
            <Form
              ref={c => (this._form = c)}
              type={Income}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="SAVE"
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
    marginBottom: 50
  }
});



// import * as yup from "yup";
// import { Formik } from 'formik'

// import React, { Component, Fragment } from 'react';
// import { TextInput, Text, Button, Alert, StyleSheet SafeAreaView } from "react-native";


// export default class Income extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container} behavior="padding" enabled>
//         <ScrollView>
//           <View>
//             <Text style={styles.title}>Sales Form</Text>
//             <Form
//               ref={c => (this._form = c)}
//               type={Income}
//               value={this.state.value}
//               onChange={this.onChange.bind(this)}
//               options={options}
//             />
//             <View style={styles.button}>
//               <Button
//                 color="#0A802B"
//                 title="SAVE"
//                 onPress={this.handleSubmit}
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

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
//     marginBottom: 50
//   }
// });
