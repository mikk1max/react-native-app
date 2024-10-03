import React from "react";
import { StyleSheet, View, StatusBar, Dimensions, Image, FlatList, Text } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Platform } from "react-native";
import Swiper from "../components/Swiper";
import Category from "../components/Category";
import { Icon } from "react-native-elements";

const categories = ['search', 'home', 'settings', 'done', 'info']

const RentNowView = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
    {/* <View style={{flex: 1}}> */}
      <SearchBar onSearch={handleSearch} />
      <Swiper />
      <FlatList
        style={styles.styledFlatList}
        // style={{ flex: 1 }}
        data={categories}
        renderItem={Category}
        keyExtractor={(item) => item}
        horizontal={true}
        onLayout={(event) => {
          const { x, y, width, height } = event.nativeEvent.layout;
          console.log(`FlatList dimensions:`, width, height);
        }} // shows in console width and height of element
      />
      <Category />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // container takes up the full height of the screen
    paddingHorizontal: 25,
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    // marginTop: 44,
  },

  baner: {
    width: "100%",
    height: 125,
    marginTop: 300,
    borderRadius: 15,
  },

  styledFlatList: {
    width: "100%",
    height: 150,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: "maroon",
    marginTop: 50,
    borderWidth: 1,
  },
});

export default RentNowView;
