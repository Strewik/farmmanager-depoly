import "react-native-gesture-handler";
import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    Image,
    ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LandReportFinance from "./LandReportFinance";
import LandReportInventory from "./LandReportInventory";
import LandReportWorkers from "./LandReportWorkers";

const Stack = createStackNavigator();

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          // alignSelf: "centre",
          flex: 1,
          resizeMode: "stretch",
          // flexDirection: "row",
          justifyContent: "center",
          // paddingTop: 10,
          // height: 800,
          // width: 300,
        }}
        source={require("../images/gre2.jpg")}
      >
        <View style={{ flex: 1, flexDirection: "row" }}></View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Finance")}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 20,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 80,
                  // height: 80,
                  height: hp("20%"),
                  width: wp("30%"),
                  marginRight: 5
                }}
                source={require("../images/cashmoney.jpg")}
              />
              <Text>FINANCES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Stores")}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 20,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 80,
                  // height: 80,
                  height: hp("20%"),
                  width: wp("30%"),
                  marginRight: 5
                }}
                source={require("../images/stores.png")}
              />
              <Text>STORES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Workers")}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 20,
                margin: 10,
                fontSize: 24,
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  // width: 80,
                  // height: 80,
                  height: hp("20%"),
                  width: wp("30%"),
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text>WORKERS</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            onPress={() => navigation.navigate("Finance")}
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
              source={require("../images/coffee-harvest.jpg")}
            />
            <Text>HARVEST</Text>
          </TouchableOpacity> */}
          </View>
        </View>
        {/* <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("")}
            style={{
              flex: 1,
              backgroundColor: "#606734",
              borderRadius: 5,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>UPDATES</Text>
          </TouchableOpacity>
                <View >
        <View> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  }
});



// import "react-native-gesture-handler";
// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import LandReportFinance from "./LandReportFinance";
// import LandReportInventory from "./LandReportInventory";

// const Stack = createStackNavigator();

// export default function HomePage({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Finance")}
//                 style={styles.finance}
//             >
//                 <View>
//                     <Text>FINANCE</Text>
//                 </View>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Inventory")}
//                 style={styles.inventory}
//             >
//                 <View>
//                     <Text>INVENTORY</Text>
//                 </View>
//             </TouchableOpacity>

//             <View style={styles.update}>
//                 <Text style={styles.text}>UPDATE</Text>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 25,
//     },
//     nav: {
//         flex: 0.7,
//         flexDirection: "row",
//         backgroundColor: "#ad2525",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     menu: {
//         flex: 1,
//         height: 90,
//         alignItems: "flex-start",
//         paddingLeft: 15,
//         justifyContent: "center",
//         color: "white",
//     },
//     detail: {
//         flex: 1,
//         justifyContent: "center",
//         height: 90,
//         alignItems: "flex-end",
//         paddingRight: 15,
//     },
//     finance: {
//         backgroundColor: "green",
//         flex: 2,
//         justifyContent: "center",
//         margin: 8,
//         alignItems: "center",
//     },
//     inventory: {
//         backgroundColor: "gray",
//         margin: 8,
//         flex: 2,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     update: {
//         backgroundColor: "black",
//         margin: 8,
//         flex: 1.3,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     text: {
//         color: "white",
//     },
// });
