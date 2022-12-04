import {Pressable, ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView,
} from "react-native";
import Colors from "./constants/Colors";
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function CreateExhibition() {

  const [description, setDescription] = React.useState("");
  const [exhibitionName, setExhibitionName] = React.useState("");
  const [type, setType] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [openAddress, setOpenAddress] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [date, setDate] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={{ color: Colors.primaryDark }}>Exhibition Name</Text>
          <TextInput
            value={exhibitionName}
            onChangeText={(text) => setExhibitionName(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>description</Text>
          <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Type</Text>
          <TextInput
            value={type}
            onChangeText={(text) => setType(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Location</Text>
          <TextInput
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Open Address</Text>
          <TextInput
            value={openAddress}
            onChangeText={(text) => setOpenAddress(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Start Time</Text>
          <TextInput
            value={startTime}
            onChangeText={(text) => setStartTime(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>End Time</Text>
          <TextInput
            value={endTime}
            onChangeText={(text) => setEndTime(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Date</Text>
          <TextInput
            value={date}
            onChangeText={(text) => setDate(text)}
            style={styles.input}
          />
        </View>
        <Pressable
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create Exhibition</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function MyExhibitions() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You Don't Have Any Exhibitions!</Text>
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
    marginBottom: 30,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    alignSelf: "center",

  },
  buttonText: {
    color: "white",
  },
  inputContainer: {
    justifyContent: "flex-end",
    width: "80%",
    padding: 16,
    marginVertical: 24,
    borderRadius: 12,
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    borderWidth: 0.2,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "100%",
    borderColor: Colors.primaryLight,
  },
});