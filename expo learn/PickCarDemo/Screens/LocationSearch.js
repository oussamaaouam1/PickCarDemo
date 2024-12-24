import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";
import { useNavigation } from "@react-navigation/native";


export default function LocationSearch() {
  const navigation = useNavigation(); // Access the navigation object

  const { latitude, longitude, errorMsg } = useLocation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Ensure the StatusBar component is included for consistent appearance */}
      <StatusBar style="dark" />

      <View style={styles.searchBar}>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Ionicons name="close-outline" size={35} color="#46B9B0" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Enter address, street, station ..."
        />
      </View>

      <TouchableOpacity style={styles.LocationBtn}>
        <Ionicons name="locate-outline" size={20} color="#46B9B0" />
        <Text style={styles.curLoc}>Current location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 }, // Shadow only at the bottom
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Shadow for Android
    borderBottomWidth: 3,
    borderBottomColor: "rgba(0, 0, 0, 0.08)", // Light shadow effect

    elevation: 0,
  },
  submit: {
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  LocationBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    paddingTop: 40,
  },
  curLoc: {
    marginLeft:20,
  }
  
});
