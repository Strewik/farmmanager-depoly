import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 5
  },
  errorText: {
    color: "red",
    fontSize: 15
  }
});

export default ErrorMessage;
