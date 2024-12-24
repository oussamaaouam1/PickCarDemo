import React from "react";
import { Button } from "react-native";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LocationIcon from "../assets/SVGs/undraw_my_current_location_re_whmt (1).svg"





export default function MainScreen({navigation}) {


  return (
    <View style={styles.container}>
      <View style={styles.SearchBar}>
        <View>
          <TouchableOpacity style={styles.searchbox}
          onPress={()=>{navigation.navigate("LocationSearch")}}
          >
            <Ionicons name="location-outline" size={20} color="#46B9B0" />
            <Text style={styles.text}>Where?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <TouchableOpacity style={styles.searchbox}>
            <Ionicons name="calendar-outline" size={20} color="#46B9B0" />
            <Text style={styles.text}>When?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <LocationIcon width={250} height={250} style={styles.LocationIcon} />
      </View>
      <Text style={styles.locationtxt}>
        Try Unable your location services to access you current location or type
        an address
      </Text>
    
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
  SearchBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 19,
    paddingHorizontal: 8,
    width: "90%",
    borderColor: "grey",
    borderRadius: 12,
    //-------------android shadow------------------
    elevation: 10,
    // --------------iOS Shadow--------------------
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Downward shadow
    shadowOpacity: 0.1, // Light opacity
    shadowRadius: 8, // Soft shadow edges
    position:"absolute",
    top:50,
    
  },
  searchbox: {
    display: "flex",
    flexDirection: "row",
  },
  divider: {
    borderLeftWidth: 1,
    borderLeftColor: "grey",
    paddingLeft: 10,
    paddingRight:12,
  },
  LocationIcon:{
  marginBottom:20,

  },
  locationtxt:{
    fontFamily:"Mina",
    width:"80%",
    textAlign:"center",
  }
});
