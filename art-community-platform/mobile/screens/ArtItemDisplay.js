import React, { useState } from "react";
import { Text, StyleSheet, Image, View, Dimensions, ScrollView, SafeAreaView, Pressable} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getArtItem, like, comment} from "./services/ArtItemService"
import { Colors } from "react-native/Libraries/NewAppScreen";

const dimensions = Dimensions.get("window");
    
const ArtItemDisplay = () => {
    const { navigation } = props;
    const { token, art_item_id } = props.route.params;
    const [liked, setLiked] = useState(false);
    const [newComment, setNewComment] = React.useState("");
    const [art_item, setArtItem] = React.useState({
        id: 0,
        owner_name: "",
        image_url: "",
        description: "",
        date: "",
        comments: [],
        tags: [],
        comment_count: 0,
        favorite_count: 0,
    });
    
    useEffect(() => {
        getArtItem(token, art_item_id).then((response) => {
          console.log(response.data);
          setArtItem(response.data);
        });
    }, []);

    var comments = [];
	for(let i = 0; i < art_item.comment_count; i++){

		comments.push(
			<View key = {i}>
				<View style = {styles.comment}>
					<Text style = {{ fontWeight: "bold", color:'#173679'}}>{art_item.comments[i].owner_name}</Text>
                    <Text>{art_item.comments[i].text}</Text>
				</View>

			</View>
		)
	}

    comments.push(
        <View key = {art_item.comment_count+1}>
            <View style = {styles.comment}>
                <Text style = {{ fontWeight: "bold", color:'#173679'}}>{art_item.owner_name}</Text>
                <TextInput
                    value={username}
                    onChangeText={(text) => setNewComment(text)}
                    style={styles.input}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => { 
                        comment(token , art_item_id , newComment); 
                    }}
                >
                <Text style={styles.buttonText}>Add</Text>
                </Pressable>            
            </View>
        </View>
    )

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style= { styles.creator }>Created by {art_item.owner_name}</Text>
                <Text style= { styles.timestamp }> {art_item.date}</Text>
                <View style={ styles.caption }>
                    <Text>{art_item.description}</Text>
                </View>
                <Image style= { styles.photo } source = {require(art_item.image_url)} />
                <View style= {{flexDirection:'row'}}>
                <Pressable onPress={() => setLiked((isLiked) => !isLiked) }>
                    <MaterialCommunityIcons
                    name={liked ? "heart" : "heart-outline"}
                    size={32}
                    color={liked ? "red" : "black"}
                    style={{ marginLeft : dimensions.width*0.15 , marginTop : 10}}
                />
                </Pressable>
                <Text style= {{ alignSelf: "center" , marginTop: 20 }}> {art_item.favorite_count} Likes </Text>
                </View>
                <View style= {{flexDirection:'row'}}>
                <Text style = {{ marginTop: 40 , marginLeft: dimensions.width*0.15 , color:'#173679', fontWeight: "bold"}}> Comments </Text>
                <MaterialCommunityIcons
                    name={"chat-plus"}
                    size={32}
                    color={"#173679"}
                    style={{ marginLeft : 10 , marginTop : 30}}
                />
                </View>
                <View style= {styles.commentcontainer}>{ comments }</View>
                <View style= {styles.tags}>
                    <Text style = {{ marginTop: 20 , marginLeft: dimensions.width*0.15 , color:'#173679', fontWeight: "bold"}} >Tags</Text>
                    <View>
                        {art_item.tags.map((tag) => {
                            return (
                            <View style= {{flexDirection:'row'}}>
                                <Text style={styles.tagItem}>{tag}{'\t'}</Text>
                            </View>
                            );
                        })}
                    </View>
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
    timestamp:{
        marginLeft: dimensions.width*0.6,        
        color:'#173679',
        fontSize:12
    },
    button: {
        padding: 8,
        paddingHorizontal: 12,
        marginTop: 12,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        alignSelf: "center",
    },
    buttonText: {
        color: "white",
    },
    tagItem: {
        color: '#173679',
        fontSize:15 ,
        backgroundColor: Colors.secondaryLight,
    },
})