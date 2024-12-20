import React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CarIcon from "../assets/SVGs/City driver-rafiki.svg";
import CarIcon1 from "../assets/SVGs/Order ride-pana.svg";
import CarIcon2 from "../assets/SVGs/Car finance-pana.svg";
import Scroll1 from "../assets/verticalScroll/scroll 1.svg";
import Scroll2 from "../assets/verticalScroll/scroll 2.svg";
import Scroll3 from "../assets/verticalScroll/scroll 3.svg";
import { useEffect } from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const slides = [
    {
      key: 1,
      title: "Pick cars near you",
      description: "Reach your car easily and everywhere",
      Icon: CarIcon,
      Scroll: Scroll1,
    },
    {
      key: 2,
      title: "Affordable Rentals",
      description: "Find the best car rental deals near you",
      Icon: CarIcon1,
      Scroll: Scroll2,
    },
    {
      key: 3,
      title: "Reliable Service",
      description: "Get high-quality and well-maintained cars",
      Icon: CarIcon2,
      Scroll: Scroll3,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Car</Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {slides.map((slide) => (
          <View style={styles.slide} key={slide.key}>
            <slide.Icon width={width * 0.8} height={height * 0.4} />
            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={styles.slideDescription}>{slide.description}</Text>
            <slide.Scroll />
          </View>
        ))}
      </ScrollView>

      <Button
        style={styles.submit}
        mode="contained"
        onPress={() => navigation.navigate("LogInScreen")}
      >
        <Text style={styles.submitText}>Log In</Text>
      </Button>

      <Button
        style={styles.submit}
        mode="contained"
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.submitText}>Sign Up</Text>
      </Button>
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
    paddingVertical: height * 0.05,
  },
  title: {
    fontFamily: "Merase-font",
    fontSize: width * 0.06,
    marginBottom: height * 0.02,
    marginTop:20,
  },
  scrollContainer: {
    alignItems: "center",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },
  slideTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginVertical: height * 0.02,
  },
  slideDescription: {
    fontSize: width * 0.04,
    color: "#555",
    textAlign: "center",
  },
  submit: {
    backgroundColor: "#46B9B0",
    marginVertical: height * 0.02,
    width: width * 0.85,
    borderRadius: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "btnfont",
    letterSpacing: 2,
    fontSize: width * 0.04,
  },
});
