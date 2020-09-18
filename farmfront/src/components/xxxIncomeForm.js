// import * as yup from "yup";
// import { Formik } from "formik";
// import { useField, useFormikContext } from "formik";
// import DatePicker from "react-datepicker";
// import React, { Component, Fragment } from "react";
// import FormInput from "../otherComponents/FormInput";
// import FormButton from "../otherComponents/FormButton";
// import ErrorMessage from "../otherComponents/ErrorMessage";

// import {
//   TextInput,
//   View,
//   Text,
//   Button,
//   Alert,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView
// } from "react-native";

// const validationSchema = yup.object().shape({
//   amountrecvd: yup
//     .number()
//     .label("Amount Received")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   receiptnum: yup
//     .string()
//     .label("Receipt Number")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   customer: yup
//     .string()
//     .label("Customer Name")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   phone: yup
//     .string()
//     .label("Phone Number")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   date: yup
//     .date()
//     .label("Date of Sale")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   product: yup
//     .string()
//     .label("Product Name")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   quantity: yup
//     .string()
//     .label("Quantity")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   unit: yup
//     .string()
//     .label("Units")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   unitprice: yup
//     .string()
//     .label("Unit Price")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   subtotal: yup
//     .number()
//     .label("Sub Total")
//     .required()
//     .positive()
//     .integer(),
//   vat: yup
//     .string()
//     .label("VAT")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   total: yup
//     .string()
//     .label("Total")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   paymode: yup
//     .string()
//     .label("Payment Mode")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   invnumber: yup
//     .string()
//     .label("Invoice Number")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   baldue: yup
//     .string()
//     .label("Balance Due")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   balduedate: yup
//     .date()
//     .label("Due Date")
//     .required()
//     .min(2, "Must have at least 2 characters")
// });
// export default class IncomeForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { unitprice: "", quantity: "", subtotal: "", vat: "" };
//   }
//   render() {
//     var unitprice = this.state.unitprice;
//     var quantity = this.state.quantity;
//     var vat = this.state.vat;
//     const subtotal = unitprice && quantity ? quantity * unitprice : null;
//     const total = vat && subtotal ? vat + subtotal : subtotal;
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView>
//           <Formik
//             initialValues={{
//               amountrecvd: "",
//               receiptnum: "",
//               customer: "",
//               phone: "",
//               date: "",
//               product: "",
//               quantity: "",
//               unit: "",
//               unitprice: "",
//               subtotal: "",
//               vat: "",
//               total: "",
//               paymode: "",
//               invnumber: "",
//               baldue: "",
//               balduedate: ""
//             }}
//             onSubmit={values => {
//               this.handleSubmit(values);
//             }}
//             validationSchema={validationSchema}
//           >
//             {({
//               values,
//               handleChange,
//               errors,
//               setFieldTouched,
//               touched,
//               // handleBlur,
//               isValid,
//               handleSubmit
//             }) => (
//               <Fragment>
//                 <Text style={styles.title}>Sales Form</Text>
//                 <FormInput
//                   label="Amount Received"
//                   name="amountrecvd"
//                   value={values.amountrecvd}
//                   onChangeText={handleChange("amountrecvd")}
//                   placeholder="Enter Amount Received"
//                   iconName="md-person"
//                   //   iconColor="#2C384A"
//                   iconColor="green"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("amountrecvd")}
//                   returnKeyType="next"
//   autoFocus
//                 />
//                 <ErrorMessage
//                   errorValue={touched.amountrecvd && errors.amountrecvd}
//                 />
//                 <FormInput
//                   label="Receipt Number"
//                   name="receiptnum"
//                   value={values.receiptnum}
//                   onChangeText={handleChange("receiptnum")}
//                   placeholder="Enter Receipt Number"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("receiptnum")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.receiptnum && errors.receiptnum}
                // />

//                 <FormInput
//                   label="Customer Name"
//                   name="customer"
//                   value={values.customer}
//                   onChangeText={handleChange("customer")}
//                   placeholder="Enter Customer Name"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("customer")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.customer && errors.customer}
                // />

//                 <FormInput
//                   label="Phone Number"
//                   name="phone"
//                   value={values.phone}
//                   onChangeText={handleChange("phone")}
//                   placeholder="Enter Phone Number"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("phone")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage errorValue={touched.phone && errors.phone} />

//                 <FormInput
//                   label="Date of Sale"
//                   name="date"
//                   value={values.date}
//                   onChangeText={handleChange("date")}
//                   placeholder="Enter Date of Sale"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("date")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.date && errors.date} />

//                 <FormInput
//                   label="Product Name"
//                   name="product"
//                   value={values.product}
//                   onChangeText={handleChange("product")}
//                   placeholder="Enter Product Name"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("product")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.product && errors.product} />
//                 <FormInput
//                   label="Quantity"
//                   name="quantity"
//                   value={values.quantity}
//                   // onChangeText={handleChange("quantity")}
//                   placeholder="Enter Quantity"
//                   keyboardType="numeric"
//                   onChangeText={text =>
//                     this.setState({ quantity: parseInt(text) })
//                   }
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("quantity")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.quantity && errors.quantity}
                // />

//                 <FormInput
//                   label="Units"
//                   name="unit"
//                   value={values.unit}
//                   onChangeText={handleChange("unit")}
//                   placeholder="Enter Units"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("unit")}
//                 />
//                 <ErrorMessage errorValue={touched.unit && errors.unit} />
//                 <FormInput
//                   label="Unit Price"
//                   name="unitprice"
//                   value={values.unitprice}
//                   onChangeText={handleChange("unitprice")}
//                 //   onChangeText={
//                 //     text =>
//                 //       this.setState({
//                 //         unitprice: parseInt(text)
//                 //       })
//                 //     // handleChange('unitprice')
//                 //   }
//                   placeholder="Enter Unit Price"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("unitprice")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.unitprice && errors.unitprice}
                // />
//                 <FormInput
//                   //   <Text>Sub-total {subtotal ? <Text>{subtotal}</Text> : null}</Text>
//                   label="Sub Total"
//                   name="subtotal"
//                   value={values.subtotal}
//                   onChangeText={handleChange("subtotal")}
//                   placeholder="Sub Total is Empty"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("subtotal")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage
//                   errorValue={touched.subtotal && errors.subtotal}
//                 />

//                 <FormInput
//                   label="VAT"
//                   name="vat"
//                   value={values.vat}
//                   onChangeText={handleChange("vat")}
//                   placeholder="Enter VAT"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("vat")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.vat && errors.vat} />

//                 <FormInput
//                   label="Total"
//                   name="total"
//                   value={values.total}
//                   onChangeText={handleChange("total")}
//                   placeholder="Enter Total"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("total")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.total && errors.total} />

//                 <FormInput
//                   label="Payment Mode"
//                   name="paymode"
//                   value={values.paymode}
//                   onChangeText={handleChange("paymode")}
//                   placeholder="Enter Payment Mode"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("paymode")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.paymode && errors.paymode} />

//                 <FormInput
//                   label="Invoice Number"
//                   name="invnumber"
//                   value={values.invnumber}
//                   onChangeText={handleChange("invnumber")}
//                   placeholder="Enter Invoice Number"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("invnumber")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.invnumber && errors.invnumber}
                // />
//                 {/* {touched.paymode && errors.paymode && (
//                 <Text style={{ fontSize: 10, color: "red" }}>
//                   {errors.paymode}
//                 </Text>
//               )} */}
//                 <FormInput
//                   label="Balance Due"
//                   name="baldue"
//                   value={values.baldue}
//                   onChangeText={handleChange("baldue")}
//                   placeholder="Enter Balance Due"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   keyboardType="numeric"
//                   onBlur={() => setFieldTouched("baldue")}
//                   returnKeyType="next"
//                 />
//                 <ErrorMessage errorValue={touched.baldue && errors.baldue} />
//                 <FormInput
//                   label="Due Date"
//                   name="balduedate"
//                   value={values.balduedate}
//                   onChangeText={handleChange("balduedate")}
//                   placeholder="Enter Due Date"
//                   // iconName="md-person"
//                   // iconColor="#2C384A"
//                   onBlur={() => setFieldTouched("balduedate")}
//                   returnKeyType="next"
//                 />
                // <ErrorMessage
                //   errorValue={touched.balduedate && errors.balduedate}
                // />
//                 <View style={styles.button}>
//                   <Button
//                     color="#0A802B"
//                     title="SAVE"
//                     disabled={!isValid}
//                     onPress={handleSubmit}
//                   />
//                 </View>
//               </Fragment>
//             )}
//           </Formik>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     // marginTop: 15,
//     padding: 20,
//     borderWidth: 5,
//     borderColor: "#006432",
//     borderRadius: 10
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: 5,
//     color: "#006432",
//     textAlign: "center",
//     marginBottom: 25
//   },
//   button: {
//     marginTop: 20,
//     marginBottom: 50,
//     elevation: 10,
//     marginRight: 80,
//     marginLeft: 80
//     // borderWidth: 3,
//     // borderColor: "#006432",
//     // borderRadius: 10
//   }
// });
import { Formik } from "formik";
import * as yup from "yup";
import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  Alert,
  ScrollView,
  StyleSheet
} from "react-native";

// const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
//   <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
//     <Text style={{ marginBottom: 3 }}>{label}</Text>
//     {children}
//     <Text style={{ color: "red" }}>
//       {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
//     </Text>
//   </View>
// );
const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    // borderWidth: 1,
    // borderColor: "#006432",
    // padding: 5,
    // marginBottom: 3
  };
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = "red";
  }
  // return (
  //   <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
  //     <TextInput
  //       style={inputStyles}
  //       onChangeText={formikProps.handleChange(formikKey)}
  //       onBlur={formikProps.handleBlur(formikKey)}
  //       {...rest}
  //     />
  //   </FieldWrapper>
  // );
};
// const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
//   <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
//     <Switch
//       value={formikProps.values[formikKey]}
//       onValueChange={value => {
//         formikProps.setFieldValue(formikKey, value);
//       }}
//       {...rest}
//     />
//   </FieldWrapper>
// );

const validationSchema = yup.object().shape({
  amountrecvd: yup
    .number()
    .label("Amount Received")
    .required()
    .min(2, "Must have at least 2 characters"),
  receiptnum: yup
    .string()
    .label("Receipt Number")
    .required()
    .min(2, "Must have at least 2 characters"),
  customer: yup
    .string()
    .label("Customer Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  phone: yup
    .string()
    .label("Phone Number")
    .required()
    .min(2, "Must have at least 2 characters"),
  date: yup
    .date()
    .label("Date of Sale")
    .required()
    .min(2, "Must have at least 2 characters"),
  product: yup
    .string()
    .label("Product Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  quantity: yup
    .string()
    .label("Quantity")
    .required()
    .min(2, "Must have at least 2 characters"),
  unit: yup
    .string()
    .label("Units")
    .required()
    .min(2, "Must have at least 2 characters"),
  unitprice: yup
    .string()
    .label("Unit Price")
    .required()
    .min(2, "Must have at least 2 characters"),
  subtotal: yup
    .number()
    .label("Sub Total")
    .required()
    .positive()
    .integer(),
  vat: yup
    .string()
    .label("VAT")
    .required()
    .min(2, "Must have at least 2 characters"),
  total: yup
    .string()
    .label("Total")
    .required()
    .min(2, "Must have at least 2 characters"),
  paymode: yup
    .string()
    .label("Payment Mode")
    .required()
    .min(2, "Must have at least 2 characters"),
  invnumber: yup
    .string()
    .label("Invoice Number")
    .required()
    .min(2, "Must have at least 2 characters"),
  baldue: yup
    .string()
    .label("Balance Due")
    .required()
    .min(2, "Must have at least 2 characters"),
  balduedate: yup
    .date()
    .label("Due Date")
    .required()
    .min(2, "Must have at least 2 characters")
});

export default class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { unitprice: "", quantity: "", subtotal: "" };
  }
  render() {
    var unitprice = this.state.unitprice;
    var quantity = this.state.quantity;
    var vat = this.state.vat;
    const subtotal = unitprice && quantity ? quantity * unitprice : null;
    const total = vat && subtotal ? vat + subtotal : subtotal;

    return (
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Formik
              initialValues={
                {
                  // amountrecvd: "",
                  // receiptnum: "",
                  // customer: "",
                  // phone: "",
                  // date: "",
                  // product: "",
                  // quantity: "",
                  // unit: "",
                  // unitprice: "",
                  // subtotal: "",
                  // vat: "",
                  // total: "",
                  // paymode: "",
                  // invnumber: "",
                  // baldue: "",
                  // balduedate: "",
                  // agreeToTerms: false
                }
              }
              onSubmit={values => Alert.alert(JSON.stringify(values))}
              validationSchema={validationSchema}
            >
              {formikProps => (
                <Fragment>
                  <Text style={styles.title}>Sales Form</Text>
                  <StyledInput
                    label="Amount Received"
                    formikProps={formikProps}
                    formikKey="amountrecvd"
                    placeholder="Amount Received"
                    // keyboardType="numeric"
                    autoFocus
                  />

                  <StyledInput
                    label="Receipt Number"
                    formikProps={formikProps}
                    formikKey="receiptnum"
                    placeholder="Receipt Number"
                    returnKeyType="next"
                  />
                  <StyledInput
                    label="Customer Name"
                    formikProps={formikProps}
                    formikKey="customer"
                    placeholder="Customer Name"
                    returnKeyType="next"
                  />
                  <StyledInput
                    label="Phone Number"
                    formikProps={formikProps}
                    formikKey="phone"
                    placeholder="Phone Number"
                    returnKeyType="next"
                  />
                  <StyledInput
                    label="Date of Sale"
                    formikProps={formikProps}
                    formikKey="date"
                    placeholder="Date of Sale"
                    returnKeyType="next"
                  />
                  <StyledInput
                    label="Product Name"
                    formikProps={formikProps}
                    formikKey="product"
                    placeholder="Product Name"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Quantity"
                    formikProps={formikProps}
                    formikKey="quantity"
                    placeholder="Quantity"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Units"
                    formikProps={formikProps}
                    formikKey="unit"
                    placeholder="Unit"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Unit Price"
                    formikProps={formikProps}
                    formikKey="unitprice"
                    placeholder="Unit Price"
                    // returnKeyType="next"
                  />

                  <StyledInput
                    label="Sub-total"
                    formikProps={formikProps}
                    formikKey="subtotal"
                    placeholder="Sub-total"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="VAT"
                    formikProps={formikProps}
                    formikKey="vat"
                    placeholder="VAT"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Total"
                    formikProps={formikProps}
                    formikKey="total"
                    placeholder="Total"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Payment mode"
                    formikProps={formikProps}
                    formikKey="paymode"
                    placeholder="Payment mode"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Invoice number"
                    formikProps={formikProps}
                    formikKey="invnumber"
                    placeholder="Invoice number"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Balance due"
                    formikProps={formikProps}
                    formikKey="baldue"
                    placeholder="Balance due"
                    // returnKeyType="next"
                  />
                  <StyledInput
                    label="Balance due date"
                    formikProps={formikProps}
                    formikKey="balduedate"
                    placeholder="Balance due date"
                  />
                  {/* <StyledSwitch
                    label="Agree to Terms"
                    formikKey="agreeToTerms"
                    formikProps={formikProps}
                  /> */}
                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <View style={styles.button}>
                      <Button
                        color="#0A802B"
                        title="SAVE"
                        // disabled={!isValid}
                        onPress={formikProps.handleSubmit}
                      />
                    </View>
                  )}
                </Fragment>
              )}
            </Formik>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginTop: 15,
    padding: 20,
    borderWidth: 5,
    borderColor: "#006432",
    borderRadius: 10
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
    marginBottom: 50,
    elevation: 10,
    marginRight: 80,
    marginLeft: 80
    // borderWidth: 3,
    // borderColor: "#006432",
    // borderRadius: 10
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18
  }
});
