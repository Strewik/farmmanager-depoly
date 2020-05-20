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













import * as yup from "yup";
import { Formik } from "formik";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

import React, { Component, Fragment } from "react";
import { TextInput, View, Text, Button, Alert, StyleSheet, ScrollView } from "react-native";

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { unitprice: "", quantity: "", subtotal: "" };
    }

    render() {
        var unitprice = this.state.unitprice;
        var quantity = this.state.quantity;
        const subtotal = unitprice && quantity ? quantity * unitprice : null;
        return (
            <View style={styles.container}>
            <ScrollView>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => Alert.alert(JSON.stringify(values))}
                    validationSchema={yup.object().shape({
                        customer: yup.string().required(),
                        password: yup.string().min(6).required(),
                    })}
                >
                    {({
                        values,
                        handleChange,
                        errors,
                        setFieldTouched,
                        touched,
                        isValid,
                        handleSubmit,
                    }) => (
                        <Fragment>
                            <Text>Date</Text>
                            <TextInput
                            style={styles.inputstyle}
                                label="Customer"
                                value={values.customer}
                                onChangeText={handleChange("customer")}
                                onBlur={() => setFieldTouched("customer")}
                                placeholder="customer"
                            />
                            {touched.customer && errors.customer && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.customer}
                                </Text>
                            )}
                            <TextInput
                                style={styles.inputstyle}
                                value={values.phone}
                                onChangeText={handleChange("phone")}
                                onBlur={() => setFieldTouched("phone")}
                                placeholder="phone"
                            />
                            {touched.phone && errors.phone && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.phone}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.product}
                                onChangeText={handleChange("product")}
                                onBlur={() => setFieldTouched("product")}
                                placeholder="product"
                            />
                            {touched.product && errors.product && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.product}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.unit}
                                onChangeText={handleChange("unit")}
                                onBlur={() => setFieldTouched("unit")}
                                placeholder="unit"
                            />
                            {touched.unit && errors.unit && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.unit}
                                </Text>
                            )}

                            <TextInput
                            style={styles.inputstyle}
                                value={values.unitprice}
                                placeholder="Unit price"
                                // style={styles.input}
                                keyboardType="numeric"
                                onBlur={() => setFieldTouched("unit")}
                                onChangeText={
                                    (text) =>
                                        this.setState({
                                            unitprice: parseInt(text),
                                        })
                                    // handleChange('unitprice')
                                }
                            />

                            <TextInput
                            style={styles.inputstyle}
                                placeholder="Quantity"
                                // style={styles.input}
                                keyboardType="numeric"
                                onChangeText={(text) =>
                                    this.setState({ quantity: parseInt(text) })
                                }
                            />

                            <Text style={styles.inputstyle}>
                                Sub-total{" "}
                                {subtotal ? <Text>{subtotal}</Text> : null}
                            </Text>
                            <TextInput
                            style={styles.inputstyle}
                                value={values.tax}
                                onChangeText={handleChange("tax")}
                                onBlur={() => setFieldTouched("tax")}
                                placeholder="tax"
                            />
                            {touched.tax && errors.tax && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.tax}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.decsription}
                                onChangeText={handleChange("decsription")}
                                onBlur={() => setFieldTouched("decsription")}
                                placeholder="decsription"
                            />
                            {touched.decsription && errors.decsription && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.decsription}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.total}
                                onChangeText={handleChange("total")}
                                onBlur={() => setFieldTouched("total")}
                                placeholder="total"
                            />
                            {touched.total && errors.total && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.total}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.invnumber}
                                onChangeText={handleChange("invnumber")}
                                onBlur={() => setFieldTouched("invnumber")}
                                placeholder="invnumber"
                            />
                            {touched.invnumber && errors.invnumber && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.invnumber}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.amountpaid}
                                onChangeText={handleChange("amountpaid")}
                                onBlur={() => setFieldTouched("amountpaid")}
                                placeholder="amountpaid"
                            />
                            {touched.amountpaid && errors.amountpaid && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.amountpaid}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.paymode}
                                onChangeText={handleChange("paymode")}
                                onBlur={() => setFieldTouched("paymode")}
                                placeholder="paymode"
                            />
                            {touched.paymode && errors.paymode && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.paymode}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.receiptnum}
                                onChangeText={handleChange("receiptnum")}
                                onBlur={() => setFieldTouched("receiptnum")}
                                placeholder="receiptnum"
                            />
                            {touched.receiptnum && errors.receiptnum && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.receiptnum}
                                </Text>
                            )}
                            <TextInput
                            style={styles.inputstyle}
                                value={values.baldue}
                                onChangeText={handleChange("baldue")}
                                onBlur={() => setFieldTouched("baldue")}
                                placeholder="baldue"
                            />
                            {touched.baldue && errors.baldue && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.baldue}
                                </Text>
                            )}
                            <Text>Balance due date</Text>

                            <Button
                                title="Sign In"
                                // disabled={!isValid}
                                onPress={handleSubmit}
                            />
                        </Fragment>
                    )}

                </Formik>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 15,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 5,
        color: "#006432",
        textAlign: "center",
        marginBottom: 25,
    },
    button: {
        marginTop: 20,
        marginBottom: 50,
    },
    inputstyle: {
       borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    marginBottom: 10,
    borderRadius:5,
    fontSize:18
    }
});


















// import React from "react";
// import {
//     SafeAreaView,
//     TextInput,
//     Button,
//     ActivityIndicator,
//     Text,
//     View,
//     Switch,
//     ScrollView,
// } from "react-native";
// import { Formik } from "formik";
// import * as yup from "yup";

// const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
//     <View style={{ marginHorizontal: 15, marginVertical: 0 }}>
//         <Text style={{ marginBottom: 5 }}>{label}</Text>
//         {children}
//         <Text style={{ color: "red" }}>
//             {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
//         </Text>
//     </View>
// );

// const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
//     const inputStyles = {
//         borderWidth: 1,
//         borderColor: "green",
//         padding: 10,
//         marginBottom: 3,
//         borderRadius: 5,
//         fontSize: 18,
//     };

//     if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
//         inputStyles.borderColor = "red";
//     }

//     return (
//         <FieldWrapper
//             label={label}
//             formikKey={formikKey}
//             formikProps={formikProps}
//         >
//             <TextInput
//                 style={inputStyles}
//                 onChangeText={formikProps.handleChange(formikKey)}
//                 onBlur={formikProps.handleBlur(formikKey)}
//                 {...rest}
//             />
//         </FieldWrapper>
//     );
// };
// // constructor(props) {
// //          super(props);
// // this.state = { unitprice: "", quantity: "", subtotal: "" };
// // }

// const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
//     <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
//         <Switch
//             value={formikProps.values[formikKey]}
//             onValueChange={(value) => {
//                 formikProps.setFieldValue(formikKey, value);
//             }}
//             {...rest}
//         />
//     </FieldWrapper>
// );
// var unitprice = props.values.unitprice;
// var quantity = this.state.quantity;
// const subtotal = unitprice && quantity ? quantity * unitprice : null;
// // const validationSchema = yup.object().shape({
// //   email: yup
// //     .string()
// //     .label('Email')
// //     .email()
// //     .required(),
// //   password: yup
// //     .string()
// //     .label('Password')
// //     .required()
// //     .min(2, 'Seems a bit short...')
// //     .max(10, 'We prefer insecure system, try a shorter password.'),
// //   agreeToTerms: yup
// //     .boolean()
// //     .label('Terms')
// //     .test(
// //       'is-true',
// //       'Must agree to terms to continue',
// //       value => value === true
// //     ),
// // });

// export default App = () => (
//     <View>
//         <SafeAreaView style={{ marginTop: 90 }}>
//             <ScrollView>
//                 <Formik
//                     initialValues={{
//                         unitprice: "",
//                         quantity: "",
//                         subtotal: "",
//                     }}
//                     onSubmit={(values, actions) => {
//                         alert(JSON.stringify(values));
//                         setTimeout(() => {
//                             actions.setSubmitting(false);
//                         }, 1000);
//                     }}
//                     // validationSchema={validationSchema}
//                 >
//                     {(formikProps) => (
//                         <React.Fragment>
//                             <StyledInput
//                                 label="Customer"
//                                 formikProps={formikProps}
//                                 formikKey="customer"
//                                 placeholder="Customer"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Phone"
//                                 formikProps={formikProps}
//                                 formikKey="phone"
//                                 placeholder="Phone"
//                                 // secureTextEntry
//                             />

//                             <StyledInput
//                                 label="Product"
//                                 formikProps={formikProps}
//                                 formikKey="product"
//                                 placeholder="Product"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Unit"
//                                 formikProps={formikProps}
//                                 formikKey="unit"
//                                 placeholder="Unit"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Unit Price"
//                                 formikProps={formikProps}
//                                 formikKey="unitprice"
//                                 placeholder="Unit Price"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Quantity"
//                                 formikProps={formikProps}
//                                 formikKey="quantity"
//                                 placeholder="Quantity"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Sub-total"
//                                 formikProps={formikProps}
//                                 formikKey="subtotal"
//                                 placeholder="Sub-total"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Tax"
//                                 formikProps={formikProps}
//                                 formikKey="tax"
//                                 placeholder="Tax"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Description"
//                                 formikProps={formikProps}
//                                 formikKey="description"
//                                 placeholder="Description"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Total"
//                                 formikProps={formikProps}
//                                 formikKey="total"
//                                 placeholder="Total"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Invoice number"
//                                 formikProps={formikProps}
//                                 formikKey="invnumber"
//                                 placeholder="Product"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Amount paid"
//                                 formikProps={formikProps}
//                                 formikKey="amountpaid "
//                                 placeholder="Amount paid"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Payment mode"
//                                 formikProps={formikProps}
//                                 formikKey="paymode"
//                                 placeholder="Payment mode"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Receipt number"
//                                 formikProps={formikProps}
//                                 formikKey="receiptnum"
//                                 placeholder="Receiptnum"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Balance due"
//                                 formikProps={formikProps}
//                                 formikKey="baldue"
//                                 placeholder="Balance due"
//                                 autoFocus
//                             />

//                             <StyledInput
//                                 label="Balance due date"
//                                 formikProps={formikProps}
//                                 formikKey="balduedate"
//                                 placeholder="Balance due date"
//                                 autoFocus
//                             />

//                             <StyledSwitch
//                                 label="Agree to Terms"
//                                 formikKey="agreeToTerms"
//                                 formikProps={formikProps}
//                             />

//                             {formikProps.isSubmitting ? (
//                                 <ActivityIndicator />
//                             ) : (
//                                 <Button
//                                     title="Submit"
//                                     onPress={formikProps.handleSubmit}
//                                 />
//                             )}
//                         </React.Fragment>
//                     )}
//                 </Formik>
//             </ScrollView>
//         </SafeAreaView>
//     </View>
// );
