import React from "react";
import { View } from "react-native";
import RentNowView from "./app/partials/RentNowView";
import NavigationBar from "./app/components/NavigationBar";
import { globalStyles } from "./app/utils/style";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalStyles.backgroundColor,
      }}
    >
      {/* <RentNowView /> */}
      <NavigationBar />
    </View>
  );
}
