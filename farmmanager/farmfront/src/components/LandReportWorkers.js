import "react-native-gesture-handler";
import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

export default function LandReportWorkers({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{
            alignSelf: "center",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 10
          }}
          source={require("../images/homepage.jpg")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Employee Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 80,
                height: 80,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text>EMPLOYEES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Casual Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#7cb407",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 80,
                height: 80,
                marginRight: 5
              }}
              source={require("../images/pesticide.png")}
            />
            <Text>CASUALS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{
            alignSelf: "center",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 10
          }}
          source={require("../images/homepage.jpg")}
        />
      </View>
    </View>
  );
}
