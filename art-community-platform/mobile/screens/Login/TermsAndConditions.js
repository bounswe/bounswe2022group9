import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

class TermsAndConditions extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Terms and conditions</Text>
            </View>
        );
    }
}


export default TermsAndConditions;

const styles = {

    container:{
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10
    },
    title: {
        fontSize: 22,
        alignSelf: 'center'
    },
}