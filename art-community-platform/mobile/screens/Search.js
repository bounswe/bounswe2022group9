import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import Post from "./components/Post";

const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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
      {search === "picasso" && (
        <ScrollView style={{ flex: 1 }}>
          <Post
            username="Picasso"
            verified
            uri={require("./assets/picasso1.jpeg")}
            date="12d"
          />
          <Post
            username="Picasso"
            verified
            uri={require("./assets/picasso2.jpeg")}
            date="14d"
          />
          <Post
            username="Picasso"
            verified
            uri={require("./assets/picasso3.jpeg")}
            date="23d"
          />
          <Post
            username="Picasso"
            verified
            uri={require("./assets/picasso4.jpeg")}
            date="34d"
          />
          <Post
            username="Picasso"
            verified
            uri={require("./assets/picasso5.jpeg")}
            date="57d"
          />
        </ScrollView>
      )}
      {search === "renaissance" && (
        <ScrollView style={{ flex: 1 }}>
          <Post
            username="art.lover"
            desc="I would like to share this magnificient artwork with you all, again and again!"
            uri={require("./assets/ren1.jpeg")}
            date="1d"
          />
          <Post
            username="oldiesbutgoldies"
            desc="nothing compares to good old art"
            uri={require("./assets/ren2.jpeg")}
            date="5d"
          />
          <Post
            username="art.lover"
            desc="I am completely obsessed with Renaissance Painting!"
            uri={require("./assets/ren3.jpeg")}
            date="17d"
          />
          <Post
            username="mypassionisart"
            uri={require("./assets/ren4.jpeg")}
            date="23d"
          />
          <Post
            username="Michelangelo"
            verified
            uri={require("./assets/ren5.jpeg")}
            date="38d"
          />
          <Post
            username="philosopher_artist"
            desc=""
            uri={require("./assets/ren6.jpeg")}
            date="45d"
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Search;
