import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

const ForgetPassword = (props) => {
  const { navigation } = props;
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
        <Text>Email</Text>
        <TextInput style={styles.input} />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Send New Password</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgetPassword;

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
    marginBottom: 240,
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
