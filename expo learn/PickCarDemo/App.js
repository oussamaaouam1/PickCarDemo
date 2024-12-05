import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import MainScreen from "./Screens/MainScreen";
import { useFonts } from "expo-font";
import LogInScreen from "./Screens/LogInScreen";
import SignUpScreen from "./Screens/SignUpScreen";



const Stack = createNativeStackNavigator();




export default function App() {

  const [loadFonts] = useFonts({
    "Merase-font" : require("./assets/fonts/Merase.ttf"),
    "btnfont" : require("./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf")

  });
  if (!loadFonts){ //show up waiting animation while loading the font
  return<ActivityIndicator size="large"/>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
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
