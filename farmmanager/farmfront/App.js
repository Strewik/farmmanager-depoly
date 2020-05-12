// import "react-native-gesture-handler";
// import React, { Component } from "react";
// import ReactDom from "react-dom";
// import { AppRegistry, View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { Provider } from "react-redux";
// import store from "./src/store";
// import HomePage from "./src/components/HomePage";
// import SignUp from "./src/components/SignUp";
// import Login from "./src/components/Login";
// import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
// import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
// // import Personnel from "./src/components/Personnel";
// // import PersonnelLand from "./src/components/PersonnelLand";
// // import PersonnelDetails from "./src/components/PersonnelDetails";
// import LandReportFinace from "./src/components/LandReportFinance";
// import IncomeForm from "./src/components/IncomeForm";
// import IncomeLand from "./src/components/IncomeLand";
// import IncomeDetails from "./src/components/IncomeDetails";
// import ExpenditureForm from "./src/components/ExpenditureForm";
// import ExpenditureLand from "./src/components/ExpenditureLand";
// import ExpenditureDetails from "./src/components/ExpenditureDetails";
// import PayRoll from "./src/components/PayRoll";
// import PayrollLand from "./src/components/PayrollLand";
// import PayrollDetails from "./src/components/PayrollDetails";
// import Advance from "./src/components/Advance";
// import AdvanceLand from "./src/components/AdvanceLand";
// import AdvanceDetails from "./src/components/AdvanceDetails";
// import RequisitionForm from "./src/components/RequisitionForm";
// import RequisitionLand from "./src/components/RequisitionLand";
// import RequisitionDetails from "./src/components/RequisitionDetails";
// import LandReportInventory from "./src/components/LandReportInventory";
// // import Consumable from "./src/components/Consumable";
// // import ConsumableLand from "./src/components/ConsumableLand";
// // import ConsumableDetails from "./src/components/ConsumableDetails";
// // import Harvest from "./src/components/Harvest";
// // import HarvestLand from "./src/components/HarvestLand";
// // import HarvestDetails from "./src/components/HarvestDetails";
// // import Tools from "./src/components/Tools";
// // import ToolsLand from "./src/components/ToolsLand";
// // import ToolsDetails from "./src/components/ToolsDetails";
// // import ToolBinCard from "./src/components/ToolBinCard";
// import BottomNav from "./src/components/BottomNav";
// // import UsersView from "./src/components/UsersView";
// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();
// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <NavigationContainer>
//                     <Stack.Navigator>
//                         <Stack.Screen
//                             name="Landing Page"
//                             component={HomePage}
//                         />
//                         <Stack.Screen
//                             name="Finance"
//                             component={LandReportFinace}
//                         />
//                         <Stack.Screen
//                             name="Sales Form"
//                             component={IncomeForm}
//                         />
//                         <Stack.Screen
//                             name="Sales Summaries"
//                             component={IncomeLand}
//                         />
//                         <Stack.Screen
//                             name="Sales Details"
//                             component={IncomeDetails}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Form"
//                             component={ExpenditureForm}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Summaries"
//                             component={ExpenditureLand}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Details"
//                             component={ExpenditureDetails}
//                         />
//                         <Stack.Screen name="Payroll Form" component={PayRoll} />
//                         <Stack.Screen
//                             name="Payroll Summaries"
//                             component={PayrollLand}
//                         />
//                         <Stack.Screen
//                             name="Payroll Details"
//                             component={PayrollDetails}
//                         />
//                         <Stack.Screen name="Advance Form" component={Advance} />
//                         <Stack.Screen
//                             name="Advance Summaries"
//                             component={AdvanceLand}
//                         />
//                         <Stack.Screen
//                             name="Advance Details"
//                             component={AdvanceDetails}
//                         />
//                         <Stack.Screen
//                             name="Requisition Form"
//                             component={RequisitionForm}
//                         />
//                         <Stack.Screen
//                             name="Requisition Summaries"
//                             component={RequisitionLand}
//                         />
//                         <Stack.Screen
//                             name="Requisition Details"
//                             component={RequisitionDetails}
//                         />
//                         <Stack.Screen
//                             name="Stores"
//                             component={LandReportInventory}
//                         />
//                         {/* <Stack.Screen name="Consumable Form" component={Consumable} /> */}
//                         {/* <Stack.Screen name="Consumable Summaries" component={ConsumableLand} /> */}
//                         {/* <Stack.Screen
//               name="Consumable Details"
//               component={ConsumableDetails}
//             /> */}
//                         {/* <Stack.Screen name="Harvest Form" component={Harvest} /> */}
//                         {/* <Stack.Screen name="Harvest Summaries" component={HarvestLand} /> */}
//                         {/* <Stack.Screen name="Harvest Details" component={HarvestDetails} /> */}
//                         {/* <Stack.Screen name="Tools Form" component={Tools} /> */}
//                         {/* <Stack.Screen name="Tools Summaries" component={ToolsLand} /> */}
//                         {/* <Stack.Screen name="Tools Details" component={ToolsDetails} /> */}
//                         {/* <Stack.Screen name="ToolBinCard" component={ToolBinCard} /> */}
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             </Provider>
//         );
//     }
// }
// AppRegistry.registerComponent("App", () => App);






import * as yup from 'yup'
import { Formik } from 'formik'
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

import React, { Component, Fragment } from 'react';
import { TextInput, View, Text, Button, Alert, StyleSheet } from 'react-native';


export default class App extends Component {
    constructor(props) {
         super(props);
         this.state = { f1: "", f2: "", result: "" };
     }
     
  render() {
      var f1 = this.state.f1;
         var f2 = this.state.f2;
         const result = f1 && f2 ? f2 * f1 : null;
    return (
        <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required(),
          password: yup
            .string()
            .min(6)
            .required(),
        })}
      >
      

        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment >
          <Text>Date</Text>
            <TextInput
                label='Customer'
              value={values.customer}
              onChangeText={handleChange('customer')}
              onBlur={() => setFieldTouched('customer')}
              placeholder="customer"
            />
            {touched.customer && errors.customer &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.customer}</Text>
            }
            <TextInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              placeholder="phone"
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
            }
            <TextInput
              value={values.product}
              onChangeText={handleChange('product')}
              onBlur={() => setFieldTouched('product')}
              placeholder="product"
            />
            {touched.product && errors.product &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.product}</Text>
            }
            <TextInput
              value={values.unit}
              onChangeText={handleChange('unit')}
              onBlur={() => setFieldTouched('unit')}
              placeholder="unit"
            />
            {touched.unit && errors.unit &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.unit}</Text>
            }

                <TextInput
                    value={values.unitprice}
                    placeholder="Unit price"
                    // style={styles.input}
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched('unit')}
                    onChangeText={(text) =>
                    this.setState({ f1: parseInt(text) })
                    // handleChange('unitprice')
                    }
                />

                <TextInput
                    placeholder="Quantity"
                    // style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                        this.setState({ f2: parseInt(text) })
                    }
                />


                <Text>Sub-total {result ? <Text>{result}</Text> : null}</Text>
                <TextInput
              value={values.tax}
              onChangeText={handleChange('tax')}
              onBlur={() => setFieldTouched('tax')}
              placeholder="tax"
            />
            {touched.tax && errors.tax &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.tax}</Text>
            }
            <TextInput
              value={values.decsription}
              onChangeText={handleChange('decsription')}
              onBlur={() => setFieldTouched('decsription')}
              placeholder="decsription"
            />
            {touched.decsription && errors.decsription &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.decsription}</Text>
            }
            <TextInput
              value={values.total}
              onChangeText={handleChange('total')}
              onBlur={() => setFieldTouched('total')}
              placeholder="total"
            />
            {touched.total && errors.total &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.total}</Text>
            }
            <TextInput
              value={values.invnumber}
              onChangeText={handleChange('invnumber')}
              onBlur={() => setFieldTouched('invnumber')}
              placeholder="invnumber"
            />
            {touched.invnumber && errors.invnumber &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.invnumber}</Text>
            }
            <TextInput
              value={values.amountpaid}
              onChangeText={handleChange('amountpaid')}
              onBlur={() => setFieldTouched('amountpaid')}
              placeholder="amountpaid"
            />
            {touched.amountpaid && errors.amountpaid &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.amountpaid}</Text>
            }
            <TextInput
              value={values.paymode}
              onChangeText={handleChange('paymode')}
              onBlur={() => setFieldTouched('paymode')}
              placeholder="paymode"
            />
            {touched.paymode && errors.paymode &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.paymode}</Text>
            }
            <TextInput
              value={values.receiptnum}
              onChangeText={handleChange('receiptnum')}
              onBlur={() => setFieldTouched('receiptnum')}
              placeholder="receiptnum"
            />
            {touched.receiptnum && errors.receiptnum &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.receiptnum}</Text>
            }
            <TextInput
              value={values.baldue}
              onChangeText={handleChange('baldue')}
              onBlur={() => setFieldTouched('baldue')}
              placeholder="baldue"
            />
            {touched.baldue && errors.baldue &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.baldue}</Text>
            }
            <Text>Balance due date</Text>

            <Button
              title='Sign In'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 15,
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginTop: 20,
    marginBottom: 50
  }
});