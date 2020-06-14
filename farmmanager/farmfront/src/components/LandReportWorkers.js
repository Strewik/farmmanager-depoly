import "react-native-gesture-handler";
import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

export default function LandReportWorkers({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          // alignSelf: "centre",
          flex: 1,
          resizeMode: "stretch",
          // flexDirection: "row",
          justifyContent: "center"
          // paddingTop: 10,
          // height: 800,
          // width: 300,
        }}
        source={require("../images/gre10.jpg")}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Employee Summaries")}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 20,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                // height: 150,
                marginTop: 35,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                //   width: 80,
                //   height: 80,
                  height: hp("20%"),
                  width: wp("30%"),
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
                backgroundColor: "#fff",
                borderRadius: 20,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                // height: 150
                marginTop: 35,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  //   width: 80,
                  //   height: 80,
                  height: hp("20%"),
                  width: wp("30%"),
                  marginRight: 5
                }}
                source={require("../images/pesticide.png")}
              />
              <Text>CASUALS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
