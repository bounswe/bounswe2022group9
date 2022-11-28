import {React } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Colors from "../constants/Colors";

const Users = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        username: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        username: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        username: 'Third Item',
    }
]

const User = ({ username }) => (
    <View style={styles.user}>
      <Text style={styles.username}>{username}</Text>
    </View>
  );

const UserList = () => {
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
        backgroundColor: Colors.primaryDark,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      username: {
        fontSize: 32,
      },
});

export default UserList;