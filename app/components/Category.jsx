import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const categories = ["search", "home", "settings", "done", "info"];

const Category = () => {
  return (
    <View>
      {/* <FlatList
        style={styles.styledFlatList}
        data={categories}
        keyExtractor={(item) => item}
        horizontal={true}
        onLayout={(event) => {
          const { x, y, width, height } = event.nativeEvent.layout;
          console.log(`FlatList dimensions:`, width, height);
        }} // shows in console width and height of element
        renderItem={({ item }) => (
            <Icon
              containerStyle={styles.iconContainerStyle}
              type="material"
              name={item} // dynamically set the icon name
              color="maroon"
              raised
              onPress={() => console.log(`icon ${item}`)}
            />
         
        )}
      /> */}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  styledFlatList: {
    width: "100%",
    height: 150,
    // flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    color: "maroon",
    borderWidth: 1,
  },
  iconContainerStyle: {
    marginHorizontal: 10, // space between icons
    // width: "100%",
    // height: 50,
  },
});
