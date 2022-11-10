import React from "react";
import { Text, StyleSheet, Image, View, Dimensions} from "react-native";

const dimensions = Dimensions.get("window");
const ArtItemDisplay = () => {
    return(
        <View>
        <Text style= { styles.creator }>Yagmur Goktas</Text>
        <Image style= { styles.photo } source = {require("../assets/bus.jpg")} /></View>
    )
}

export default ArtItemDisplay;

const styles = StyleSheet.create({
    creator: {
        marginTop: 50,
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
})