import React, { Component, PropTypes } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  SafeAreaView
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

const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{8}$/;
  return reg.test(Phone);
});
const Supplier = t.refinement(t.String, Supplier => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Supplier);
});

const Itemtype = t.enums({
  1: "Office Supplies",
  2: "Crop Husbandry",
  3: "Animal Husbandry",
  4: "Construction Works",
  5: "Water works",
  6: "Electrical works",
  7: "Carpentry works"
});

const Unit = t.enums({
  1: "Liter",
  2: "Kilogram",
  3: "Tonne",
  4: "piece",
  5: "Bag",
  6: "Trip"
});
const PaymentMode = t.enums({
  Cash: "Cash",
  Credit: "Credit"
});

const Expenditure = t.struct({
  Date: t.Date,
  Supplier: Supplier,
  Phone: Phone,
  Product: t.String,
  Itemtype: Itemtype,
  Unit: Unit,
  UnitPrice: t.Number,
  Quantity: t.Number,
  SubTotal: t.Number,
  Tax: t.maybe(t.Number),
  Description: t.maybe(t.String),
  Total: t.Number,
  InvoiceNumber: t.maybe(t.Number),
  AmountPaid: t.Number,
  PaymentMode: PaymentMode,
  ReceiptNumber: t.maybe(t.Number),
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
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Supplier: {
      label: "Supplier",
      error: "Please enter a correct Name"
    },
    Phone: {
      label: "Phone",
      error: "Please enter a correct phone number"
    },
    Product: {
      label: "Product",
      error: "Please fill this field"
    },
    Itemtype: {
      label: "Item Type",
      error: "Please this field is required.",
      config: {
        defaultValueText: "Select"
      }
    },
    Unit: {
      label: "Unit",
      error: "Please this field is required.",
      config: {
        defaultValueText: "Select"
      }
    },
    UnitPrice: {
      label: "Unit Price"
    },
    Quantity: {
      label: "Quantity"
    },
    SubTotal: {
      label: "Sub Total"
    },
    InvoiceNumber: {
      label: "Invoice Number"
    },
    AmountPaid: {
      label: "Amount Paid"
    },
    PaymentMode: {
      label: "Payment Mode"
    },
    ReceiptNumber: {
      label: "Receipt Number"
    },
    BalanceDue: {
      label: "Balance Due"
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

export default class ExpenditureForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/expenditure/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        suppl: this.Supplier,
        phone: this.Phone,
        product: this.Product,
        itemtype: this.Itemtype,
        unit: this.Unit,
        unitprice: this.UnitPrice,
        quantity: this.Quantity,
        subtotal: this.SubTotal,
        tax: this.Tax,
        description: this.Description,
        total: this.Total,
        invnumber: this.InvoiceNumber,
        amountpaid: this.AmountPaid,
        paymode: this.PaymentMode,
        receiptnum: this.ReceiptNumber,
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
      (this.Date = value.Date),
        (this.Supplier = value.Supplier),
        (this.Phone = value.Phone),
        (this.Product = value.Product),
        (this.Itemtype = value.Itemtype),
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
      alert("Expenditure captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Expenditure</Text>
            <Form
              ref={c => (this._form = c)}
              type={Expenditure}
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
