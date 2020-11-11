import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";
import moment from "moment";
var t = require("tcomb-form-native");
const Form = t.form.Form;

const ItemType = t.enums({
  1: "Crop Management",
  2: "Car & Machine Servicing",
  3: "Power Tool Parts",
  4: "Office Sundries"
});

const MainUser = t.enums({
  1: "Nursery Bed Dept",
  2: "Clearing & Planting",
  3: "Weeding & Slashing",
  4: "Fertilization & Pesticides",
  5: "Harvesting & Drying",
  6: "Plumbing & Water works",
  7: "Mechanical Dept",
  8: "Welding & Metal work",
  9: "Carpentry & wood works"
});

const Material = t.enums({
  1: "Foam",
  2: "Liquid",
  3: "Powder",
  4: "Pelts",
  5: "Solid"
});

const Source = t.enums({
  1: "On-Farm",
  2: "Near by Town",
  3: "City Shops",
  4: "Importation"
});

const Unit = t.enums({
  1: "Litre",
  2: "Kilogram",
  3: "Bag",
  4: "Sack",
  5: "Trip"
});

const UnitSize = t.enums({
  1: "Tiny",
  2: "Small",
  3: "Big",
  4: "Heavy",
  5: "Bulky"
});

const Consumable = t.struct({
  Date: t.Date,
  Name: t.String,
  ItemType: ItemType,
  Description: t.maybe(t.String),
  Purpose: t.maybe(t.String),
  Material: Material,
  Source: Source,
  Unit: Unit,
  UnitSize: UnitSize,
  UnitCost: t.String,
  MainUser: MainUser
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
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("YYYY-DD-MM")
      }
    },
    Name: {
      error: "Please enter a correct Name"
    },
    ItemType: {
      label: "Item Type",
      error: "You must select one item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Description: {
      label: "Description",
      error: "Please fill this field"
    },
    Purpose: {
      label: "Purpose",
      error: "Please fill this field"
    },
    Material: {
      label: "Material",
      error: "You must select an item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Source: {
      lalabel: "Source",
      error: "You must select an item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Unit: {
      label: "Unit",
      error: "You must select an item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    UnitSize: {
      label: "UnitSize",
      error: "You must select an item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    UnitCost: {
      label: "UnitCost",
      error: "You must fill this part"
    },
    MainUser: {
      label: "Main User",
      error: "You must select an item",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    }
  },
  stylesheet: formStyles
};

export default class ConsumableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/consumable/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        name: this.Name,
        itemtype: this.ItemType,
        description: this.Description,
        purpose: this.Purpose,
        material: this.Material,
        source: this.Source,
        unit: this.Unit,
        unitsize: this.UnitSize,
        unitcost: this.UnitCost,
        mainuser: this.MainUser
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
        (this.Name = value.Name),
        (this.ItemType = value.ItemType),
        (this.Description = value.Description),
        (this.Purpose = value.Purpose),
        (this.Material = value.Material),
        (this.Source = value.Source),
        (this.Unit = value.Unit),
        (this.UnitSize = value.UnitSize),
        (this.UnitCost = value.UnitCost),
        (this.MainUser = value.MainUser),
        this.InsertDataToServer();
      this.clearForm();
      alert("Consumable captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Consumable Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Consumable}
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
