import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class SupplierLand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { navigation } = this.props;
    return (
      <View>
        <Text> SupplierLand </Text>
        <Button
          title="ADD"
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onPress={() => navigation.navigate("Supplier Form")}
        />
      </View>
    );
  }
}
