import {
  Pressable, ScrollView, StyleSheet, Text, View,
  Image, TextInput, nav,
  SafeAreaView,
  Dimensions
} from "react-native";
import Colors from "./constants/Colors";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function CreateExhibition() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exhibition!</Text>
    </View>
  );
}

function MyExhibitions() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Exhibitions!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Creacte Exhibition" component={CreateExhibition} />
        <Tab.Screen name="My Exhibitions" component={MyExhibitions} />
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingHorizontal: 12,
    marginTop: 100,
    marginBottom: 30,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
  },
  
  buttonText: {
    color: "white",
  },
});