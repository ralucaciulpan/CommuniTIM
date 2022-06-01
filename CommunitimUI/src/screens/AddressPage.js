import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react';

export default function AddressPage({navigation}){
    /*const postHandler = () =>{
        navigation.navigate('post_category')
      }*/
      const [latitude,onChangeLatitude] = useState("");
      const [longitude,onChangeLongitude] = useState("");

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Introduceți adresa:
                </Text>
            </View>

            <Text style = {styles.fieldText}>latitudine:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    onChangeText={onChangeLatitude}
                    value={latitude}
                    />
                </View>
                <Text style = {styles.fieldText}>longitudine:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    onChangeText={onChangeLongitude}
                    value={longitude}
                    />
                </View>

            <Pressable 
                /*onPress={postHandler}*/
                style = {styles.postButton}>
            <Text style = {styles.buttonText}>postează</Text>
            </Pressable>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },

    problem_text:{
        marginTop: 100,
        marginBottom: 120,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

    postButton:{
        marginTop:180,
        marginLeft:60,
        marginRight:60,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:6,
        elevation:3,
        backgroundColor:"#9933ff"
      },
      
      buttonText:{
        color:"#fff", 
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20,
      },

      usernameField:{
        fontSize:20,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },

      passwordField:{
        fontSize:20,
        borderTopLeftRadius:50,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },

      usernameFieldContainer:{
        marginTop:15,
        marginLeft:20,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRadius:8,
        width:windowWidth-50,
        height:50,
        marginBottom:50,
        borderColor:'#696969'
    },

    fieldText:{
        marginLeft:20,
        color:'#696969',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
        alignSelf: 'flex-start'
      }
    }
)