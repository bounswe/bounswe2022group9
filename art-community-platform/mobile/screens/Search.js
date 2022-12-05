import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import Post from "./components/Post";
import { TabController } from "react-native-ui-lib";
import {
  searchExhibitions,
  searchPosts,
  searchUsers,
} from "./services/GeneralServices";

const Search = (props) => {
  const { userId, token } = props.route.params;
  const [search, setSearch] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [exhibitions, setExhibitions] = React.useState([]);

  useEffect(() => {
    if (search.length > 0) {
      if (index === 0) {
        searchPosts(userId, token, search).then((response) => {
          console.log(response.data);
          setPosts(response.data["art_items:"]);
        });
      } else if (index === 1) {
        searchUsers(userId, token, search).then((response) => {
          console.log(response.data);
          setUsers(response.data["users"]);
        });
      } else if (index === 2) {
        searchExhibitions(userId, token, search).then((response) => {
          console.log(response.data);
          setExhibitions(response.data["exhibitions"]);
        });
      }
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
          <TabController.TabPage index={0} lazy></TabController.TabPage>
          <TabController.TabPage index={1} lazy>
            <Text>Users</Text>
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
