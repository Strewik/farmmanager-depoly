import React from "react";
import { Input } from "react-native-elements";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// const FormInput = ({
//   iconName,
//   iconColor,
//   returnKeyType,
//   keyboardType,
//   name,
//   placeholder,
//   ...rest
// }) => (
//   <View style={styles.inputContainer}>
//     <Input
//       {...rest}
//       leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
//       leftIconContainerStyle={styles.iconStyle}
//       placeholderTextColor="gray"
//       name={name}
//       placeholder={placeholder}
//       style={styles.input}
//       // label={styles.label}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   // inputContainer: {
//   //   // borderWidth: 1,
//   //   borderColor: "black"
//   //   // padding: 10,
//   //   // marginBottom: 3
//   // },
//   iconStyle: {
//     marginRight: 10
//   },
//   // label:{
//   //   color:"green"
//   // }
//   input: {
//     borderWidth: 1,
//       borderColor: "black"
//       // padding: 10,
//       // marginBottom: 3
//   }
// });

// export default FormInput;

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3 }}>{label}</Text>
    {children}
    <Text style={{ color: "red" }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);
const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    marginBottom: 3
  };
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = "red";
  }
  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default FieldWrapper;