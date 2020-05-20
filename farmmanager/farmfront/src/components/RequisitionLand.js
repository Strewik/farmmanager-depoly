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
import { getRequisition } from "../actions/requisitionActions";
import { connect } from "react-redux";

class RequisitionLand extends Component {
  componentDidMount() {
    this.props.getRequisition();
  }

  render() {
    let { navigation, route } = this.props;
    const requisition = this.props;

    const requisitionItems = this.props.requisitions.map(requisition => (
      <View key={requisition.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Requisition Details", {
                itemId: requisition.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>Date : {requisition.date}</Text>

            <Text style={{ color: "#228B22" }}>
              Activity : {requisition.activity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {requisition.qty}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Requested By: {requisition.requestby}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Total Amount: {requisition.total}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Requisition Summaries </Text>
          {requisitionItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Requisition Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  requisitions: state.requisitions.items
});

export default connect(mapStateToProps, { getRequisition })(RequisitionLand);

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
