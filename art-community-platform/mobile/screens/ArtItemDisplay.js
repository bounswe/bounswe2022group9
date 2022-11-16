import React from "react";
import { Text, StyleSheet, Image, View, Dimensions, ScrollView, SafeAreaView} from "react-native";

const dimensions = Dimensions.get("window");
const ArtItemDisplay = () => {
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
                <Text style= { styles.creator }>Yagmur Goktas</Text>
                <Image style= { styles.photo } source = {require("../assets/bus.jpg")} />
                <Text style= {{ alignSelf: "center" , marginTop: 20 }}> 5 Likes </Text>
                <Text style = { styles.creator }> Comments </Text>
                <View style= {styles.commentcontainer}>{ comments }</View>
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
        marginTop: 20,
        backgroundColor: '#c8f4ff',
    },
})