import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import { getEmployees } from "../actions/employeeActions";
import { connect } from "react-redux";

class EmployeeLand extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    let { navigation, route } = this.props;
    const employee = this.props;

    const employeeItems = this.props.employees.map(employee => (
      <View key={employee.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("employee Details", {
                itemId: employee.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              employee : {employee.suppl}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {employee.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Product: {employee.product}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {employee.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {employee.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Employee Summaries </Text>
          {employeeItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Employee Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  employees: state.employees.items
});

export default connect(mapStateToProps, { getEmployees })(EmployeeLand);

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "left"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 8,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3
  },
  TouchableOpacityStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    padding: 10,
    bottom: 5,
    right: 10,
    height: 30,
    top: 10,
    backgroundColor: "green",
    borderRadius: 30
  },
  TouchableOpacityAdd: {
    color: "#fff",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    // marginLeft: 20
    fontWeight: "bold"
  }
});
