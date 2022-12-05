import { React } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Colors from "./constants/Colors";
import { getFollowees, getFollowers, getLikedUsers} from "./services/GeneralServices"
import { useState , useEffect } from "react";

const UserList = (props) => {
  const { navigation } = props;
  const { userId, token, type, art_item_id} = props.route.params;
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      if(type == "followers"){
        getFollowers( userId , token).then((response) => {
          console.log(1 , response.data);
          setUsers(response.data.followers);
        });
      }else if(type == "followees"){
        getFollowees(userId , token).then((response) => {
          console.log(2 , response.data);
          setUsers(response.data);
        });
      }else{
        getLikedUsers(token, art_item_id).then((response) => {
          console.log(3 , response.data);
          setUsers(response.data);
        });
      }
    } , [])

  const User = ({ username , profile_img_url , id , location }) => (
    <View style={styles.user} onPress={() => {
      navigation.navigate("Profile", {
        userId: id,
        token: token,
      });
    }}>
      <Image style={styles.photo} source={{uri: profile_img_url}}/>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.location}>{"\n"}{location}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
      <User username={item.username} profile_img_url={item.profile_img_url} id={item.id} location={item.location} />
  );
  return (
      
      <SafeAreaView style={styles.container}>
      <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={user => user.id}
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      },
    user: {
      flexDirection: "row",
      backgroundColor: Colors.primaryLight,
      padding: 12,
      marginVertical: 5,
      marginHorizontal: 10,
    },
    username: {
      marginLeft: 50,
      fontSize: 20,
    },
    photo: {
      width: 30,
      height: 30,
      borderRadius: 18,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginLeft: 10
    },
    location: {
      position: 'absolute', 
      right: 12,
      fontSize: 14,
    }
});

export default UserList;