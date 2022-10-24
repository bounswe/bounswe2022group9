import { Pressable, StyleSheet, Text, View } from "react-native";

const Settings = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: "tomato",
    borderWidth: 1,
  },
});
