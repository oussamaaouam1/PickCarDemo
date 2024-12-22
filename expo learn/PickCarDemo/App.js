import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";
import LogInScreen from "./Screens/LogInScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import EmailSignUp from "./Screens/EmailSignUp";
import HomeScreen from "./Screens/HomeScreen";
import MainScreen from "./Screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loadFonts] = useFonts({
    "Merase-font": require("./assets/fonts/Merase.ttf"),
    btnfont: require("./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
    Mina: require("./assets/fonts/Mina-Regular.ttf"),
  });

  if (!loadFonts) {
    // Show loading animation while fonts are being loaded
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{ headerShown: false }}
      >
        {/* Main Bottom Tabs */}
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />

        {/* Additional Stack Screens */}
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
