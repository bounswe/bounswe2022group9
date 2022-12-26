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
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { getFavourites } from "./services/GeneralServices";
import { TabController } from "react-native-ui-lib";
import { getProfile } from "./services/GeneralServices";
import * as ImagePicker from "expo-image-picker";
import { uploadArtItem } from "./services/ArtItemService";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";

const dimensions = Dimensions.get("window");
const Profile = (props) => {
  const { userId, token } = props.route.params;
  const { navigation } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [newAdded, setNewAdded] = React.useState(false);
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
  const [newArtItem, setNewArtItem] = React.useState({
    owner_id: userId,
    img_base64: "",
    img_url: "",
    description: "",
    tags: [],
    date: "2022-12-27",
  });
  useEffect(() => {
    getProfile(userId, token).then((response) => {
      setProfile(response.data);
    });
  }, []);
  useEffect(() => {
    if (newAdded) {
      getProfile(userId, token).then((response) => {
        setProfile(response.data);
      });
      setNewAdded(false);
    }
  }, [newAdded]);
  useEffect(() => {
    if (index === 1) {
      getFavourites(userId, token).then((response) => {
        setPosts(response.data.favourites);
      });
    }
  }, [index]);

  const imageGalleryLaunch = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
    if (!result.cancelled) {
      let fileExtension = result.uri.substring(result.uri.lastIndexOf(".") + 1);
      setNewArtItem({
        ...newArtItem,
        img_base64: `data:image/${fileExtension};base64,${result.base64}`,
        img_url: result.uri,
      });
    }
  };

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
                              userId: userId,
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
                            userId: userId,
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Art Item</Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.6,
                justifyContent: "space-between",
                marginVertical: 12,
              }}
            >
              <Text>Image</Text>
              {newArtItem.img_url.length > 0 ? (
                <Image
                  source={{ uri: newArtItem.img_url }}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
              ) : (
                <Pressable
                  onPress={imageGalleryLaunch}
                  style={{
                    alignItems: "center",
                    padding: 4,
                    marginBottom: 8,
                    borderWidth: 1,
                    borderRadius: 4,
                  }}
                >
                  <Text>Add New Image</Text>
                </Pressable>
              )}
              <Text>Description</Text>
              <TextInput
                style={{
                  borderRadius: 4,
                  borderWidth: 1,
                  padding: 6,
                  marginBottom: 8,
                }}
                value={newArtItem.description}
                onChangeText={(text) => {
                  setNewArtItem({ ...newArtItem, description: text });
                }}
              ></TextInput>
              <Text>Tags</Text>
              <TextInput
                value={newArtItem.tags.join(" ")}
                onChangeText={(text) => {
                  setNewArtItem({ ...newArtItem, tags: text.split(" ") });
                }}
                style={{
                  borderRadius: 4,
                  borderWidth: 1,
                  padding: 6,
                  marginBottom: 8,
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: Dimensions.get("window").width * 0.6,
                justifyContent: "space-between",
              }}
            >
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  uploadArtItem(
                    token,
                    newArtItem.owner_id,
                    newArtItem.img_base64,
                    newArtItem.description,
                    newArtItem.tags,
                    newArtItem.date
                  )
                    .then((response) => {
                      setNewAdded(true);
                      setShowModal(!showModal);
                      setNewArtItem({
                        owner_id: userId,
                        img_url: "",
                        img_base64: "",
                        description: "",
                        tags: [],
                        date: "2022-12-27",
                      });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => {
                  setShowModal(!showModal);
                  setNewArtItem({
                    owner_id: userId,
                    img_url: "",
                    img_base64: "",
                    description: "",
                    tags: [],
                    date: "2022-12-27",
                  });
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowModal(!showModal)}
        style={{
          position: "absolute",
          right: 12,
          bottom: 12,
          width: 48,
          height: 48,
          borderRadius: 26,
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="add-outline"
          size={46}
          color={"white"}
          style={{ marginLeft: 3 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
