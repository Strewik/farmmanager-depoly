import "react-native-gesture-handler";
import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

export default function LandReportFinace({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sales Summaries")}
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
              source={require("../images/sales.png")}
            />
            <Text>SALES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Expenditure Summaries")}
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
              source={require("../images/expense_icon.png")}
            />
            <Text>EXPENSES</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Requisition Summaries")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 10,
              // borderColor: "gray",
              // borderWidth:5,
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
              source={require("../images/purchase_order_icon.jpg")}
            />
            <Text>ORDERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Payroll Summaries")}
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
              source={require("../images/payroll_icon.jpg")}
            />
            <Text>PAYROLL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Advance Summaries")}
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
              source={require("../images/advance-icon.png")}
            />
            <Text>ADVANCE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Customer Summaries")}
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
              source={require("../images/customers_icon_3.png")}
            />
            <Text>CUSTOMERS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Supplier Summaries")}
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
              source={require("../images/supplier.png")}
            />
            <Text>SUPPLIERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#163700",
              borderRadius: 15,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>OTHER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
