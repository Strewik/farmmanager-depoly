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
import { getSuppliers } from "../actions/supplierActions";
import { connect } from "react-redux";

class ConsumableLand extends Component {
  componentDidMount() {
    this.props.getSuppliers();
  }

  render() {
    let { navigation, route } = this.props;
    const supplier = this.props;

    const supplierItems = this.props.suppliers.map(supplier => (
      <View key={supplier.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Supplier Details", {
                itemId: supplier.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Supplier : {supplier.suppl}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {supplier.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Product: {supplier.product}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {supplier.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {supplier.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Consumable Summaries </Text>
          {supplierItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Consumable Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  suppliers: state.suppliers.items
});

export default connect(mapStateToProps, { getSuppliers })(ConsumableLand);

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
