import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import Post from "./components/Post";
import { TabController } from "react-native-ui-lib";
import {
  getAllUsers,
  searchExhibitions,
  searchPosts,
  searchUsers,
} from "./services/GeneralServices";
import { getAllPosts } from "./services/ArtItemService";

const Search = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [search, setSearch] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [exhibitions, setExhibitions] = React.useState([]);

  useEffect(() => {
    if (search.length > 0) {
      if (index === 0) {
        searchPosts(userId, token, search).then((response) => {
          setPosts(response.data["art_items"]);
        });
      } else if (index === 1) {
        searchUsers(userId, token, search).then((response) => {
          setUsers(response.data["users"]);
        });
      } else if (index === 2) {
        searchExhibitions(userId, token, search).then((response) => {
          setExhibitions(response.data["exhibitions"]);
        });
      }
    } else if (search.length === 0 && index === 1) {
      getAllUsers(userId, token).then((response) => {
        setUsers(response.data.users);
      });
    } else if (search.length === 0 && index === 0) {
      getAllPosts(token).then((response) => {
        setPosts(response.data["art_items"]);
      });
    }
  }, [index, search]);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderColor: Colors.primaryLight,
          borderRadius: 8,
          borderWidth: 1,
        }}
      >
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={{ flex: 1, fontSize: 16 }}
        ></TextInput>
        <Ionicons name="search" size={24} color={Colors.primary} />
      </View>
      <TabController
        items={[
          { label: "Posts" },
          { label: "Users" },
          { label: "Exhibitions" },
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
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("User", {
                      userId: item.id,
                      token: token,
                    });
                  }}
                >
                  <View style={styles.user}>
                    <Image
                      style={styles.photo}
                      source={{ uri: item["profile_img_url"] }}
                    />
                    <Text style={styles.username}>{item.name}</Text>
                    <Text style={styles.location}>
                      {"\n"}
                      {item.location}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </TabController.TabPage>
          <TabController.TabPage index={2} lazy>
            <Text>Exhibitions</Text>
          </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: "row",
    backgroundColor: Colors.primaryLight,
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  username: {
    marginLeft: 50,
    fontSize: 20,
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginLeft: 10,
  },
  location: {
    position: "absolute",
    right: 12,
    fontSize: 14,
  },
});
