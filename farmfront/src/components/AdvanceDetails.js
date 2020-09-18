import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import {
  deleteAdvance,
  detailAdvance
} from "../actions/advanceActions";
import { connect } from "react-redux";

class AdvanceDetails extends Component {
  componentDidMount() {
    const id = this.props.route.params.itemId;
    console.log("ayooo----------------------------------", id);

    this.props.detailAdvance(id);
  }

  render() {
    const { navigation } = this.props;
    const { advance } = this.props;
    const item = (
      <View style={styles.container} key={advance.id}>
        <View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>Date:</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.date}`}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>Name:</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.name}`}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>Gender:</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.gender}`}</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/user.png")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}> Position:</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.position}`}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>Status:</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.status}`}</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Advanced Amount:
            </Text>
            <Text style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}>
              Shs: {`${advance.advancedamnt}`}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
                marginRight: 5
              }}
              source={require("../images/worker.jpg")}
            />
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Description:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${advance.description}`}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.deleteAdvance.bind(this, advance.id);
            // navigation.navigate("AdvanceLand");
          }}
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            backgroundColor: "#cedcf2",
            height: 35,
            borderBottomColor: "#cedcf2",
            fontSize: 30,
            borderBottomWidth: 2,
            margin: 10
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Advance Details </Text>
          {item}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  advance: state.advances.item
});

export default connect(mapStateToProps, {
  deleteAdvance,
  detailAdvance
})(AdvanceDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#F5FCFF"
  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "center"
  }
});
