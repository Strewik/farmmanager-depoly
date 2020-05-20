import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView
} from "react-native";
import moment from "moment";

var t = require("tcomb-form-native");
const Form = t.form.Form;

var ToolCondition = t.enums({
  1: "Good Working Order",
  2: "Tool Needs Maintenance",
  3: "Damaged, Not Working",
  4: "Misplaced or Lost",
  5: "Boarded Off"
});

const ToolBinCard = t.struct({
  ToolName: t.String,
  Description: t.String,
  DateTakenIn: t.Date,
  StoreName: t.String,
  DateTakenOut: t.Date,
  TakenBy: t.String,
  ToolCondition: ToolCondition,
  SerialNumber: t.maybe(t.String)
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
    ToolName: {
      label: "Tool Name",
      error: "Please use only letters."
    },
    Description: {
      error: "Please explain what the tool is exactly."
    },
    DateTakenIn: {
      label: "Date Taken In",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    StoreName: {
      label: "Store Name",
      error: "Please mention where the tool is being kept."
    },
    DateTakenOut: {
      label: "Date Taken Out",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    TakenBy: {
      label: "Taken By",
      error: "Please enter persons name."
    },
    ToolCondition: {
      label: "Tool Condition",
      error: "Please enter tool condition."
    },
    SerialNumber: {
      label: "Serial Number",
      error: "Please use letters & numbers."
    }
  },
  stylesheet: formStyles
};

export default class ToolBinCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/toolbincard/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        toolname: this.ToolName,
        description: this.Description,
        datein: this.DateTakenIn,
        storename: this.StoreName,
        dateout: this.DateTakenOut,
        takenby: this.TakenBy,
        toolcond: this.ToolCondition,
        serialno: this.SerialNumber
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
      (this.ToolName = value.ToolName),
        (this.Description = value.Description),
        (this.DateTakenIn = value.DateTakenOut),
        (this.StoreName = value.StoreName),
        (this.DateTakenOut = value.DateTakenOut),
        (this.TakenBy = value.TakenBy),
        (this.ToolCondition = value.ToolCondition),
        (this.SerialNumber = value.SerialNumber),
        this.InsertDataToServer();
      this.clearForm();
      alert("Tool Bin Card captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Tool Bin Card</Text>
            <Form
              ref={c => (this._form = c)}
              type={ToolBinCard}
              options={options}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Save"
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
