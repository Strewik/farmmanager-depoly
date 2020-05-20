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
import { getIncome } from "../actions/incomeActions";
import { connect } from "react-redux";

class IncomeLand extends Component {
  componentDidMount() {
    this.props.getIncome();
  }

  render() {
    let { navigation, route } = this.props;
    const income = this.props;

    const incomeItems = this.props.incomes.map(income => (
      <View key={income.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Sales Details", {
                itemId: income.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Customer : {income.customer}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {income.date}</Text>
            <Text style={{ color: "#228B22" }}>Product: {income.product}</Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {income.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {income.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Sales Summaries </Text>
          {incomeItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Sales Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  incomes: state.incomes.items
});

export default connect(mapStateToProps, { getIncome })(IncomeLand);

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
