import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import { getHarvest } from "../actions/harvestActions";
import { connect } from "react-redux";

class HarvestLand extends Component {
  componentDidMount() {
    this.props.getHarvest();
  }

  render() {
    let { navigation, route } = this.props;
    const harvest = this.props;

    const harvestItems = this.props.harvests.map(harvest => (
      <View key={harvest.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Sales Details", {
                itemId: harvest.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              Customer : {harvest.customer}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {harvest.date}</Text>
            <Text style={{ color: "#228B22" }}>Product: {harvest.product}</Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {harvest.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {harvest.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Harvest Summaries </Text>
          {/* {harvestItems} */}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Harvest Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
          {harvestItems}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  harvests: state.harvests.items
});

export default connect(mapStateToProps, { getHarvest })(HarvestLand);

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "left"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 8,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3
  },
  TouchableOpacityStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    padding: 10,
    bottom: 5,
    right: 10,
    height: 30,
    top: 10,
    backgroundColor: "green",
    borderRadius: 30
  },
  TouchableOpacityAdd: {
    color: "#fff",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    // marginLeft: 20
    fontWeight: "bold"
  }
});



// import React, { Component, setState } from "react";
// import {
//   Text,
//   View,
//   Button,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   TouchableOpacity,
//   KeyboardAvoidingView
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default class HarvestLand extends Component {
//   state = {
//     data: [],
//     loading: true
//   };

//   //Define your navigation options in a form of a method so you have access to navigation props.
//   static navigationOptions = {
//     title: "Harvest"
//   };

//   //Have the async keyword to indicate that it is asynchronous.
//   fetchharvest = async () => {
//     //Have a try and catch block for catching errors.
//     try {
//       //Assign the promise unresolved first then get the data using the json method.
//       const response = await fetch("http://127.0.0.1:8000/api/harvest/");
//       const harvest = await response.json();
//       this.setState({ data: harvest });
//     } catch (error) {
//       console.log("Error fetching harvest data-----------", error);
//     }
//   };

//   //Define your componentDidMount lifecycle hook that will retrieve data.
//   componentDidMount() {
//     this.fetchharvest();
//   }

//   render() {
//     //Destruct data and Loading from state.
//     const { data, loading } = this.state;
//     //Destruct navigation from props
//     const { navigation } = this.props;

//     //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
//     //Data contains the data being  mapped over.
//     //RenderItem a callback return UI for each item.
//     //keyExtractor used for giving a unique identifier for each item.

//     // if (!loading) {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.heading}> Harvest Summaries </Text>
//           <FlatList
//             data={data}
//             keyExtractor={(x, i) => i}
//             renderItem={({ item }) => (
//               <Text style={styles.labels}>
//                 {`${item.date} ${item.suppl} ${item.product} ${item.qty} ${item.amntpd}`}
//               </Text>
//             )}
//           />
//           {/* <TouchableOpacity
//             style={styles.TouchableOpacityStyle}
//             onPress={() => navigation.navigate("Harvest")}
//           >
//             <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
//           </TouchableOpacity> */}
//           <Button
//             title="ADD"
//             style={{ position: "absolute", bottom: 0, left: 0 }}
//             onPress={() => navigation.navigate("Harvest Form")}
//           />
//         </View>
//       </ScrollView>
//     );
//     // } else {
//     //   return <ActivityIndicator />;
//     // }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignContent: "space-between",
//     width: "100%",
//     backgroundColor: "#fff"
//   },
//   heading: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },
//   labels: {
//     margin: 10,
//     color: "#000",
//     textAlign: "center"
//   },
//   TouchableOpacityStyle: {
//     borderWidth: 1,
//     borderColor: "rgba(0,0,0,0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 60,
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     height: 60,
//     backgroundColor: "green",
//     borderRadius: 100
//   },
//   TouchableOpacityAdd: {
//     color: "#fff",
//     width: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 30,
//     marginLeft: 20
//   }
// });
