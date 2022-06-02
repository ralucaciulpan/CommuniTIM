import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
export default function CategoryPage({navigation}){
    const problemHandler = () =>{
        navigation.navigate('screen_problem')
        setSelect1(true);
      }
    const lightProblemHandler = () =>{
        navigation.navigate('screen_lightProblem')
        setSelect2(true);
      }
      const otherProblemHandler = () =>{
        navigation.navigate('screen_otherProblem')
        setSelect3(true);
      }
      const actionHandler = () =>{
        navigation.navigate('screen_action')
      }
    return (
        
        <View style={styles.container}>
            <View>
                <Text style={styles.category_text}>
                    Selectează categoria:
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable
                onPress={problemHandler}>
                    <Text style = {styles.buttonText}>străzi</Text>
                </Pressable>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable
                onPress={lightProblemHandler}>
                    <Text style = {styles.buttonText}>iluminare publică</Text>
                </Pressable>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable
                onPress={otherProblemHandler}>
                    <Text style = {styles.buttonText}>altele</Text>
                </Pressable>
            </View>

            <Pressable 
                onPress={actionHandler}
                style = {styles.backButton}>
            <Text style = {styles.backButtonText}>înapoi</Text>
            </Pressable>


        </View>


    )
}
const styles = StyleSheet.create({

    container:{

    },

    category_text:{
        marginTop: 100,
        marginBottom: 40,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

   buttonsContainer:{
        borderColor:'#9933ff',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        borderRadius: 8
   },

   buttonText:{
       fontSize:35,
       alignSelf:'center',
       marginTop: 25,
       marginBottom: 25
   },

   backButton:{
    marginTop:170,
    marginLeft:80,
    marginRight:80,
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:6,
    elevation:3,
    backgroundColor:"#9933ff"
  },

  backButtonText:{
    color:"#fff", 
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
  },
});