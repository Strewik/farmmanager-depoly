import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import moment from "moment";
import t from "tcomb-form-native";

const Form = t.form.Form;

const Itemtype = t.enums({
  1: "Labour & Man Power",
  2: "Vehicles & Machinery",
  3: "Consumables & Tools",
  4: "Construction & Maintenance",
  5: "Office Supplies"
});

const Requisition = t.struct({
  Date: t.Date,
  Reqno: t.maybe(t.String),
  Itemtype: Itemtype,
  Description: t.maybe(t.String),
  Purpose: t.String,
  Activity: t.maybe(t.String),
  Unit: t.String,
  UnitPrice: t.Number,
  Quantity: t.Number,
  Total: t.Number,
  RequestedBy: t.String,
  ApprovedBy: t.maybe(t.String)
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

const RequisitionOptions = {
  fields: {
    Date: {
      mode: "date",
      error: "Please select date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Reqno: {
      label: "Requisition No.",
      returnKeyType: "next"
    },
    Itemtype: {
      label: "Item Type",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Description: {
      label: "Description",
      returnKeyType: "next",
      error: "Please describe requisition"
    },
    Purpose: {
      label: "Purpose",
      returnKeyType: "next",
      error: "Please describe requisition"
    },
    Activity: {
      label: "Activity",
      returnKeyType: "next",
      error: "Name of activity or item is required"
    },
    Unit: {
      label: "Unit",
      returnKeyType: "next",
      error: "Please enter correct unit value"
    },
    UnitPrice: {
      label: "Unit Price",
      returnKeyType: "next",
      error: "Please enter unit price"
    },
    Quantity: {
      label: "Quantity",
      returnKeyType: "next",
      error: "Please provide description"
    },
    Total: {
      label: "Total",
      error: "No total captured"
    },
    RequestedBy: {
      label: "Requested By",
      returnKeyType: "next",
      error: "Requested by who?"
    },
    ApprovedBy: {
      label: "Approved By",
      returnKeyType: "done"
    }
  },
  stylesheet: formStyles
};

export default class RequisitionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/requisition/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        reqno: this.Reqno,
        itemtype: this.Itemtype,
        description: this.Description,
        purpose: this.Purpose,
        activity: this.Activity,
        unit: this.Unit,
        unitprice: this.UnitPrice,
        qty: this.Quantity,
        total: this.Total,
        requestby: this.RequestedBy,
        approvby: this.ApprovedBy
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
        (this.Reqno = value.Reqno),
        (this.Itemtype = value.Itemtype),
        (this.Description = value.Description),
        (this.Purpose = value.Purpose),
        (this.Activity = value.Activity),
        (this.Unit = value.Unit),
        (this.UnitPrice = value.UnitPrice),
        (this.Quantity = value.Quantity),
        (this.Total = value.Total),
        (this.RequestedBy = value.RequestedBy),
        (this.ApprovedBy = value.ApprovedBy),
        this.InsertDataToServer();
      this.clearForm();
      alert("Requisition captured!");
    } else console.log("No data entered");
  };
  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Requisition Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Requisition}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={RequisitionOptions}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SUBMIT"
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
