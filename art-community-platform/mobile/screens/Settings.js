import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import Colors from "./constants/Colors";
import React, { useEffect } from "react";
import { getProfile, updateProfile } from "./services/GeneralServices";

const Settings = (props) => {
  const { userId, token } = props.route.params;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthDate, setBirthdate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [profile, setProfile] = React.useState({
    birthdate: "",
    email: "",
    id: 0,
    location: "",
    name: "",
    profile_img_url: "",
    username: "",
  });
  useEffect(() => {
    getProfile(userId, token).then((response) => {
      console.log(response.data);
      setProfile(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setBirthdate(response.data.birthdate);
      setLocation(response.data.location);
    });
  }, []);

  const handleUpdate = () => {
    updateProfile(
      name,
      birthDate,
      email,
      location,
      profile.profile_img_url,
      token,
      userId
    ).then((response) => {
      if (response.status === 200) {
        Alert.alert("Update Succesful ✅");
      } else if (response.status === 400) {
        Alert.alert("Update Failed ❌");
      }
      console.log(response.status);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: profile.profile_img_url }}
          />
          <Pressable style={styles.button}>
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
          <Text style={{ color: Colors.primaryDark }}>Birthdate</Text>
          <TextInput
            value={birthDate}
            onChangeText={(text) => setBirthdate(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={{ color: Colors.primaryDark }}>Location</Text>
          <TextInput
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={styles.input}
          />
        </View>
        <Pressable
          style={styles.buttonSubmit}
          onPress={() => {
            handleUpdate();
          }}
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
