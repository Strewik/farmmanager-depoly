import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class SeedlingsLand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { navigation, route } = this.props;

    return (
      <View>
        <Text> SeedlingsLand </Text>
        <Button
          title="ADD"
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onPress={() => navigation.navigate("SeedlingsBatch Form")}
        />
      </View>
    );
  }
}
