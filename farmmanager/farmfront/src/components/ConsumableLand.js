import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class ConsumableLand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> ConsumableLand </Text>
        <Button
          title="ADD"
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onPress={() => navigation.navigate("Consumable Form")}
        />
      </View>
    );
  }
}
