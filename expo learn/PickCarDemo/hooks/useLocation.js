import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const getUserLocation = async () => {
    // Request permission to access the user's location
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Location Permission denied");
      return;
    }

    // Get the user's current position
    let location = await Location.getCurrentPositionAsync();

    if (location) {
      const { latitude, longitude } = location.coords; // Correct key is 'coords'
      console.log("lat and long:", latitude, longitude);

      setLatitude(latitude);
      setLongitude(longitude);

      // Reverse geocoding to get address
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log("User location is:", response);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    latitude,
    longitude,
    errorMsg,
  };
};

export default useLocation;

const styles = StyleSheet.create({});
