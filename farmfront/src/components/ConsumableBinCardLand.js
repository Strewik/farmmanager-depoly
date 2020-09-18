import "react-native-gesture-handler";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getConsumablebincards } from "../actions/consumablebincardActions";
import { connect } from "react-redux";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
// import BottomNav from "./BottomNav";

class ConsumableBinCardLand extends Component {
  componentDidMount() {
    this.props.getConsumablebincards();
  }

  render() {
    let { navigation, route } = this.props;
    const consumablebincard = this.props;
    // console.log(consumablebincard);

    const consumablebincardItems = this.props.consumablebincards.map(
      consumablebincard => (
        <View key={consumablebincard.id}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Consumablebincard Details", {
                  itemId: consumablebincard.id
                });
              }}
            >
              <Text style={{ color: "#228B22" }}>
                Date : {consumablebincard.date}
              </Text>
              <Text style={{ color: "#228B22" }}>
                Name: {consumablebincard.name}
              </Text>
              <Text style={{ color: "#228B22" }}>
                Quantity Taken: {consumablebincard.qtytaken}
              </Text>
              <Text style={{ color: "#228B22" }}>
                Quantity Used: {consumablebincard.qtyused}
              </Text>
              <Text style={{ color: "#228B22" }}>
                Taken By: {consumablebincard.takenby}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    );
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> consumable Summaries </Text>
          {consumableItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Consumable Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
// ConsumableBinCardLand.propTypes = {
//   getConsumablebincards: PropTypes.func.isRequired,
//   consumablebincards: PropTypes.array.isRequired,
//   newconsumablebincard: PropTypes.object
// }
const mapStateToProps = state => ({
  consumablebincards: state.consumablebincards.items
  // newconsumablebincard: state.consumablebincards.item
});

export default connect(mapStateToProps, { getConsumablebincards })(
  ConsumableBinCardLand
);

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "center"
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
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "green",
    borderRadius: 100
  },
  TouchableOpacityAdd: {
    color: "#fff",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginLeft: 20
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

// export default class ConsumableBinCardLand extends Component {
//   state = {
//     data: [],
//     loading: true
//   };

//   //Define your navigation options in a form of a method so you have access to navigation props.
//   static navigationOptions = {
//     title: "Consumable"
//   };

//   //Have the async keyword to indicate that it is asynchronous.
//   fetchconsumable = async () => {
//     //Have a try and catch block for catching errors.
//     try {
//       //Assign the promise unresolved first then get the data using the json method.
//       const response = await fetch("http://127.0.0.1:8000/api/consumable/");
//       const consumables = await response.json();
//       this.setState({ data: consumables });
//     } catch (error) {
//       console.log("Error fetching consumable data-----------", error);
//     }
//   };

//   //Define your componentDidMount lifecycle hook that will retrieve data.
//   componentDidMount() {
//     this.fetchconsumable();
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
//           <Text style={styles.heading}> Consumable summaries </Text>
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
//             onPress={() => navigation.navigate("Consumable")}
//           >
//             <Text style={styles.TouchableOpacityAdd}>+</Text>
//           </TouchableOpacity> */}
//           <Button
//             title="ADD"
//             style={{ position: "absolute", bottom: 0, left: 0 }}
//             onPress={() => navigation.navigate("Consumable")}
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
//     backgroundColor: "#F5FCFF"
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
