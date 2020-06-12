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
import { getCustomers } from "../actions/customerActions";
import { connect } from "react-redux";

class CustomerLand extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  render() {
    let { navigation, route } = this.props;
    const customer = this.props;

    const customerItems = this.props.customers.map(customer => (
      <View key={customer.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Customer Details", {
                itemId: customer.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Supplier : {customer.suppl}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {customer.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Product: {customer.product}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {customer.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {customer.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Customer Summaries </Text>
          {customerItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Customer Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  customers: state.customers.items
});

export default connect(mapStateToProps, { getCustomers })(CustomerLand);

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

