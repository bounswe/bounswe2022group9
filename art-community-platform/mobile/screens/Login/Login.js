import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

const Login = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 200,
      }}
    >
      <View style={styles.inputContainer}>
        <Text>Username</Text>
        <TextInput style={styles.input} />
        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.input} />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
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
  },
});
