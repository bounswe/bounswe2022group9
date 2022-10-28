import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

class TermsAndConditions extends Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Terms and Conditions</Text>
                <ScrollView>
                    <Text>{'\n'}Terms and Conditions for aaaaaaaaa</Text>
                    <Text>{'\n'}Introduction</Text>
                    <Text>{'\n'}These application Standard Terms and Conditions written on this webpage shall manage your use of our application, aaa accessible at aaaaa.</Text>
                    <Text>{'\n'}These Terms will be applied fully and affect to your use of this application. By using this application, you agreed to accept all terms and conditions written in here. You must not use this application if you disagree with any of these application Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.</Text>
                    <Text>{'\n'}Minors or people below 18 years old are not allowed to use this application.</Text>
                    <Text>{'\n'}Intellectual Property Rights</Text>
                    <Text>{'\n'}Other than the content you own, under these Terms, aaaaaaaaa and/or its licensors own all the intellectual property rights and materials contained in this application.</Text>
                    <Text>{'\n'}You are granted limited license only for purposes of viewing the material contained on this application.</Text>
                    <Text>{'\n'}Restrictions</Text>
                    <Text>{'\n'}You are specifically restricted from all of the following:</Text>
                    <Text>{'\n'}publishing any application material in any other media;</Text>
                    <Text>{'\n'}selling, sublicensing and/or otherwise commercializing any application material;</Text>
                    <Text>{'\n'}publicly performing and/or showing any application material;</Text>
                    <Text>{'\n'}using this application in any way that is or may be damaging to this application;</Text>
                    <Text>{'\n'}using this application in any way that impacts user access to this application;</Text>
                    <Text>{'\n'}using this application contrary to applicable laws and regulations, or in any way may cause harm to the application, or to any person or business entity;</Text>
                    <Text>{'\n'}engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this application;</Text>
                    <Text>{'\n'}using this application to engage in any advertising or marketing.</Text>
                    <Text>{'\n'}Certain areas of this application are restricted from being access by you and aaaaaaaaa may further restrict access by you to any areas of this application, at any time, in absolute discretion. Any user ID and password you may have for this application are confidential and you must maintain confidentiality as well.</Text>
                    <Text>{'\n'}Your Content</Text>
                    <Text>{'\n'}In these application Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this application. By displaying Your Content, you grant aaaaaaaaa a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</Text>
                    <Text>{'\n'}Your Content must be your own and must not be invading any third-party’s rights. aaaaaaaaa reserves the right to remove any of Your Content from this application at any time without notice.</Text>
                    <Text>{'\n'}Your Privacy</Text>
                    <Text>{'\n'}Please read Privacy Policy.</Text>
                    <Text>{'\n'}No warranties</Text>
                    <Text>{'\n'}This application is provided "as is," with all faults, and aaaaaaaaa express no representations or warranties, of any kind related to this application or the materials contained on this application. Also, nothing contained on this application shall be interpreted as advising you.</Text>
                    <Text>{'\n'}Limitation of liability</Text>
                    <Text>{'\n'}In no event shall aaaaaaaaa, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this application whether such liability is under contract.  aaaaaaaaa, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this application.</Text><Text>Indemnification</Text><Text>You hereby indemnify to the fullest extent aaaaaaaaa from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</Text><Text>Severability</Text><Text>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</Text><Text>Variation of Terms</Text><Text>aaaaaaaaa is permitted to revise these Terms at any time as it sees fit, and by using this application you are expected to review these Terms on a regular basis.</Text><Text>Assignment</Text><Text>The aaaaaaaaa is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</Text><Text>Entire Agreement</Text><Text>These Terms constitute the entire agreement between aaaaaaaaa and you in relation to your use of this application, and supersede all prior agreements and understandings.</Text><Text>Governing Law & Jurisdiction</Text><Text>These Terms will be governed by and interpreted in accordance with the laws of the State of tr, and you submit to the non-exclusive jurisdiction of the state and federal courts located in tr for the resolution of any disputes.</Text>
                </ScrollView>
            </SafeAreaView>
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