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
import { getCasuals } from "../actions/casualActions";
import { connect } from "react-redux";

class CasualLand extends Component {
  componentDidMount() {
    this.props.getCasuals();
  }

  render() {
    let { navigation, route } = this.props;
    const casual = this.props;

    const casualItems = this.props.casuals.map(casual => (
      <View key={casual.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Casual Details", {
                itemId: casual.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>
              casual : {casual.suppl}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {casual.date}</Text>
            <Text style={{ color: "#228B22" }}>
              Product: {casual.product}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Quantity: {casual.quantity}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount Paid Sh: {casual.amountpaid}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Casual Summaries </Text>
          {casualItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Casual Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  casuals: state.casuals.items
});

export default connect(mapStateToProps, { getCasuals })(CasualLand);

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



// import React, { Component } from "react";
// import { View, Text, Button } from "react-native";

// export default class CasualLand extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     let { navigation } = this.props;
//     return (
//       <View>
//         <Text> CasualLand </Text>
//         <Button
//           title="ADD"
//           style={{ position: "absolute", bottom: 0, left: 0 }}
//           onPress={() => navigation.navigate("Casual Form")}
//         />
//       </View>
//     );
//   }
// }
