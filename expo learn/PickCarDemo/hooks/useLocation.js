import { StyleSheet, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const getUserLocation = async () => {
    try {
      // Check if running on web
      if (Platform.OS === "web") {
        return await getWebLocation();
      } else {
        return await getNativeLocation();
      }
    } catch (error) {
      console.error("Location error:", error);
      setErrorMsg("Error getting location: " + error.message);
      return null;
    }
  };

  const getWebLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Web location:", { latitude, longitude });
          setLatitude(latitude);
          setLongitude(longitude);

          

          try {
            // Use a free geocoding service for web
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            console.log("Web geocoding response:", data);

            if (data) {
              const address =
                data.display_name ||
                `${data.address?.road || ""} ${data.address?.city || ""}, ${
                  data.address?.country || ""
                }`;
              return {
                latitude,
                longitude,
                address,
              };
            }
          } catch (error) {
            console.error("Geocoding error:", error);
            // Return coordinates if geocoding fails
            return {
              latitude,
              longitude,
              address: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
            };
          }
        },
        (error) => {
          console.error("Web geolocation error:", error);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    });
  };

  const getNativeLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log("Location permission status:", status);

    if (status !== "granted") {
      setErrorMsg("Location Permission denied");
      console.log("Permission denied");
      return null;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    if (location) {
      const { latitude, longitude } = location.coords;
      console.log("Raw location:", { latitude, longitude });
      setLatitude(latitude);
      setLongitude(longitude);

      // Reverse geocoding to get address
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log("Reverse geocode response:", response);

      if (response && response[0]) {
        const address = `${response[0].street || ""} ${
          response[0].city || ""
        }, ${response[0].region || ""}`;
        return {
          latitude,
          longitude,
          address,
        };
      }
    }
    return null;
  };

  return {
    latitude,
    longitude,
    errorMsg,
    getUserLocation,
  };
};

export default useLocation;

const styles = StyleSheet.create({});
