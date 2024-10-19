import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../utils/style";

const RentOutView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.backgroundColor,
      }}
    >
      <Text>RentOut Screen</Text>
    </View>
  );
};

export default RentOutView;
