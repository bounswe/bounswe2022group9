import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import Search from "./Search";
import Settings from "./Settings";
import { Ionicons } from "@expo/vector-icons";
import Exhibitions from "./Exhibitons";
import Profile from "./Profile";
import Colors from "./constants/Colors";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = "home-outline";
          } else if (route.name === "Search") {
            iconName = "search-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          } else if (route.name === "Exhibitions") {
            iconName = "aperture-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Exhibitions" component={Exhibitions} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
