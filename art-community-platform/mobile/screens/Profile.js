import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { getProfile } from "./services/GeneralServices";

const dimensions = Dimensions.get("window");
const Profile = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [profile, setProfile] = React.useState({
    "art_items:": [],
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
            Followers: 0
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
            Followees: 0
          </Text>
          <Text style={styles.follower}> Posts: 5</Text>
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
            {profile["art_items:"]?.map((item) => {
              return (
                <Image
                  style={styles.photo}
                  source={{ uri: item.image_url }}
                ></Image>
              );
            })}
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
    width: dimensions.width * 0.28,
    height: dimensions.width * 0.28,
    marginTop: 5,
    marginRight: 5,
  },
});
