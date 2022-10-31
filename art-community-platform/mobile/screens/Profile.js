import { StyleSheet, Text, View, Image,ScrollView, SafeAreaView } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <View style={styles.header}>
            <Text style={[styles.follower , {marginTop:50}]}> Followers: 0</Text>
            <Text style={styles.follower}> Followees: 0</Text>
            <Text style={styles.follower}> Posts: 5</Text>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={{marginTop:20}}>
          <View style={styles.bodyContent}></View>
            <Text style={styles.namee}>yagmur.goktas</Text>
            <Text style={styles.description}>Software Engineer</Text>

          <View style={[styles.photosCard , {paddingBottom: 50}]}>
            <Text style={styles.namee}>POSTS</Text>
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source = {require("../assets/bus.jpg")} />
              <Image style={styles.photo} source = {require("../assets/water.jpg")} />
              <Image style={styles.photo} source = {require("../assets/concert.jpg")} />
              <Image style={styles.photo} source = {require("../assets/rabit.jpg")} />
              <Image style={styles.photo} source = {require("../assets/road.jpg")} />
            </View>
          </View>
          </View>
          </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#173679",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  bodyContent: {
    flex: 1,
    padding:30,
  },
  follower: {
    alignSelf:'center',
    color:'white',
    fontWeight: "bold"
  },
  namee:{
    alignSelf:'center',
    color:'#173679',
    fontWeight: "bold",
  },
  description:{
    fontSize:12,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    padding: 10,
    marginLeft: 20,
  },
  photosCard:{
    marginTop:10,
  },
  photo:{
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
  }
});
