import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account({ navigation }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      // Simply clear AsyncStorage and let App.js handle the navigation
      // through the authentication state change
    } catch (error) {
      console.error("Error logging out:", error);
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Log in button */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("LogInScreen")}
      >
        <View style={styles.iconTextContainer}>
          <Ionicons name="log-in-outline" size={24} color="#555" />
          <Text style={styles.text}>Log In</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Sign UP button */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <View style={styles.iconTextContainer}>
          <Ionicons name="person-add-outline" size={24} color="#555" />
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity
        style={[styles.Button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <View style={styles.iconTextContainer}>
          <Ionicons name="log-out-outline" size={24} color="#d9534f" />
          <Text style={[styles.text, styles.logoutText]}>Log Out</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#d9534f" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 50,
    fontSize: 16,
    color: "#555",
  },
  logoutButton: {
    borderColor: "#d9534f",
    marginTop: 30,
  },
  logoutText: {
    color: "#d9534f",
  },
});
