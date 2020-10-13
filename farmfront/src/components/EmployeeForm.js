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

const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
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

var Religion = t.enums({
  1: "Seventh Day Adventist",
  2: "Born Again Christian",
  3: "Anglican",
  4: "Catholic",
  5: "Muslim",
  6: "Other"
});

const Employee = t.struct({
  FullName: FullName,
  Gender: Gender,
  Employeeno: t.maybe(t.String),
  DateOfBirth: t.Date,
  Position: t.String,
  Department: t.String,
  Email: t.maybe(Email),
  PhoneNumber1: PhoneNumber1,
  PhoneNumber2: t.maybe(t.Number),
  Startdate: t.Date,
  Education: Education,
  Religion: Religion,
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
      error: "Please use only letters.",
      returnKeyType: "next"
    },
    Gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Employeeno: {
      label: "Employee No.",
      returnKeyType: "next"
    },
    DateOfBirth: {
      label: "Date of Birth",
      mode: "date",
      error: "Please select date.",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Position: {
      label: "Position",
      error: "Please fill this field.",
      returnKeyType: "next"
    },
    Department: {
      label: "Department",
      error: "Please fill this field.",
      returnKeyType: "next"
    },
    Email: {
      label: "Email Address",
      error: "Please enter a correct email address",
      returnKeyType: "next"
    },
    PhoneNumber1: {
      label: "Phone Number1",
      error: "Please use only digits.",
      returnKeyType: "next"
    },
    PhoneNumber2: {
      label: "Phone Number2",
      error: "Please use only digits.",
      returnKeyType: "next"
    },
    Startdate: {
      label: "Job Start Date",
      mode: "date",
      error: "Please select date.",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Education: {
      label: "Education",
      error: "Please this field is required.",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
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

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/employee/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: this.FullName,
        gender: this.Gender,
        employeeno: this.Employeeno,
        dob: this.DateOfBirth,
        position: this.Position,
        department: this.Department,
        email: this.Email,
        phone1: this.PhoneNumber1,
        phone2: this.PhoneNumber2,
        startdate: this.Startdate,
        education: this.Education,
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
        (this.Employeeno = value.Employeeno),
        (this.DateOfBirth = value.DateOfBirth),
        (this.Position = value.Position),
        (this.Department = value.Department),
        (this.Email = value.Email),
        (this.PhoneNumber1 = value.PhoneNumber1),
        (this.PhoneNumber2 = value.PhoneNumber2),
        (this.Startdate = value.Startdate),
        (this.Education = value.Education),
        (this.Religion = value.Religion),
        (this.NationalIdNo = value.NationalIdNo);
      this.InsertDataToServer();
      this.clearForm();
      alert("Employee captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Employee Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Employee}
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
    marginBottom: 50,
    marginRight: 80,
    marginLeft: 80
  }
});
