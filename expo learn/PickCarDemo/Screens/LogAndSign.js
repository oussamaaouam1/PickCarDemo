import React from "react";
import { Button } from "react-native";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      {/* {/---------------* log in button *-------------------/} */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          navigation.navigate("LogInScreen");
        }}
      >
        <View style={styles.iconTextContainer}>
          <Ionicons name="log-in-outline" size={24} color="#555" />
          <Text style={styles.text}>Log In</Text>
        </View>

        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>
      {/* {/---------------* sign UP button *-------------------/} */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <View style={styles.iconTextContainer}>
          <Ionicons name="person-add-outline" size={24} color="#555" />
          <Text style={styles.text}>Sign Up</Text>
        </View>

        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
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
    display: "flex",
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
    justifyContent:"space-between",
  },
  text: {
    marginLeft: 50,
    fontSize: 16,
    color: "#555",
  },
});
