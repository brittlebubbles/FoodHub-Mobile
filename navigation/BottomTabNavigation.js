import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Icon } from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TabBar } from "react-native-animated-nav-tab-bar";
//Import Screens
import HomeScreen from "../screens/HomeScreen";
import Search from "../screens/Search";
import About from "../screens/Account";
import Likes from "../screens/Likes";

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#2F7C6E",
        inactiveTintColor: "#222222",
      }}
      tabBar={(props) => (
        <TabBar
          activeColors={"#2F7C6E"}
          activeTabBackgrounds={"#DFF7F6"}
          {...props}
        />
      )}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="search"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={Likes}
        options={{
          tabBarLabel: "Likes",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="heart"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Likes}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="chef-hat"
              size={size ? size : 24}
              color={focused ? color : "white"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
