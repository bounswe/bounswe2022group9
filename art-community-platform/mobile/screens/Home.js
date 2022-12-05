import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./Feed";
import Search from "./Search";
import Settings from "./Settings";
import { Ionicons } from "@expo/vector-icons";
import Exhibitions from "./Exhibitons";
import Profile from "./Profile";
import Colors from "./constants/Colors";
import UserList from "./UserList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = (props) => {
  const { userId, token } = props.route.params;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userId: userId, token: token }}
      />
      <Stack.Screen
        name="UserList"
        component={UserList}
        initialParams={{ userId: userId, token: token }}
      />
    </Stack.Navigator>
  );
};

const Home = (props) => {
  const { userId, token } = props.route.params;
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
      <Tab.Screen
        name="Feed"
        component={Feed}
        initialParams={{ userId: userId, token: token }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={{ userId: userId, token: token }}
      />
      <Tab.Screen name="Exhibitions" component={Exhibitions} />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        initialParams={{ userId: userId, token: token }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
