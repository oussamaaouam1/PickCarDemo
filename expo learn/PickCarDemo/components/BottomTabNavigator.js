import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "../Screens/MainScreen";
import RentalsScreen from "../Screens/RentalsScreen";
import Account from "../Screens/LogAndSign";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Search") {
            iconName = "search-outline";
          } else if (route.name === "Account") {
            iconName = "person-circle-outline";
          } else if (route.name === "Rentals") {
            iconName = "car-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#46B9B0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Search"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Rentals"
        component={RentalsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
