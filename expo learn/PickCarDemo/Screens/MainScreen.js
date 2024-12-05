import React from "react";
import { Button } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";




export default function MainScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text>test navigation to MainScreen </Text>

      <Button
        title="Go to HomeScreen"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        HomeScreen
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
  },
});
