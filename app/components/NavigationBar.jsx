import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import RentNowView from "../partials/RentNowView";
import RentOutView from "../partials/RentOutView";
import UserProfileView from "../partials/UserProfileView";
import { useCustomFonts } from "../utils/fonts";

const Tab = createBottomTabNavigator();

const renderIcon = (route, focused) => {
  const iconStyle = {
    fontFamily: "WorkSans_900Black",
    fontSize: 18,
    color: focused ? "#f4fbf8" : "#323f4b",
  };

  switch (route.name) {
    case "UserProfile":
      return (
        <FontAwesome6
          name="user"
          size={24}
          color={focused ? "#f4fbf8" : "black"}
        />
      );
    case "RentOut":
      return <Text style={iconStyle}>Rent out</Text>;
    case "RentNow":
      return <Text style={iconStyle}>Rent now</Text>;
    default:
      return null;
  }
};

const NavigationBar = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <View style={styles.navbarContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => renderIcon(route, focused),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#161616",
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle: ({ index }) => [
              styles.tabBarItemStyle,
              index === 2 && styles.tabBarItemStyleLast,
            ],
          })}
        >
          <Tab.Screen name="RentNow" component={RentNowView} />
          <Tab.Screen
            name="UserProfile"
            component={UserProfileView}
            style={styles.tabStyle}
          />
          <Tab.Screen
            name="RentOut"
            component={RentOutView}
            style={styles.tabStyle}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    marginBottom: 30,
    backgroundColor: "transparent",
  },
  tabBarStyle: {
    width: "85%",
    alignSelf: "center",
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    tabBarItemStyle: {
      borderRightWidth: 1,
      borderColor: "black",
    },
    tabBarItemStyleLast: {
      borderRightWidth: 0,
    },
    borderRightWidth: 1,
    borderColor: "black",
    borderTopWidth: 1,
    borderTopColor: "black",
  },
});

export default NavigationBar;
