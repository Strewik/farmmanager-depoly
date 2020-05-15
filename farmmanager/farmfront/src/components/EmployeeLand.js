import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class EmployeeLand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { navigation } = this.props;
    return (
      <View>
        <Text> EmployeeLand </Text>
        <Button
          title="ADD"
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onPress={() => navigation.navigate("Employee Form")}
        />
      </View>
    );
  }
}
