import {
  Pressable, ScrollView, StyleSheet, Text, View,
  Image, TextInput,
  SafeAreaView,
} from "react-native";
import Colors from "./constants/Colors";
import React from "react";

const Settings = (props) => {
  const { navigation } = props;
  
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [birthDate, setBirthdate] = React.useState("");
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

        <View style={styles.inputContainer}>
          <Text style={{ color: Colors.primaryDark }}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Username</Text>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Birthdate</Text>
          <TextInput
            value={birthDate}
            onChangeText={(text) => setBirthdate(text)}
            style={styles.input}
          />
        </View>
        <Pressable
          style={styles.buttonSubmit}
        >
          <Text style={styles.buttonText}>Change Profile Info</Text>
        </Pressable>
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
  buttonSubmit: {
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