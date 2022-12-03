import {React } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Colors from "./constants/Colors";

const Users = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        username: 'First User',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        username: 'Second User',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        username: 'Third User',
    }
]

const UserList = (props) => {
  const { navigation } = props;
  const { userId, token, type } = props.route.params;
  const [users, setUsers] = React.useState([])
    useEffect(() => {
      if(type == "followers"){
        getFollowers()
      }else if(type == "followees"){
        getFollowees()
      }
    })

  const User = ({ username }) => (
    <View style={styles.user}>
      <Image style={styles.photo} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
      <Text onPress={() => navigation.navigate("") } style={styles.username}>{username}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
      <User username={item.username} />
  );
  return (
      
      <SafeAreaView style={styles.container}>
      <FlatList
          data={Users}
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
    }
});

export default UserList;