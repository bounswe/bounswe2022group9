import React, { useState } from "react";
import { Text, StyleSheet, Image, View, Dimensions, ScrollView, SafeAreaView, Pressable} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const dimensions = Dimensions.get("window");

    
const ArtItemDisplay = () => {
    const [liked, setLiked] = useState(false);
    var comments = [];

	for(let i = 0; i < 20; i++){

		comments.push(
			<View key = {i}>
				<View style = {styles.comment}>
					<Text style = {{ fontWeight: "bold", color:'#173679'}}>yagmur.goktas</Text>
                    <Text>Really nice pic</Text>
				</View>

			</View>
		)
	}

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style= { styles.creator }>Created by Yagmur Goktas</Text>
                <View style={ styles.caption }>
                    <Text>caption</Text>
                </View>
                <Image style= { styles.photo } source = {require("../assets/bus.jpg")} />
                <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                    name={liked ? "heart" : "heart-outline"}
                    size={32}
                    color={liked ? "red" : "black"}
                    style={{ marginLeft : dimensions.width*0.15 , marginTop : 10}}
                />
                </Pressable>
                <Text style= {{ alignSelf: "center" , marginTop: 20 }}> 5 Likes </Text>
                <Text style = { styles.creator }> Comments </Text>
                <View style= {styles.commentcontainer}>{ comments }</View>
                <View style= {styles.tags}>
                    <Text>Tags</Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default ArtItemDisplay;

const styles = StyleSheet.create({
    creator: {
        marginTop: 40,
        alignSelf:'center',
        color:'#173679',
        fontWeight: "bold",
    },
    photo: {
        marginTop: 30,
        width: dimensions.width*0.70,
        height: dimensions.width*0.70,
        alignSelf:'center',
    },
    commentcontainer: {
        marginTop: 10,
        width: dimensions.width*0.70,
        alignSelf:'center',
    },
    comment:{
        marginTop: 10,
        backgroundColor: '#c8f4ff',
    },
    tags:{
        marginTop: 20,
    },
    caption:{
        width: dimensions.width*0.70,
        borderWidth: 1,
        borderColor: '#c8f4ff',
        alignSelf:'center',
        marginTop:20,
    },
})