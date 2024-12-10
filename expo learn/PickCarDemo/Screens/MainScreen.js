import React from "react";
import { Button } from "react-native";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-screens";




export default function MainScreen({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.Searchbar}>
        <View>
          <TouchableOpacity>
            <Ionicons name="location-outline" size={24} color="#46B9B0" />
            <Text style={styles.text}>Where?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.devider}>
          <TouchableOpacity>
            <Ionicons name="calendar-outline" size={24} color="#46B9B0" />
            <Text style={styles.text}>Where?</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  SearchBar:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"space-between",
    padding:15,
    
    
  }
});
