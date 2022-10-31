
import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet, Text, View, Image,ScrollView, SafeAreaView } from "react-native";

const Feed = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <View style={styles.square}>
          <View style={styles.header}>
            <Text>artLand</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/halloween.png")} />
        </View>

        <View style={styles.square}>
          <View style={styles.header}>
            <Text>love.art</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/concert.jpg")} />
        </View>

        <View style={styles.square}>
          <View style={styles.header}>
            <Text>photo_community</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/old-man.jpg")} />
        </View>

        <View style={styles.square}>
          <View style={styles.header}>
            <Text>112233paint</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/halloween-gaf.jpg")} />
        </View>

        <View style={styles.square}>
          <View style={styles.header}>
            <Text>nature_photo</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/witch.jpg")} />
        </View>

        <View style={styles.square}>
          <View style={styles.header}>
            <Text>safariPhotographer</Text>
          </View>
          <Image style={styles.photo} source = {require("../assets/timothy-barlin.jpg")} />
        </View>
        
    </ScrollView>
    </View>
    
  );
};

export default Feed;
const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:50,
  },
  square:{
    padding: 12,
    paddingHorizontal: 12,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: "white",
  },
  photo:{
    alignSelf: 'center',
    width:300,
    height:300,
    marginTop:12,
    marginBottom:12,
    marginLeft:12,
    marginRight:12,
  }
});


