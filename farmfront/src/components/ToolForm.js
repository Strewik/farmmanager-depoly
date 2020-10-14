import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Condition = t.enums({
  1: "Brand New Unused",
  2: "Good Working Condition",
  3: "Fair Condition",
  4: "Poor Condition",
  5: "Damaged Irrepairable"
});

const Purpose = t.enums({
  1: "Clearing",
  2: "Planting",
  3: "Weeding",
  4: "Slashing",
  5: "Spraying",
  6: "Fertilization",
  7: "Cherry Picking",
  8: "Drying",
  9: "Pruning",
  10: "Uprooting"
});

const Source = t.enums({
  1: "On-Farm",
  2: "Near by Town",
  3: "City Shops",
  4: "Importation"
});

const Tool = t.struct({
  Date: t.Date,
  ToolName: t.String,
  ToolType: t.String,
  Purpose: Purpose,
  Source: Source,
  MainUser: t.String,
  Model: t.maybe(t.String),
  Condition: Condition,
  LifeSpan: t.maybe(t.String),
  Quantity: t.Number,
  Costpertool: t.maybe(t.Number)
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
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    ToolName: {
      label: "Tool Name",
      error: "Please fill this field."
    },
    ToolType: {
      label: "Tool Type",
      error: "Please fill this field."
    },
    Purpose: {
      label: "Purpose",
      error: "Please fill this field."
    },
    Source: {
      label: "Source",
      error: "Please fill this field"
    },
    MainUser: {
      label: "Main User",
      error: "Please fill this field."
    },
    Model: {
      label: "Make/Model"
    },
    Condition: {
      label: "Condition",
      error: "Please select tool condition."
    },
    LifeSpan: {
      label: "Lifespan"
    },
    Quantity: {
      label: "Quantity",
      error: "Please enter quantity of tools."
    },
    Costpertool: {
      label: "Cost per Tool"
    }
  },
  stylesheet: formStyles
};

export default class ToolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/tool/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        toolname: this.ToolName,
        tooltype: this.ToolType,
        purpose: this.Purpose,
        source: this.Source,
        mainuser: this.MainUser,
        model: this.Model,
        condition: this.Condition,
        lifespan: this.LifeSpan,
        qty: this.Quantity,
        toolcost: this.Costpertool,
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
      (this.Date = value.Date),
        (this.ToolName = value.ToolName),
        (this.ToolType = value.ToolType),
        (this.Purpose = value.Purpose),
        (this.Source = value.Source),
        (this.MainUser = value.MainUser),
        (this.Model = value.Model),
        (this.Condition = value.Condition),
        (this.LifeSpan = value.LifeSpan),
        (this.Quantity = value.Quantity),
        (this.Costpertool = value.Costpertool),
        this.InsertDataToServer();
      this.clearForm();
      alert("Tool captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Tool Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Tool}
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
