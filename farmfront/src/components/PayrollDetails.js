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
import { deletePayroll, detailPayroll } from "../actions/payrollActions";
import { connect } from "react-redux";

class PayrollDetails extends Component {
  componentDidMount() {
    const id = this.props.route.params.itemId;
    console.log("ayooo----------------------------------", id);

    this.props.detailPayroll(id);
  }

  render() {
    const { navigation } = this.props;
    const { payroll } = this.props;
    const item = (
      <View style={styles.container} key={payroll.id}>
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
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Date:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.date}`}</Text>
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
              Name:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.name}`}</Text>
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
              Gender:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.gender}`}</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              margin: 10
              // color: "#006432"
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
            <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Position:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.position}`}</Text>
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
              Status:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.status}`}</Text>
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
              Payment Mode:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.paymod}`}</Text>
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
              Salary Amount:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >
              Shs: {`${payroll.salaryamnt}`}
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
              PAYE:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.paye}`}</Text>
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
              NSSF1:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.nssf1}`}</Text>
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
              NSSF2:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.nssf2}`}</Text>
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
              Tax:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.tax}`}</Text>
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
              LST:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.lst}`}</Text>
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
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.advance}`}</Text>
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
              Net Pay:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.netpay}`}</Text>
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
              Total:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${payroll.total}`}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.deletepayroll.bind(this, payroll.id);
            navigation.navigate("PayrollLand");
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
          <Text style={styles.heading}> Payroll Details </Text>
          {item}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  payroll: state.payrolls.item
});

export default connect(mapStateToProps, {
  deletePayroll,
  detailPayroll
})(PayrollDetails);

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
