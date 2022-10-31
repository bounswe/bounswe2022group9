import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width * 0.85;
const Post = (props) => {
  const { username, verified, uri, date, desc } = props;

  console.log(uri);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, marginRight: 8, color: Colors.primary }}>
            {username}
          </Text>
          {verified && (
            <Octicons name="verified" size={18} color={Colors.primary} />
          )}
        </View>
        <Text>{date}</Text>
      </View>
      {desc && (
        <Text style={{ color: "#636161", marginHorizontal: 8 }}>{desc}</Text>
      )}
      <Image source={uri} style={styles.image} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 12,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: "center",
    paddingBottom: 8,
    borderBottomColor: Colors.primaryLight,
    borderBottomWidth: 1,
  },
  image: {
    marginTop: 8,
    width: imageWidth,
    height: imageWidth * 0.7,
    borderRadius: 8,
  },
});
