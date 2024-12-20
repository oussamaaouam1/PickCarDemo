import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import MainScreen from "./Screens/MainScreen";
import Account from "./Screens/LogAndSign";
import { useFonts } from "expo-font";
import LogInScreen from "./Screens/LogInScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import EmailSignUp from "./Screens/EmailSignUp";
import BottomTabNavigator from "./components/BottomTabNavigator";



const Stack = createNativeStackNavigator();




export default function App() {



  const [loadFonts] = useFonts({
    "Merase-font" : require("./assets/fonts/Merase.ttf"),
    "btnfont" : require("./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
    "Mina" : require("./assets/fonts/Mina-Regular.ttf")


  });
  if (!loadFonts){ //show up waiting animation while loading the font
  return<ActivityIndicator size="large"/>;
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
      
    </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
