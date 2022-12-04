import {
  Pressable, ScrollView, StyleSheet, Text, View,
  Image, 
  SafeAreaView,
} from "react-native";
import Colors from "./constants/Colors";
import React from "react";

const Settings = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://bootdey.com/img/Content/avatar/avatar3.png" }}
          />
          <Pressable
            style={styles.button}
          >
            <Text style={styles.buttonText}>Change Profile Photo</Text>
          </Pressable>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingHorizontal: 12,
    marginTop: 80,
    marginLeft: 180,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "stretch",
    position: "absolute",
    marginTop: 35,
    marginLeft: 35,
  },
  header: {
    backgroundColor: "#173679",
    height: 200,
  },
});