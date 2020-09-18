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

const FullName = t.refinement(t.String, FullName => {
  const regex = /^[a-zA-Z0-9].*[\s\.]*$/i;
  return regex.test(FullName);
});

const PhoneNumber1 = t.refinement(t.Number, PhoneNumber1 => {
  const regex = /^[0-9].*[\s\.]*$/i;
  return regex.test(PhoneNumber1);
});

var Gender = t.enums({
  M: "Male",
  F: "Female"
});

var Education = t.enums({
  PHD: "PhD",
  Masters: "Masters",
  Degree: "Degree",
  Diploma: "Diploma",
  Certificate: "Certificate",
  UACE: "A-Level",
  UCE: "O-Level",
  PLE: "PLE",
  None: "None"
});

var Skills = t.enums({
  1: "Harvesting",
  2: "Weeding",
  3: "Planting",
  4: "Machine Operation",
  5: "Driving Cars",
  6: "Driving Trucks"
});

var Religion = t.enums({
  1: "Seventh Day Adventist",
  2: "Born Again Christian",
  3: "Anglican",
  4: "Catholic",
  5: "Muslim",
  6: "Other"
});

const Casual = t.struct({
  FullName: FullName,
  Gender: Gender,
  ContractStartDate: t.maybe(t.Date),
  ReasonToHire: t.String,
  ContractExpiryDate: t.Date,
  Education: Education,
  DateOfBirth: t.Date,
  PhoneNumber1: PhoneNumber1,
  PhoneNumber2: t.maybe(t.Number),
  Skills: t.maybe(Skills),
  HomeTown: t.maybe(t.String),
  Religion: t.maybe(Religion),
  NationalIdNo: t.maybe(t.String)
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
    FullName: {
      autoFocus: true,
      label: "Full Name",
      error: "Please use only letters."
    },
    Gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    ContractStartDate: {
      label: "Contract Start date",
      mode: "date",
      error: "Please select date.",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    ReasonToHire: {
      label: "Reason to Hire",
      error: "Please this field is required."
    },
    ContractExpiryDate: {
      label: "Contract Expiry Date",
      mode: "date",
      error: "Please select date.",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Education: {
      label: "Education",
      error: "Please this field is required.",
      config: {
        defaultValueText: "Select"
      }
    },
    DateOfBirth: {
      mode: "date",
      error: "Please select date.",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    PhoneNumber1: {
      label: "Phone Number1",
      error: "Please use only digits."
    },
    PhoneNumber2: {
      label: "Phone Number2",
      error: "Please use only digits."
    },
    Skills: {
      label: "Skills",
      error: "Please select a skill",
      config: {
        defaultValueText: "Select"
      }
    },
    HomeTown: {
      label: "Home Town"
    },
    Religion: {
      label: "Religion",
      error: "Please fill in the Religion",
      config: {
        defaultValueText: "Select"
      }
    },
    NationalIdNo: {
      label: "NIN"
    }
  },
  stylesheet: formStyles
};

export default class CasualForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/casual/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.FullName,
        gender: this.Gender,
        startdate: this.ContractStartDate,
        reasontohire: this.ReasonToHire,
        expirydate: this.ContractExpiryDate,
        education: this.Education,
        dob: this.DateOfBirth,
        phone1: this.PhoneNumber1,
        phone2: this.PhoneNumber2,
        skills: this.Skills,
        home: this.HomeTown,
        religion: this.Religion,
        nin: this.NationalIdNo
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
      (this.FullName = value.FullName),
        (this.Gender = value.Gender),
        (this.ContractStartDate = value.ContractStartDate),
        (this.ReasonToHire = value.ReasonToHire),
        (this.ContractExpiryDate = value.ContractExpiryDate),
        (this.Education = value.Education),
        (this.DateOfBirth = value.DateOfBirth),
        (this.PhoneNumber1 = value.PhoneNumber1),
        (this.PhoneNumber2 = value.PhoneNumber2),
        (this.Skills = value.Skills),
        (this.HomeTown = value.HomeTown),
        (this.Religion = value.Religion),
        (this.NationalIdNo = value.NationalIdNo),
        this.InsertDataToServer();
      this.clearForm();
      alert("Casual captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Casual Form</Text>
            <Form ref={c => (this._form = c)} type={Casual} options={options} />
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
    marginBottom: 50,
    marginRight: 80,
    marginLeft: 80
  }
});
