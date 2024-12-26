import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BottomTabNavigator from "./components/BottomTabNavigator";
import LogInScreen from "./Screens/LogInScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import EmailSignUp from "./Screens/EmailSignUp";
import HomeScreen from "./Screens/HomeScreen";
import LocationSearch from "./Screens/LocationSearch";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const [loadFonts] = useFonts({
    "Merase-font": require("./assets/fonts/Merase.ttf"),
    btnfont: require("./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
    Mina: require("./assets/fonts/Mina-Regular.ttf"),
  });

  // Simplified auth check
  const checkUserAuth = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      setIsAuthenticated(!!userData);
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Add this function to force auth state check
  const checkAuthAndUpdate = async () => {
    const userData = await AsyncStorage.getItem("userData");
    setIsAuthenticated(!!userData);
  };

  // Check auth on mount and when component updates
  React.useEffect(() => {
    checkUserAuth();
  }, []);

  // Add listener for auth state changes
  React.useEffect(() => {
    const interval = setInterval(checkAuthAndUpdate, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  if (!loadFonts || isLoading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
          </>
        ) : (
          // Main App Stack
          <>
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            <Stack.Screen name="LocationSearch" component={LocationSearch} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
          </>
        )}
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
