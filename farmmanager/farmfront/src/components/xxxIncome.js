import * as yup from "yup";
import { Formik } from "formik";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import React, { Component, Fragment } from "react";
import ErrorMessage from "../otherComponents/ErrorMessage";
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const InputStyles = {
    // borderWidth: 1,
    // borderColor: "black",
    // padding: 10,
    // marginBottom: 3
  };
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    InputStyles.borderColor = "red";
  }
};

// handleSubmit

const validationSchema = yup.object().shape({
  amountrecvd: yup
    .number()
    .label("Amount Received")
    .required()
    .min(2, "Must have at least 2 characters"),
  receiptnum: yup
    .string()
    .label("Receipt Number")
    // .required()
    .min(2, "Must have at least 2 characters"),
  customer: yup
    .string()
    .label("Customer Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  phone: yup
    .number()
    .label("Phone Number")
    .required()
    .min(9, "Must have at least 9 characters"),
  // .max(10, "Must have a maximum of 10 numbers"),
  saledate: yup
    // .date()
    // .min(new Date("2019-05-20"))
    // .max(new Date())
    // .required(),
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
    .number()
    .label("Quantity")
    .required()
    .positive()
    .integer(),
  unit: yup
    .string()
    .label("Units")
    .required()
    .min(2, "Must have at least 2 characters"),
  unitprice: yup
    .number()
    .label("Unit Price")
    .required()
    .positive()
    .integer(),
  subtotal: yup
    .number()
    .label("Sub Total")
    .required()
    .positive()
    .integer(),
  vat: yup
    .number()
    .label("VAT")
    .positive()
    .integer(),
  total: yup
    .number()
    .label("Total")
    .required()
    .positive()
    .integer(),
  // .string()
  // .label("Total")
  // .required()
  // .min(2, "Must have at least 2 characters"),
  paymode: yup
    .string()
    .label("Payment Mode")
    .required()
    .min(2, "Must have at least 2 characters"),
  invnumber: yup
    .string()
    .label("Invoice Number")
    //.required()
    .min(2, "Must have at least 2 characters"),
  baldue: yup
    .number()
    .label("Balance Due")
    .positive()
    .integer(),
  balduedate: yup
    .date()
    .label("Due Date")
    // .required()
    .min(2, "Must have at least 2 characters")
});

export default class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitprice: "",
      quantity: "",
      vat: "",
      subtotal: "",
      total: ""
    };
  }

  // handleSubmit = values => {
  //   if (values.email.length > 0 && values.password.length > 0) {
  //     setTimeout(() => {
  //       this.props.navigation.navigate("App");
  //     }, 3000);
  //   }
  // };

  // clearForm = () => {
  //   // clear content from all textbox
  //   this.setState({ values: null });
  // };

  // handleSubmit = values => {
  //   console.log(values);
  //   if (values != null) {
  //     (this.amountrecvd = values.amountrecvd),
  //       (this.receiptnum = values.receiptnum),
  //       (this.customer = values.customer),
  //       (this.phone = values.phone),
  //       (this.date = values.date),
  //       (this.product = values.product),
  //       (this.quantity = values.quantity),
  //       (this.unit = values.unit),
  //       (this.unitprice = values.unitprice),
  //       (this.subtotal = values.subtotal),
  //       (this.vat = values.vat),
  //       (this.total = values.total),
  //       (this.paymode = values.paymode),
  //       (this.invnumber = values.invnumber),
  //       (this.baldue = values.baldue),
  //       (this.balduedate = values.balduedate),
  //       // this.InsertDataToServer();
  //       this.clearForm();
  //     // alert("Income captured!");
  //     Alert.alert(values);
  //   } else console.log("No data entered");
  // };
  render() {
    //   const inputStyle = {
    //     borderWidth: 1,
    //     borderColor: "#4e4e4e",
    //     padding: 12,
    //     marginBottom: 5
    //   };
    var unitprice = this.state.unitprice;
    var quantity = this.state.quantity;
    var vat = this.state.vat;
    const subtotal = unitprice && quantity ? quantity * unitprice : null;
    const total = vat && subtotal ? vat + subtotal : subtotal;
    // const total =
    //   unitprice && quantity && tax ? quantity * unitprice + tax : null;
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Formik
              initialValues={{
                amountrecvd: "",
                receiptnum: "",
                customer: "",
                phone: "",
                saledate: "",
                product: "",
                // quantity: "",
                unit: "",
                // unitprice: "",
                subtotal: "",
                // vat: "",
                total: "",
                paymode: "",
                invnumber: "",
                baldue: "",
                balduedate: ""
              }}
              onSubmit={values => Alert.alert(JSON.stringify(values))}
              //   onSubmit={async values => {
              //     await new Promise(resolve => setTimeout(resolve, 1000));
              //     alert(JSON.stringify(values));
              // onSubmit={values => console.log(values)}
              // onSubmit={values => {
              //   this.handleSubmit(values);
              // }}
              // validationSchema={yup.object().shape({
              //   customer: yup.string().required(),
              //   password: yup
              //     .string()
              //     .min(6)
              //     .required()
              //   }}
              //   validationSchema={validationSchema}
            >
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
                setFieldValue
              }) => (
                <Fragment>
                  <Text style={styles.title}>Sales Form</Text>
                  <Text style={styles.label}>
                    Amount Received
                    <Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.amountrecvd}
                    keyboardType="numeric"
                    onChangeText={handleChange("amountrecvd")}
                    onBlur={() => setFieldTouched("amountrecvd")}
                    placeholder="Amount Received"
                    autofocus
                  />
                  {/* {touched.amountrecvd && errors.amountrecvd && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {errors.amountrecvd}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.amountrecvd && errors.amountrecvd}
                  />
                  <Text style={styles.label}>Receipt Number</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.receiptnum}
                    onChangeText={handleChange("receiptnum")}
                    onBlur={() => setFieldTouched("receiptnum")}
                    placeholder="Receipt number"
                  />
                  {/* {touched.receiptnum && errors.receiptnum && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.receiptnum}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.receiptnum && errors.receiptnum}
                  />
                  <Text style={styles.label}>
                    Customer Name
                    <Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.customer}
                    onChangeText={handleChange("customer")}
                    onBlur={() => setFieldTouched("customer")}
                    placeholder="Customer name"
                  />
                  {/* {touched.customer && errors.customer && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {errors.customer}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.customer && errors.customer}
                  />
                  <Text style={styles.label}>
                    Phone Number
                    <Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.phone}
                    keyboardType="numeric"
                    onChangeText={handleChange("phone")}
                    onBlur={() => setFieldTouched("phone")}
                    placeholder="Customer's number"
                  />
                  {/* {touched.phone && errors.phone && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.phone}
                    </Text>
                  )} */}
                  <ErrorMessage errorValue={touched.phone && errors.phone} />
                  <Text style={styles.label}>
                    Date of Sale<Text style={styles.text}>*</Text>
                  </Text>
                  {/* <TextInput
                    style={styles.InputStyle}
                    value={values.date}
                    onChangeText={handleChange("date")}
                    onBlur={() => setFieldTouched("date")}
                    placeholder="Date of sale"
                  /> */}
                  <DatePicker
                    style={styles.InputStyle}
                    selected={values.saledate}
                    dateFormat="MMMM d, yyyy"
                    // className="form-control"
                    // name="date"
                    onChangeText={date => setFieldValue("saledate", date)}
                  />
                  <ErrorMessage
                    errorValue={touched.saledate && errors.saledate}
                  />
                  <Text style={styles.label}>
                    Product Name
                    <Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.product}
                    onChangeText={handleChange("product")}
                    onBlur={() => setFieldTouched("product")}
                    placeholder="Product name"
                  />
                  {/* {touched.product && errors.product && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.product}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.product && errors.product}
                  />
                  <Text style={styles.label}>
                    Quantity<Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.quantity}
                    placeholder="Quantity"
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched("quantity")}
                    onChangeText={text =>
                      this.setState({ quantity: parseInt(text) })
                    }
                  />
                  <ErrorMessage
                    errorValue={touched.quantity && errors.quantity}
                  />
                  <Text style={styles.label}>
                    Units<Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.unit}
                    onChangeText={handleChange("unit")}
                    onBlur={() => setFieldTouched("unit")}
                    placeholder="Units"
                  />
                  {/* {touched.unit && errors.unit && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.unit}
                    </Text>
                  )} */}
                  <ErrorMessage errorValue={touched.unit && errors.unit} />
                  <Text style={styles.label}>
                    Unit Price<Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.unitprice}
                    placeholder="Unit price"
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched("unitprice")}
                    onChangeText={text =>
                      this.setState({
                        unitprice: parseInt(text)
                      })
                    }
                  />
                  <ErrorMessage
                    errorValue={touched.unitprice && errors.unitprice}
                  />
                  <Text style={styles.label}>
                    Sub-total<Text style={styles.text}>*</Text>
                  </Text>
                  <Text style={styles.InputStyle1}>
                    {subtotal ? <Text>{subtotal}</Text> : null}
                  </Text>
                  {/* <ErrorMessage
                    errorValue={touched.subtotal && errors.subtotal}
                  /> */}
                  <Text style={styles.label}>VAT</Text>
                  <TextInput
                    style={styles.InputStyle}
                    // value={values.vat}
                    placeholder="Vat"
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched("vat")}
                    onChangeText={text =>
                      this.setState({
                        vat: parseInt(text)
                      })
                    }
                  />
                  <ErrorMessage errorValue={touched.vat && errors.vat} />
                  <Text style={styles.label}>
                    Total<Text style={styles.text}>*</Text>
                  </Text>
                  <Text style={styles.InputStyle1}>
                    {total ? <Text>{total}</Text> : null}
                  </Text>
                  {/* <ErrorMessage errorValue={touched.total && errors.total} /> */}

                  <Text style={styles.label}>
                    Payment mode <Text style={styles.text}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.paymode}
                    onChangeText={handleChange("paymode")}
                    onBlur={() => setFieldTouched("paymode")}
                    placeholder="Payment mode"
                  />
                  {/* {touched.paymode && errors.paymode && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.paymode}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.paymode && errors.paymode}
                  />
                  <Text style={styles.label}>Invoice number</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.invnumber}
                    onChangeText={handleChange("invnumber")}
                    onBlur={() => setFieldTouched("invnumber")}
                    placeholder="Invoice number"
                  />
                  {/* {touched.invnumber && errors.invnumber && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.invnumber}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.invnumber && errors.invnumber}
                  />
                  <Text style={styles.label}>Balance due</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.baldue}
                    onChangeText={handleChange("baldue")}
                    onBlur={() => setFieldTouched("baldue")}
                    placeholder="Balance due"
                  />
                  {/* {touched.baldue && errors.baldue && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.baldue}
                    </Text>
                  )} */}
                  <ErrorMessage errorValue={touched.baldue && errors.baldue} />
                  <Text style={styles.label}>Balance due date</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={values.balduedate}
                    onChangeText={handleChange("balduedate")}
                    onBlur={() => setFieldTouched("balduedate")}
                    placeholder="Balance due date"
                  />
                  {/* {touched.balduedate && errors.balduedate && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.balduedate}
                    </Text>
                  )} */}
                  <ErrorMessage
                    errorValue={touched.balduedate && errors.balduedate}
                  />
                  <View style={styles.button}>
                    <Button
                      color="#0A802B"
                      title="Submit"
                      disabled={!isValid}
                      onPress={handleSubmit}
                      // onPress={props.handleSubmit}
                      // onPress={() => props.handleSubmit()}
                    />
                  </View>
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
    marginBottom: 15
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
    marginRight: 80,
    marginLeft: 80
    // borderWidth: 3,
    // borderColor: "#006432",
    // borderRadius: 10
  },
  InputStyle: {
    borderWidth: 1,
    borderColor: "#006432",
    padding: 5,
    // marginBottom: 10,
    borderRadius: 5,
    fontSize: 18
  },
  InputStyle1: {
    borderWidth: 1,
    borderColor: "#006432",
    padding: 5,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 18
  },
  label: {
    color: "#006432",
    fontSize: 20
  },
  text: {
    color: "red"
  }
});
