import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Post from "./components/Post";
import { getFeed } from "./services/GeneralServices";

const Feed = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    getFeed(userId, token).then((response) => {
      console.log(response.data);
      setPosts(response.data["art_items"]);
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ArtItem", {
                token: token,
                art_item_id: item.id,
              })
            }
          >
            <Post
              username={item["owner_name"]}
              uri={item["img_url"]}
              date={item["date"]}
              desc={item["description"]}
            ></Post>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
