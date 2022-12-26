import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getArtItem, like, comment } from "./services/ArtItemService";
import { getLikedUsers } from "./services/GeneralServices";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState, useEffect } from "react";

const dimensions = Dimensions.get("window");

const ArtItemDisplay = (props) => {
  const { navigation } = props;
  const { token, userId, art_item_id } = props.route.params;
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [newAdded, setNewAdded] = useState(false);
  const [art_item, setArtItem] = useState({
    id: 0,
    owner_name: "",
    img_url: "",
    description: "",
    date: "",
    comments: [],
    "tags:": [],
    comment_count: 0,
    favourite_count: 0,
    owner_id: 0,
  });

  useEffect(() => {
    getArtItem(token, art_item_id).then((response) => {
      setArtItem(response.data);
      setComments(response.data.comments);
    });
  }, [art_item_id]);
  useEffect(() => {
    if (newAdded) {
      getArtItem(token, art_item_id).then((response) => {
        setArtItem(response.data);
        setComments(response.data.comments);
      });
      setNewAdded(false);
    }
  }, [newAdded]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.creator}>Created by {art_item.owner_name}</Text>
        <Text style={styles.timestamp}> {art_item.date}</Text>
        <View style={styles.caption}>
          <Text>{art_item.description}</Text>
        </View>
        <Image style={styles.photo} source={{ uri: art_item.img_url }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Pressable
            onPress={() => {
              setLiked(true);
              like(token, art_item_id);
            }}
          >
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={32}
              color={liked ? "red" : "black"}
              style={{ marginLeft: dimensions.width * 0.15, marginTop: 10 }}
            />
          </Pressable>
          <Text
            onPress={() =>
              navigation.navigate("UserList", {
                art_item_id,
                token: token,
              })
            }
            style={{ alignSelf: "center", marginTop: 20 }}
          >
            {" "}
            {liked
              ? (parseInt(art_item.favourite_count) + 1).toString()
              : art_item.favourite_count}{" "}
            Likes{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Annotations", { art_item_id });
            }}
            style={{
              marginTop: 20,
              position: "absolute",
              right: dimensions.width * 0.15,
              borderWidth: 1,
              padding: 8,
              borderRadius: 12,
            }}
          >
            <Text>annotations</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 40,
              marginLeft: dimensions.width * 0.15,
              color: "#173679",
              fontWeight: "bold",
            }}
          >
            {" "}
            Comments{" "}
          </Text>
          <MaterialCommunityIcons
            name={"chat-plus"}
            size={32}
            color={"#173679"}
            style={{ marginLeft: 10, marginTop: 30 }}
          />
        </View>
        {comments?.map((comment) => {
          return (
            <View key={comment.id}>
              <View style={styles.comment}>
                <Text style={{ fontWeight: "bold", color: "#173679" }}>
                  {comment.owner_name}
                </Text>
                <Text>{comment.text}</Text>
              </View>
            </View>
          );
        })}
        <View key={art_item.comment_count + 1}>
          <View style={styles.comment}>
            <Text style={{ fontWeight: "bold", color: "#173679" }}>
              New Comment:
            </Text>
            <TextInput
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
              style={styles.input}
            />
            <Pressable
              style={styles.button}
              onPress={() => {
                comment(token, art_item.id, newComment).then((response) => {
                  setNewAdded(true);
                  setNewComment("");
                });
              }}
            >
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tags}>
          <Text
            style={{
              color: "#173679",
              fontWeight: "bold",
            }}
          >
            Tags:
          </Text>

          {art_item["tags:"].map((tag) => {
            return (
              <Text style={styles.tagItem}>
                {"\t"}
                {tag}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtItemDisplay;

const styles = StyleSheet.create({
  creator: {
    marginTop: 40,
    alignSelf: "center",
    color: "#173679",
    fontWeight: "bold",
  },
  photo: {
    marginTop: 30,
    width: dimensions.width * 0.7,
    height: dimensions.width * 0.7,
    alignSelf: "center",
  },
  commentcontainer: {
    marginTop: 10,
    width: dimensions.width * 0.7,
    alignSelf: "center",
  },
  comment: {
    borderRadius: 8,
    padding: 6,
    marginHorizontal: 24,
    marginTop: 10,
    backgroundColor: "#c8f4ff",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  tags: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 12,
    marginBottom: 20,
  },
  caption: {
    width: dimensions.width * 0.7,
    borderWidth: 1,
    borderColor: "#c8f4ff",
    alignSelf: "center",
    marginTop: 20,
  },
  timestamp: {
    marginLeft: dimensions.width * 0.6,
    color: "#173679",
    fontSize: 12,
  },
  button: {
    borderWidth: 1,
    padding: 6,
    paddingHorizontal: 36,
    marginTop: 4,
    backgroundColor: Colors.primaryDark,
    borderRadius: 12,
    marginBottom: 6,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
  },
  tagItem: {
    color: "#173679",
    fontSize: 15,
    backgroundColor: Colors.secondaryLight,
  },
  input: {
    minHeight: 36,
    borderColor: Colors.primaryDark,
  },
});
