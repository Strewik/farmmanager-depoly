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
import { getExpenditures } from "../actions/expenditureActions";
import { connect } from "react-redux";

class ExpenditureLand extends Component {
  componentDidMount() {
    this.props.getExpenditures();
  }

  render() {
    let { navigation, route } = this.props;
    const expenditure = this.props;

    const expenditureItems = this.props.expenditures.map(expenditure => (
      <View key={expenditure.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ExpenditureDetails", {
                itemId: expenditure.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Supplier : {expenditure.suppl}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {expenditure.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Product: {expenditure.product}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {expenditure.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {expenditure.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Expenditure Summaries </Text>
          {expenditureItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Expenditure Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  expenditures: state.expenditures.items
});

export default connect(mapStateToProps, { getExpenditures })(ExpenditureLand);

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
// const styles = StyleSheet.create({
//   heading: {
//     margin: 10,
//     fontWeight: "bold",
//     fontSize: 20,
//     color: "#006432",
//     textAlign: "center"
//   },
//   container: {
//     flex: 1,
//     borderRadius: 10,
//     margin: 5,
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     padding: 8,
//     shadowColor: "green",
//     shadowOffset: {
//       width: 0,
//       height: 20
//     },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 3
//   },
//   TouchableOpacityStyle: {
//     borderWidth: 1,
//     borderColor: "rgba(0,0,0,0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 60,
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     height: 60,
//     backgroundColor: "green",
//     borderRadius: 100
//   },
//   TouchableOpacityAdd: {
//     color: "#fff",
//     width: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 30,
//     marginLeft: 20
//   }
// });
