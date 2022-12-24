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
import {
  followUser,
  getFavourites,
  getProfile,
} from "./services/GeneralServices";
import { TabController } from "react-native-ui-lib";

const dimensions = Dimensions.get("window");
const User = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [profile, setProfile] = React.useState({
    "art_items:": [],
    art_item_count: 0,
    follower_count: 0,
    following_count: 0,
    birthdate: "",
    email: "",
    id: 0,
    is_following: false,
    location: "",
    name: "",
    profile_img_url: "",
    username: "",
  });
  const [index, setIndex] = React.useState(0);
  const [posts, setPosts] = React.useState([]);
  const follow = () => {
    followUser(token, userId).then((response) => {
      if (response.status == 200) {
        getProfile(userId, token).then((response) => {
          setProfile(response.data);
        });
      }
    });
  };
  const unfollow = () => {
    unfollowUser(token, userId).then((response) => {
      if (response.status == 200) {
        getProfile(userId, token).then((response) => {
          setProfile(response.data);
        });
      }
    });
  };
  useEffect(() => {
    getProfile(userId, token).then((response) => {
      setProfile(response.data);
    });
    if (index === 1) {
      getFavourites(userId, token).then((response) => {
        setPosts(response.data.favourites);
      });
    }
  }, [userId, index]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text
            style={[styles.follower, { marginTop: 50 }]}
            onPress={() => {
              navigation.navigate("UserList", {
                userId: userId,
                token: token,
                type: "followers",
              });
            }}
          >
            {" "}
            Follower: {profile.follower_count}
          </Text>
          <Text
            style={styles.follower}
            onPress={() => {
              navigation.navigate("UserList", {
                userId: userId,
                token: token,
                type: "following",
              });
            }}
          >
            {" "}
            Following: {profile.following_count}
          </Text>
          <Text style={styles.follower}>
            {" "}
            Posts: {profile["art_item_count"]}
          </Text>
        </View>
        <Image
          style={styles.avatar}
          source={{ uri: profile["profile_img_url"] }}
        />
        <View style={{ marginTop: 20 }}>
          <View style={styles.bodyContent}></View>
          <Text style={styles.namee}>{profile.name}</Text>
          <Text style={styles.description}>{profile.username}</Text>
          <TouchableOpacity
            onPress={profile.is_following ? unfollow : follow}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: 8,
                paddingVertical: 4,
                paddingHorizontal: 12,
                margin: 8,
              }}
            >
              {profile.is_following ? (
                <Text>Unfollow</Text>
              ) : (
                <Text>Follow</Text>
              )}
            </View>
          </TouchableOpacity>
          <TabController
            items={[{ label: "Posts" }, { label: "Favourites" }]}
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
                <View style={[styles.photosCard, { paddingBottom: 50 }]}>
                  <FlatList
                    data={profile["art_items:"]}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          margin: 1,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("ArtItem", {
                              token: token,
                              art_item_id: item.id,
                            })
                          }
                        >
                          <Image
                            style={styles.photo}
                            source={{ uri: item["img_url"] }}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </TabController.TabPage>
              <TabController.TabPage index={1} lazy>
                <FlatList
                  data={posts}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        margin: 1,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("ArtItem", {
                            token: token,
                            art_item_id: item.id,
                          })
                        }
                      >
                        <Image
                          style={styles.photo}
                          source={{ uri: item["img_url"] }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  //Setting the number of column
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                />
              </TabController.TabPage>
            </TabController.PageCarousel>
          </TabController>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    backgroundColor: "#173679",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  bodyContent: {
    flex: 1,
    padding: 30,
  },
  follower: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 16,
  },
  namee: {
    alignSelf: "center",
    color: "#173679",
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    padding: 10,
    marginLeft: 20,
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: dimensions.width * 0.3,
    height: dimensions.width * 0.3,
    marginTop: 5,
    marginRight: 5,
  },
});
