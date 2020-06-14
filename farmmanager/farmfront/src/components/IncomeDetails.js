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
import { deleteIncome, detailIncome } from "../actions/incomeActions";
import { connect } from "react-redux";

class IncomeDetails extends Component {
  componentDidMount() {
    const id = this.props.route.params.itemId;
    console.log("ayooo----------------------------------", id);

    this.props.detailIncome(id);
  }
  render() {
    const { navigation } = this.props;
    const { income } = this.props;
    const item = (
      <View style={styles.container} key={income.id}>
        <View>
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
            >{`${income.date}`}</Text>
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
              Customer:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.customer}`}</Text>
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
              Phone:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.phone}`}</Text>
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
              Product:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.product}`}</Text>
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
              Unit:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.unit}`}</Text>
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
              Unit Price:
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
              Shs: {`${income.unitprice}`}
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
              Quantity:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.quantity}`}</Text>
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
              Sub Total:
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
              Shs: {`${income.subtotal}`}
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
            >
              Shs: {`${income.tax}`}
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
            >{`${income.description}`}</Text>
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
            >
              Shs: {`${income.total}`}
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
              Invoice Number:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.invnumber}`}</Text>
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
              Amount Paid:
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
              Shs: {`${income.amountpaid}`}
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
            >{`${income.paymode}`}</Text>
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
              receiptnum:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.receiptnum}`}</Text>
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
              Receipt Number:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.receiptnum}`}</Text>
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
              Balance Due:
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
              Shs: {`${income.baldue}`}
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
              Balance Due Date:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${income.balduedate}`}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.deleteIncome.bind(this, income.id);
            navigation.navigate("IncomeLand");
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
          <Text style={styles.heading}> Income Details </Text>
          {item}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  income: state.incomes.item
});

export default connect(mapStateToProps, {
  deleteIncome,
  detailIncome
})(IncomeDetails);

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
