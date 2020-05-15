import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class CustomerLand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { navigation } = this.props;
    return (
      <View>
        <Text> CustomerLand </Text>
        <Button
          title="ADD"
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onPress={() => navigation.navigate("Customer Form")}
        />
      </View>
    );
  }
}
