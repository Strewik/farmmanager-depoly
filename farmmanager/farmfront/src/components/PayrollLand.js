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
import { getPayroll } from "../actions/payrollActions";
import { connect } from "react-redux";

class PayrollLand extends Component {
  componentDidMount() {
    this.props.getPayroll();
  }

  render() {
    let { navigation, route } = this.props;
    const payroll = this.props;

    const payrollItems = this.props.payrolls.map(payroll => (
      <View key={payroll.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Payroll Details", {
                itemId: payroll.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>Name : {payroll.name}</Text>
            <Text style={{ color: "#228B22" }}>Date : {payroll.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Position: {payroll.position}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Salary Amount: {payroll.salaryamnt}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Advanced Amount: {payroll.advance}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Payroll Summaries </Text>
          {payrollItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Payroll Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  payrolls: state.payrolls.items
});

export default connect(mapStateToProps, { getPayroll })(PayrollLand);

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "center"
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
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "green",
    borderRadius: 100
  },
  TouchableOpacityAdd: {
    color: "#fff",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginLeft: 20
  }
});