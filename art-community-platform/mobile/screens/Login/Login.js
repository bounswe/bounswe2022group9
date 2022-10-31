import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import { login } from "../services/LoginServices";

const Login = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    login(username, password)
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Home");
        } else if (response.status === 400) {
          Alert.alert("Login Failed ❌", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.inputContainer}>
        <Text style={{ color: Colors.primaryDark }}>Username</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <Text style={{ color: Colors.primaryDark }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            handleLogin();
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ForgetPassword")}
        >
          <Text style={styles.buttonText}>Forget Password</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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
  inputContainer: {
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
