import React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { useEffect } from "react";
import CarIcon from "../assets/SVGs/City driver-rafiki.svg"
// import BottomTabNavigator from "../components/BottomTabNavigator";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.navigate("Tabs");
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Merase-font",
          fontSize: 24,
          marginVertical: 50,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        Pick car
      </Text>
      {/* <Image
        source={require("../assets/draws/undraw_order_ride.jpg")}
        style={{ marginHorizontal: 20 }}
      /> */}
      <CarIcon width={400} height={400} />  
      <Text
        style={{
          fontSize: 24,
          marginTop: 0,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Pick cars near you
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginVertical: 50,
          marginTop: 0,
          marginBottom: 50,
        }}
      >
        reach your car in easy way and every where
      </Text>

      <Button
        style={styles.submit}
        title="Go to MainScreen"
        onPress={() => {
          navigation.navigate("LogInScreen");
        }}
      >
        <Text style={styles.submitText}>Log in</Text>
      </Button>

      <Button
        style={styles.submit}
        title="Go to MainScreen"
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Text style={styles.submitText}>Sign up</Text>
      </Button>

      {/* <View style={styles.bottomTabContainer}>
        <BottomTabNavigator />
      </View> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    marginTop: 0,
  },
  submit: {
    backgroundColor: "#46B9B0",
    marginBottom: 20,
    width: "85%",
    borderRadius: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "btnfont",
    letterSpacing: 4,
  },
  bottomTabContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
