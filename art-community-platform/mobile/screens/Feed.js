import { CurrentRenderContext } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Post from "./components/Post";

const Feed = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Post
          username="artLand"
          uri={require("../assets/halloween.png")}
          date="30m"
        />

        <Post
          username="love.art"
          uri={require("../assets/concert.jpg")}
          date="1h"
        />

        <Post
          username="photo_community"
          uri={require("../assets/old-man.jpg")}
          date="1h"
        />

        <Post
          username="112233paint"
          uri={require("../assets/halloween-gaf.jpg")}
          date="2h"
        />

        <Post
          username="nature_photo"
          uri={require("../assets/witch.jpg")}
          date="3h"
        />

        <Post
          username="safariPhotographer"
          uri={require("../assets/timothy-barlin.jpg")}
          date="5h"
        />
      </ScrollView>
    </View>
  );
};

export default Feed;
const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 50,
  },
  square: {
    padding: 12,
    paddingHorizontal: 12,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "white",
  },
  photo: {
    alignSelf: "center",
    width: 300,
    height: 300,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
});
