import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";


export default function SignUpScreen({ navigation }) {
const [activeTab, setActiveTab] = useState("signup");

const underlineWidth = new Animated.Value(activeTab === "signup" ? 0 : 100); // Animation width
const underlineHeight = new Animated.Value(activeTab === "signup" ? 3 : 1);

useEffect(() => {
  // Animate the underline width when activeTab changes
  Animated.timing(underlineWidth, {
    toValue: 100, // 100% width
    duration: 400, // Duration of the animation in ms
    useNativeDriver: false,
  }).start();
}, [activeTab]);
return (
  <View style={styles.container}>
    <View style={styles.LogSign}>
      {/* LOG IN Tab */}
      <TouchableOpacity
        onPress={() => {setActiveTab("login")
          navigation.navigate("LogInScreen")
        }}
        style={styles.tabContainer}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "login" ? styles.activeText : {},
          ]}
        >
          LOG IN
        </Text>
        <Animated.View
          style={[
            styles.underline,
            {
              width: activeTab === "login" ? underlineWidth : "100%",
              height: activeTab === "login" ? underlineHeight : 1, // Bolder underline for selected tab
            },
          ]}
        />
      </TouchableOpacity>

      {/* SIGN UP Tab */}
      <TouchableOpacity
        onPress={() => {
          setActiveTab("signup");
          // navigation.navigate("SignUpScreen");
        }}
        style={styles.tabContainer}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "signup" ? styles.activeText : {},
          ]}
        >
          SIGN UP
        </Text>
        <Animated.View
          style={[
            styles.underline,
            {
              width: activeTab === "signup" ? underlineWidth : "100%",
              height: activeTab === "signup" ? underlineHeight : 1, // Bolder underline for selected tab
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LogSign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  tabContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  activeText: {
    color: "#46B9B0", // Optional: Different color for the active tab
  },
  underline: {
    backgroundColor: "#46B9B0",
    marginTop: 5,
  },
});

