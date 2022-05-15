import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
export default function CategoryPage(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.category_text}>
                    Selectează categoria:
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable>
                    <Text style = {styles.buttonText}>străzi</Text>
                </Pressable>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable>
                    <Text style = {styles.buttonText}>iluminare publică</Text>
                </Pressable>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable>
                    <Text style = {styles.buttonText}>categorie</Text>
                </Pressable>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable>
                    <Text style = {styles.buttonText}>alta categorie</Text>
                </Pressable>
            </View>

        </View>


    )
}
const styles = StyleSheet.create({

    container:{

    },

    category_text:{
        marginTop: 90,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

   buttonsContainer:{
        borderColor:'#9933ff',
        borderWidth: 3,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        borderRadius: 8
   },

   buttonText:{
       fontSize:35,
       alignSelf:'center',
       marginTop: 10,
       marginBottom: 10
   } 
});