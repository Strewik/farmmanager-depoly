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
import { deleteExpenditure, detailExpenditure } from "../actions/incomeActions";
import { connect } from "react-redux";

class ExpenditureDetails extends Component {
  componentDidMount() {
    const id = this.props.route.params.itemId;
    console.log("ayooo----------------------------------", id);

    this.props.detailExpenditure(id);
  }

  render() {
    const { navigation } = this.props;
    const { expenditure } = this.props;
    const item = (
      <View style={styles.container} key={expenditure.id}>
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
            >{`${expenditure.date}`}</Text>
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
              Supplier:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${expenditure.suppl}`}</Text>
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
            >{`${expenditure.phone}`}</Text>
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
            >{`${expenditure.product}`}</Text>
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
              Item Type:
            </Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                color: "#006432",
                fontWeight: "bold",
                fontSize: 16
              }}
            >{`${expenditure.itemtype}`}</Text>
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
            >{`${expenditure.unit}`}</Text>
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
              Shs: {`${expenditure.unitprice}`}
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
            >{`${expenditure.quantity}`}</Text>
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
              Shs: {`${expenditure.subtotal}`}
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
              Shs: {`${expenditure.tax}`}
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
            >{`${expenditure.description}`}</Text>
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
              Shs: {`${expenditure.total}`}
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
            >{`${expenditure.invnumber}`}</Text>
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
              Shs: {`${expenditure.amountpaid}`}
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
            >{`${expenditure.paymode}`}</Text>
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
            >{`${expenditure.receiptnum}`}</Text>
          </View>
          {/* <View
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
            >{`${expenditure.receiptnum}`}</Text>
          </View> */}
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
              Shs: {`${expenditure.baldue}`}
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
            >{`${expenditure.balduedate}`}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.deleteExpenditure.bind(this, expenditure.id);
            navigation.navigate("expenditure summaries");
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
          <Text style={styles.heading}> Expenditure Details </Text>
          {item}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  expenditure: state.expenditures.item
});

export default connect(mapStateToProps, {
  // getexpenditures,
  deleteExpenditure,
  detailExpenditure
})(ExpenditureDetails);

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
