import { StyleSheet, Text, View } from "react-native";

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
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({

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
});
