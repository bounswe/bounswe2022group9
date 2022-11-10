import React from "react";
import { Text, StyleSheet} from "react-native";

const ArtItemDisplay = () => {
    return(
        <Text style= { styles.creator }>Yagmur Goktas</Text>
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
})