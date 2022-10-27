import { StyleSheet, Text, View, TextInput, Pressable} from "react-native";

const Signup = () => {
  return (
    <View
    style={{
      backgroundColor: "white", 
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 200,
    }}
    >
      <Text style={{color: "#173679", fontWeight: "bold", marginTop: 50}}>Signup</Text>
      <View style={styles.inputContainer}>
        <Text style={{color: "#173679" , fontWeight: "bold"}}>Username</Text>
        <TextInput secureTextEntry style={styles.input} />
        <Text style={{color: "#173679" , fontWeight: "bold"}}>Password</Text>
        <TextInput secureTextEntry style={styles.input} />
        <Text style={{color: "#173679" , fontWeight: "bold"}}>Email</Text>
        <TextInput secureTextEntry style={styles.input} />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
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

  inputContainer: {
    
    justifyContent:'flex-end',
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
