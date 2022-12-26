import { React } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "./constants/Colors";
import { useState, useEffect } from "react";
import { getNotifications } from "./services/GeneralServices";
import { Ionicons } from "@expo/vector-icons";

const Notifications = (props) => {
  const { navigation } = props;
  const { userId, token } = props.route.params;
  const [notifications, setNotifications] = useState([
    { text: "Bugra Elmas started following you!", date: "2022-12-17" },
    { text: "Furkan Ozdemir liked your post.", date: "2022-12-14" },
    { text: "Berkant Koc liked your post.", date: "2022-12-11" },
    { text: "Omer Sisman commented on your post", date: "2022-12-10" },
    { text: "Omer Sisman liked your post.", date: "2022-12-10" },
    { text: "Berkant Koc started following you!", date: "2022-12-05" },
    { text: "Omer Sisman liked your post.", date: "2022-12-04" },
    { text: "Furkan Ozdemir commented on your post", date: "2022-12-10" },
    { text: "Furkan Ozdemir liked your post.", date: "2022-12-02" },
    { text: "Omer Sisman started following you!", date: "2022-12-01" },
    { text: "Furkan Ozdemir started following you!", date: "2022-12-01" },
  ]);
  useEffect(() => {
    // getNotifications(userId, token).then((response) => {
    //   if (response.data.notifications) {
    //     setNotifications(response.data.notifications);
    //   }
    //   console.log(response);
    // });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              margin: 8,
              padding: 4,
              borderColor: Colors.primary,
              backgroundColor: "white",
              flexDirection: "row",
              width: "92%",
              alignSelf: "center",
            }}
          >
            <View style={{ marginRight: 4 }}>
              {item.text.includes("liked your post.") ? (
                <Ionicons name="heart" size={24} color="red" />
              ) : item.text.includes("commented on your post") ? (
                <Ionicons name="chatbox-ellipses" size={24} color="lightblue" />
              ) : (
                <Ionicons name="person-add" size={24} color="green" />
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16 }}>{item.text}</Text>
              <Text style={{ textAlign: "right", opacity: 0.6 }}>
                {item.date}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Notifications;
