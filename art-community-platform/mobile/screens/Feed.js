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
import { getFeed , getRecommendations } from "./services/GeneralServices";
import { TabController } from "react-native-ui-lib";

const Feed = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    getFeed(userId, token).then((response) => {
      setPosts(response.data["art_items"]);
    });
  }, []);
  const [recommendations, setRecommendations] = React.useState([]);
  useEffect(() => {
    getRecommendations(userId, token).then((response) => {
      setRecommendations(response.data["art_items"]);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TabController
        items={[
          { label: "Feed" },
          { label: "Recommendations" },
        ]}
        asCarousel
        initialIndex={0}
        onChangeIndex={(index) => setIndex(index)}
      >
        <TabController.TabBar
          height={40}
          indicatorInsets={28}
          indicatorStyle={{ backgroundColor: Colors.primary, height: 2 }}
          selectedLabelColor={Colors.primary}
          backgroundColor="#fdfdfd"
        />
        <TabController.PageCarousel>
        <TabController.TabPage index={0} lazy>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ArtItem", {
                    token: token,
                    art_item_id: item.id,
                    userId: userId,
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
        </TabController.TabPage>
        <TabController.TabPage index={1} lazy>
            <Text>Recommendations</Text>
        </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
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
