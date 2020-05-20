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

export default function LandReportInventory({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Consumable Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#ecef57",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/consumable_icon.png")}
            />
            <Text>CONSUMABLES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tool Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#abdd53",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/agri_tools.jpg")}
            />
            <Text>TOOLS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Harvest Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/coffee-harvest.jpg")}
            />
            <Text>HARVEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Seedlings Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#606734",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/fertiizer-icon.png")}
            />
            <Text>SEEDLINGS</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ flex: 1 }}>
        <View
          onPress={() => navigation.navigate("Advance Summaries")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Requisition Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/pesticide.png")}
            />
            <Text>PESTICIDES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#abdd53",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/agri_machinery.jpg")}
            />
            <Text>POWER TOOLS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Finance")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/coffee-harvest.jpg")}
            />
            <Text>HARVEST</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Harvest Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#7cb407",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/ferterlizer.png")}
            />
            <Text>FERTILIZERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Requisition Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                margin: 5
              }}
              source={require("../images/pesticide.png")}
            />
            <Text>PESTICIDES</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}
