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

export default function LandReportInventory({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          // alignSelf: "centre",
          flex: 1,
          resizeMode: "sretch",
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
              onPress={() => navigation.navigate("Consumable Summaries")}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 15,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                marginTop: 35,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 60,
                  // height: 60,
                  height: hp("20%"),
                  width: wp("30%"),
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
                backgroundColor: "#fff",
                borderRadius: 15,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                marginTop: 35,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 60,
                  // height: 60,
                  height: hp("20%"),
                  width: wp("30%"),
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
                backgroundColor: "#fff",
                borderRadius: 15,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 60,
                  // height: 60,
                  height: hp("20%"),
                  width: wp("30%"),
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
                backgroundColor: "#fff",
                borderRadius: 15,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
                height: hp("30%"),
                width: wp("30%")
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 60,
                  // height: 60,
                  height: hp("20%"),
                  width: wp("30%"),
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
      </ImageBackground>
    </View>
  );
}
