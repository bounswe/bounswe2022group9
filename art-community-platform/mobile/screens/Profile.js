import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.follower , {marginTop:60}]}> Followers: 0</Text>
            <Text style={styles.follower}> Followees: 0</Text>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <ScrollView style={{marginTop:20}}>
          <View style={styles.bodyContent}></View>
            <Text style={styles.namee}>Yagmur Goktas</Text>
          </ScrollView>
    </View>
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
  }
});
