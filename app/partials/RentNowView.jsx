import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
  Text,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Platform } from "react-native";
import Swiper from "../components/Swiper";
import Category from "../components/Category";
import { Icon } from "react-native-elements";

const RentNowView = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <Swiper /> */}
      <View style={styles.buttonContainer}>
        <Button
          title="Learn More"
          // color="red"
          style={{
            borderTopLeftRadius: 55,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 55,
          }}
          accessibilityLabel="Learn more about this button"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // container takes up the full height of the screen
    paddingHorizontal: 25,
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },

  buttonContainer: {
    width: 200,
    alignSelf: "center", // Centers the button horizontally
    backgroundColor: "lightgray", // Optional: background color to visualize button area
    borderRadius: 50,
    // paddingVertical: 10, // Add padding to make button area larger
  },
});

export default RentNowView;
