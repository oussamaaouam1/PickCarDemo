import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Image,
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
        onPress={() => {
          setActiveTab("login");
          navigation.navigate("LogInScreen");
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
    <Text style={styles.TextLog}>Create your account</Text>
    {/*-----------------------------google button---------------------------------- */}
    <TouchableOpacity style={styles.button}>
      <View style={styles.icon}>
        <Image
          source={require("../assets/icons/google.png")}
          style={styles.iconImg}
        />
      </View>

      <Text style={styles.buttonText}>Continue with Google</Text>
    </TouchableOpacity>
    {/*-----------------------------facebook button---------------------------------- */}
    <TouchableOpacity style={styles.button2}>
      <View style={styles.icon2}>
        <Image
          source={require("../assets/icons/facebook.png")}
          style={styles.iconImg2}
        />
      </View>

      <Text style={styles.buttonText2}>Continue with Facebook</Text>
    </TouchableOpacity>
    {/*-----------------------------Apple button---------------------------------- */}
    <TouchableOpacity style={styles.button2}>
      <View style={styles.icon2}>
        <Image
          source={require("../assets/icons/apple-logo.png")}
          style={styles.iconImg2}
        />
      </View>

      <Text style={styles.buttonText2}>Continue with Apple</Text>
    </TouchableOpacity>
    {/*-----------------------------separator---------------------------------- */}

    <View style={styles.separator}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
    {/*-----------------------------Email signUp---------------------------------- */}
    <TouchableOpacity style={styles.EmailButton}>
      <View style={styles.icon}>
        <Image
          source={require("../assets/icons/email.png")}
          style={styles.iconImg2}
        />
      </View>

      <Text style={styles.buttonText2}>Sign up with email</Text>
    </TouchableOpacity>
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
  TextLog: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  //--------------------google button styles------------------------------
  button: {
    flexDirection: "row", // Horizontal layout for icon + text
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4", // Google blue or any color you prefer
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "85%",
  },
  icon: {
    marginRight: 10, // Space between icon and text
    backgroundColor: "white",
    padding: 5,
    borderRadius: "20%",
  },
  iconImg: {
    width: 24, // Set width of the icon
    height: 24, // Set height of the icon
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  //--------------------facebook and apple  buttons styles------------------------------

  button2: {
    flexDirection: "row", // Horizontal layout for icon + text
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF", // Google blue or any color you prefer
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "85%",
    marginTop: 20,
  },
  icon2: {
    marginRight: 10, // Space between icon and text
    backgroundColor: "white",
    padding: 5,
    borderRadius: "20%",
  },
  iconImg2: {
    width: 24, // Set width of the icon
    height: 24, // Set height of the icon
  },
  buttonText2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  //--------------------separator line styles------------------------------
  separator: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    textAlign: "center",
    // height:'auto'
    margin: "auto",
  },

  line: {
    height: 1, // Thickness of the line
    backgroundColor: "#D3D3D3", // Color of the line (light gray)
    width: "40%", // Makes the line stretch across the screen
  },
  text: {
    textAlign: "center",
    backgroundColor: "#C0E2E2",
    width: 30,
    paddingBottom: 2,
  },
  EmailButton: {
    flexDirection: "row", // Horizontal layout for icon + text
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF", // Google blue or any color you prefer
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "85%",
    marginBottom:150,
  },
});

