import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const season = t.enums({
  1: "March-June",
  2: "September-November",
  3: "December-Febraury"
});

const ageofcrops = t.enums({
  1: "2 years",
  2: "3 years",
  3: "4 years",
  4: "5 years",
  5: "6 years",
  6: "7 years",
  7: "8 years"
});

const Harvest = t.struct({
  name: t.String,
  harvestcode: t.maybe(t.String),
  harvestDate: t.Date,
  season: season,
  quantity: t.Number,
  units: t.Number,
  blockname: t.String,
  acreageharvested: t.maybe(t.String),
  cropsharvested: t.maybe(t.Number),
  ageofcrops: t.maybe(ageofcrops),
  workersused: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5
    }
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
      label: "Product Name",
      error: "Please fill in the name"
    },
    harvestcode: {
      label: "Harvest Code",
      error: "Please fill in the harvest code"
    },
    harvestDate: {
      label: "Date of Harvest",
      mode: "date",
      error: "Please enter harvest date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    season: {
      label: "Season",
      error: "Please fill in the season"
    },
    quantity: {
      label: "Quantity",
      error: "Please enter correct quantity value"
    },
    units: {
      label: "Units",
      error: "Please enter units of measure"
    },
    blockname: {
      label: "Block Name",
      error: "Please enter block name"
    },
    acreageharvested: {
      label: "Acreage Harvested",
      error: "Please enter acreage harvested"
    },
    cropsharvested: {
      label: "No.Crops Harvested",
      error: "Please enter number of crops harvested"
    },
    ageofcrops: {
      label: "Age of Crops",
      error: "Please enter age of crops"
    },
    workersused: {
      label: "No.Workers Used",
      error: "Please enter number of workers used"
    }
  },
  stylesheet: formStyles
};

export default class HarvestForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/harvest/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.name,
        code: this.harvestcode,
        date: this.harvestDate,
        season: this.season,
        qty: this.quantity,
        units: this.units,
        blockname: this.blockname,
        acreage: this.acreageharvested,
        cropharvestd: this.cropsharvested,
        cropage: this.ageofcrops,
        noworkers: this.workersused
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
      (this.name = value.name),
        (this.harvestcode = value.harvestcode),
        (this.harvestDate = value.harvestDate),
        (this.season = value.season),
        (this.quantity = value.quantity),
        (this.units = value.units),
        (this.blockname = value.blockname),
        (this.acreageharvested = value.acreageharvested),
        (this.cropsharvested = value.cropsharvested),
        (this.ageofcrops = value.ageofcrops),
        (this.workersused = value.workersused),
        this.InsertDataToServer();
      this.clearForm();
      alert("Harvest captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <View>
              <View>
                <Text style={styles.title}>New Harvest</Text>
              </View>
            </View>
            <Form
              ref={c => (this._form = c)}
              type={Harvest}
              options={options}
            />
            <TouchableHighlight>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="Save"
                  onPress={this.handleSubmit}
                />
              </View>
            </TouchableHighlight>
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
