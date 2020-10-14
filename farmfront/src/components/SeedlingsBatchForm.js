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

const SeedlingsBatch = t.struct({
  date: t.Date,
  batchcode: t.maybe(t.String),
  noseedlings: t.String,
  mothergarden: t.String,
  variety: t.String,
  cloneline: t.maybe(t.String),
  nurseryname: t.maybe(t.String),
  location: t.maybe(t.String),
  age: t.maybe(t.String),
  hardeningstatus: t.maybe(t.String)
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
    date: {
      label: "Date",
      mode: "date",
      error: "Please select date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    batchcode: {
      label: "Batch Code"
    },
    noseedlings: {
      label: "No.of Seedlings",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    mothergarden: {
      label: "Mother Garden",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    variety: {
      label: "Variety",
      error: "Please fill this field",
      returnKeyType: "next"
    },
    cloneline: {
      label: "Clone Line",
      returnKeyType: "next"
    },
    nurseryname: {
      label: "Nursery Name",
      returnKeyType: "next"
    },
    location: {
      label: "Location of batch",
      returnKeyType: "next"
    },
    age: {
      label: "Age of Seedlings",
      returnKeyType: "next"
    },
    hardeningstatus: {
      label: "Hardening Status",
      returnKeyType: "next"
    }
  },
  stylesheet: formStyles
};

export default class SeedlingsBatchForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/seedling/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.date,
        code: this.batchcode,
        noseedlings: this.noseedlings,
        mother: this.mothergarden,
        variety: this.variety,
        clone: this.cloneline,
        nursery: this.nurseryname,
        location: this.location,
        age: this.age,
        status: this.hardeningstatus
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
      (this.date = value.date),
        (this.batchcode = value.batchcode),
        (this.noseedlings = value.noseedlings),
        (this.mothergarden = value.mothergarden),
        (this.variety = value.variety),
        (this.cloneline = value.cloneline),
        (this.nurseryname = value.nurseryname),
        (this.location = value.location),
        (this.age = value.age),
        (this.hardeningstatus = value.hardeningstatus),
        this.InsertDataToServer();
      this.clearForm();
      alert("Seedlings Batch captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <View>
              <View>
                <Text style={styles.title}>New Seedlings Batch</Text>
              </View>
            </View>
            <Form
              ref={c => (this._form = c)}
              type={SeedlingsBatch}
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
    marginBottom: 50,
    marginRight: 80,
    marginLeft: 80
  }
});
