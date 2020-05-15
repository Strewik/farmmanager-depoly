import React, { Component, setState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class HarvestLand extends Component {
  state = {
    data: [],
    loading: true
  };

  //Define your navigation options in a form of a method so you have access to navigation props.
  static navigationOptions = {
    title: "Harvest"
  };

  //Have the async keyword to indicate that it is asynchronous.
  fetchharvest = async () => {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const response = await fetch("http://127.0.0.1:8000/api/harvest/");
      const harvest = await response.json();
      this.setState({ data: harvest });
    } catch (error) {
      console.log("Error fetching harvest data-----------", error);
    }
  };

  //Define your componentDidMount lifecycle hook that will retrieve data.
  componentDidMount() {
    this.fetchharvest();
  }

  render() {
    //Destruct data and Loading from state.
    const { data, loading } = this.state;
    //Destruct navigation from props
    const { navigation } = this.props;

    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.

    // if (!loading) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}> Harvest Summaries </Text>
          <FlatList
            data={data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <Text style={styles.labels}>
                {`${item.date} ${item.suppl} ${item.product} ${item.qty} ${item.amntpd}`}
              </Text>
            )}
          />
          {/* <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Harvest")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity> */}
          <Button
            title="ADD"
            style={{ position: "absolute", bottom: 0, left: 0 }}
            onPress={() => navigation.navigate("Harvest Form")}
          />
        </View>
      </ScrollView>
    );
    // } else {
    //   return <ActivityIndicator />;
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
  labels: {
    margin: 10,
    color: "#000",
    textAlign: "center"
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
