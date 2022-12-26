import { getAnnotations, postAnnotation } from "./services/ArtItemService";
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
  FlatList,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getArtItem, like, comment } from "./services/ArtItemService";
import { getLikedUsers } from "./services/GeneralServices";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState, useEffect } from "react";

const Annotations = (props) => {
  const { navigation } = props;
  const { token, userId, art_item_id } = props.route.params;
  const [annotations, setAnnotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [newAdded, setNewAdded] = useState(false);

  useEffect(() => {
    getAnnotations(token, art_item_id).then((response) => {
      if (response.status == 200 && response.data.annotations.length > 0) {
        setAnnotations(response.data.annotations);
      }
    });
  }, []);
  useEffect(() => {
    if (newAdded) {
      getAnnotations(token, art_item_id).then((response) => {
        if (response.status == 200 && response.data.annotations.length > 0) {
          setAnnotations(response.data.annotations);
        }
      });
      setNewAdded(false);
    }
  }, [newAdded]);

  const addNewAnnotation = () => {
    console.log("here");
    if (type != "" && comment != "") {
      postAnnotation(
        token,
        userId,
        art_item_id,
        comment,
        type,
        type,
        type
      ).then((response) => {
        console.log(response);
        if (response.status == 201) {
          setShowModal(false);
          setNewAdded(true);
          setType("");
          setComment("");
        }
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <Pressable
        onPress={() => setShowModal(true)}
        style={{
          marginVertical: 12,
          padding: 8,
          borderWidth: 1,
          borderRadius: 8,
        }}
      >
        <Text>New Annotation</Text>
      </Pressable>
      <FlatList
        data={annotations}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              margin: 8,
              padding: 4,
              borderColor: Colors.primary,
            }}
          >
            <Text>ID: {item.id} lsdkfgjldkfnglkdfng</Text>
            <Text>TYPE: {item.target.type}</Text>
            <Text>VALUE: {item.body.value}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
            <Text style={styles.modalText}>Add New Annotation</Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.6,
                justifyContent: "space-between",
                marginVertical: 12,
              }}
            >
              <Text>TYPE: (image or text)</Text>
              <TextInput
                style={{
                  borderRadius: 4,
                  borderWidth: 1,
                  padding: 6,
                  marginBottom: 8,
                }}
                value={type}
                onChangeText={(text) => setType(text)}
              ></TextInput>
              <Text>COMMENT:</Text>
              <TextInput
                value={comment}
                onChangeText={(text) => setComment(text)}
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
              <Pressable style={[styles.button]} onPress={addNewAnnotation}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => setShowModal(!showModal)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Annotations;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
