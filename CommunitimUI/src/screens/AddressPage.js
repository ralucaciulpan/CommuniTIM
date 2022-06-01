import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react';

export default function AddressPage({navigation}){
    /*const postHandler = () =>{
        navigation.navigate('post_category')
      }*/
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Introduceți adresa:
                </Text>
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
        marginBottom: 40,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

    postButton:{
        marginTop:550,
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
      }
    }
)