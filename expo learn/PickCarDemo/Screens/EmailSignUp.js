import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Checkbox } from "react-native-paper";

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
  agreement: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

export default function EmailSignUp({ navigation }) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreement: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("Form submitted successfully!");
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

          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && (
            <Text style={styles.error}>{errors.firstName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && (
            <Text style={styles.error}>{errors.lastName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={values.agreement ? "checked" : "unchecked"}
              onPress={() => setFieldValue("agreement", !values.agreement)} // Update the agreement value
              color="#46B9B0"
            />
            <Text style={styles.checkboxLabel}>
              I agree to the terms and conditions
            </Text>
          </View>
          {touched.agreement && errors.agreement && (
            <Text style={styles.error}>{errors.agreement}</Text>
          )}

          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

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
    backgroundColor: "#46B9B0", // Set background color to #46B9B0
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
