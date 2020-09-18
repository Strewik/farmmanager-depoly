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
import { getSeedlings } from "../actions/seedlingActions";
import { connect } from "react-redux";

class SeedlingsLand extends Component {
  componentDidMount() {
    this.props.getSeedlings();
  }

  render() {
    let { navigation, route } = this.props;
    const seedling = this.props;

    const seedlingItems = this.props.seedlings.map(seedling => (
      <View key={seedling.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Sales Details", {
                itemId: seedling.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Customer : {seedling.customer}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {seedling.date}</Text>
            <Text style={{ color: "#228B22" }}>Product: {seedling.product}</Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {seedling.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {seedling.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Seedlings Summaries </Text>
          {/* {seedlingItems} */}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("SeedlingsBatch Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
          {seedlingItems}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  seedlings: state.seedlings.items
});

export default connect(mapStateToProps, { getSeedlings })(SeedlingsLand);

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
