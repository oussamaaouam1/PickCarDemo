import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LocationIcon from "../assets/SVGs/undraw_my_current_location_re_whmt (1).svg";
import DateModalComponent from "./DateModalComponent";

export default function MainScreen({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    if (route.params?.selectedLocation) {
      setCurrentLocation(route.params.selectedLocation);
    }
  }, [route.params?.selectedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.SearchBar}>
        <View>
          <TouchableOpacity
            style={styles.searchbox}
            onPress={() => {
              navigation.navigate("LocationSearch");
            }}
          >
            <Ionicons name="location-outline" size={20} color="#46B9B0" />
            <Text style={styles.text}>{currentLocation || "Where?"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <TouchableOpacity
            style={styles.searchbox}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="calendar-outline" size={20} color="#46B9B0" />
            <Text style={styles.text}>
              {selectedDates[0] && selectedDates[1]
                ? `${selectedDates[0]} to ${selectedDates[1]}`
                : "When?"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <LocationIcon width={250} height={250} style={styles.LocationIcon} />
      </View>
      <Text style={styles.locationtxt}>
        Try Unable your location services to access you current location or type
        an address
      </Text>

      <DateModalComponent
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSelectDates={(dates) => {
          setSelectedDates(dates);
        }}
      />
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
  SearchBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "90%",
    borderColor: "grey",
    borderRadius: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    position: "absolute",
    top: 50,
  },
  searchbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "grey",
    marginTop: 8,
    paddingTop: 8,
  },
  text: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
  LocationIcon: {
    marginBottom: 20,
  },
  locationtxt: {
    fontFamily: "Mina",
    width: "80%",
    textAlign: "center",
  },
});
