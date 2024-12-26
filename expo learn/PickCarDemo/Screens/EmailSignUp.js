import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
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
  const handleSignUp = async (values) => {
    try {
      console.log("Starting sign up process...");

      // Save user data to AsyncStorage
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      console.log("User data saved successfully");

      // Show success message
      Alert.alert("Success", "Account created successfully!", [
        {
          text: "OK",
          onPress: () => {
            // Navigate to MainTabs after user acknowledges
            navigation.reset({
              index: 0,
              routes: [{ name: "MainTabs" }],
            });
          },
        },
      ]);
    } catch (error) {
      console.error("Error during sign up:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignUp}
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

          {/* Last Name Input */}
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

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          {/* Confirm Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            secureTextEntry
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

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
