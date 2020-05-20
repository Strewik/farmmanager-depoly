import "react-native-gesture-handler";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { getAdvances } from "../actions/advanceActions";
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

class AdvanceLand extends Component {
  componentDidMount() {
    this.props.getAdvances();
  }

  // componentWillReceiveProps
  // componentDidUpdate(nextProps){
  //   if(nextProps.newAdvance){
  //     this.props.advances.push(nextProps.newAdvance);
  //   }
  // }

  render() {
    let { navigation, route } = this.props;
    const advance = this.props;
    // console.log(advance);

    const advanceItems = this.props.advances.map(advance => (
      <View key={advance.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Advance Details", {
                itemId: advance.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>Name : {advance.name}</Text>
            <Text style={{ color: "#228B22" }}>
              Position: {advance.position}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount: {advance.advancedamnt}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {advance.date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Advance Summaries </Text>
          {advanceItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Advance Form")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
// AdvanceLand.propTypes = {
//   getAdvances: PropTypes.func.isRequired,
//   advances: PropTypes.array.isRequired,
//   newAdvance: PropTypes.object
// }
const mapStateToProps = state => ({
  advances: state.advances.items,
  // newAdvance: state.advances.item
});

export default connect(mapStateToProps, { getAdvances })(
  AdvanceLand
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

