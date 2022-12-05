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
import { getProfile } from "./services/GeneralServices";

const dimensions = Dimensions.get("window");
const Profile = (props) => {
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
  useEffect(() => {
    getProfile(userId, token).then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  }, []);

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

          <View style={[styles.photosCard, { paddingBottom: 50 }]}>
            <Text style={styles.namee}>POSTS</Text>
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
            {/* {profile["art_items:"]?.map((item) => {
              return (
                <Image
                  style={styles.photo}
                  source={{ uri: item["img_url"] }}
                ></Image>
              );
            })} */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
