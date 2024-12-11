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
import BottomTabNavigator from "./components/BottomTabNavigator";



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
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
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
