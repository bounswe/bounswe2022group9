import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { signup } from "../services/LoginServices";
import Colors from "../constants/Colors";

const Signup = (props) => {
  const { navigation } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [birthDate, setBirthdate] = React.useState("");

  const handleSignup = () => {
    signup(name, birthDate, username, email, password)
      .then((response) => {
        if (response.status === 201) {
          Alert.alert("Signup Succesful ✅", "Click OK to go to Login Screen", [
            { text: "OK", onPress: () => navigation.navigate("Login") },
          ]);
        } else if (response.status === 400) {
          Alert.alert("Signup Failed ❌", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        <Text style={{ color: Colors.primaryDark }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.termsContainer}>
          <Text style={styles.term_service}>By signing up, you agree to </Text>

          <Text
            testID="TermsandConditions"
            onPress={() => navigation.navigate("TermsAndConditions")}
            style={styles.terms_text}
          >
            Terms of Service and Privacy Policy.
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleSignup();
          }}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
  },
  terms_text: {
    flexDirection: "row",
    color: Colors.primaryDark,
  },

  inputContainer: {
    justifyContent: "flex-end",
    width: "80%",
    padding: 16,
    marginVertical: 24,
    borderRadius: 12,
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
