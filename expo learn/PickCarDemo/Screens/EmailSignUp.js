import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Validation schema for the form
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .required("First Name is required"),
  lastName: Yup.string().min(3, "Too Short!").required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*\d)/,
      "Password must include an uppercase letter, number, and symbol"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  agreement: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

// Initial form values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreement: false,
};

export default function EmailSignUp({ navigation }) {
  // Function to save user data to AsyncStorage
  const saveToAsyncStorage = async (data) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      console.log("User data saved successfully:", data);
      alert("Registration successful!");
      // You can add navigation here if needed
      // navigation.navigate('NextScreen');
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Registration failed. Please try again.");
    }
  };

  // Custom Input component to reduce repetition
  const FormInput = ({ field, placeholder, secureTextEntry = false }) => (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={field.handleChange}
        onBlur={field.handleBlur}
        value={field.value}
        secureTextEntry={secureTextEntry}
      />
      {field.touched && field.error && (
        <Text style={styles.error}>{field.error}</Text>
      )}
    </>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
        saveToAsyncStorage(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>

          {/* First Name Input */}
          <FormInput
            field={{
              handleChange: handleChange("firstName"),
              handleBlur: handleBlur("firstName"),
              value: values.firstName,
              touched: touched.firstName,
              error: errors.firstName,
            }}
            placeholder="First Name"
          />

          {/* Last Name Input */}
          <FormInput
            field={{
              handleChange: handleChange("lastName"),
              handleBlur: handleBlur("lastName"),
              value: values.lastName,
              touched: touched.lastName,
              error: errors.lastName,
            }}
            placeholder="Last Name"
          />

          {/* Email Input */}
          <FormInput
            field={{
              handleChange: handleChange("email"),
              handleBlur: handleBlur("email"),
              value: values.email,
              touched: touched.email,
              error: errors.email,
            }}
            placeholder="Email"
          />

          {/* Password Input */}
          <FormInput
            field={{
              handleChange: handleChange("password"),
              handleBlur: handleBlur("password"),
              value: values.password,
              touched: touched.password,
              error: errors.password,
            }}
            placeholder="Password"
            secureTextEntry
          />

          {/* Confirm Password Input */}
          <FormInput
            field={{
              handleChange: handleChange("confirmPassword"),
              handleBlur: handleBlur("confirmPassword"),
              value: values.confirmPassword,
              touched: touched.confirmPassword,
              error: errors.confirmPassword,
            }}
            placeholder="Confirm Password"
            secureTextEntry
          />

          {/* Agreement Checkbox */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={values.agreement ? "checked" : "unchecked"}
              onPress={() => setFieldValue("agreement", !values.agreement)}
              color="#46B9B0"
            />
            <Text style={styles.checkboxLabel}>
              I agree to the terms and conditions
            </Text>
          </View>
          {touched.agreement && errors.agreement && (
            <Text style={styles.error}>{errors.agreement}</Text>
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  submit: {
    backgroundColor: "#46B9B0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
