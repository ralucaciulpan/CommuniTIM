import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

export default function ProblemPage(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Selectează problema:
                </Text>
            </View>
            <View>
                <Pressable style = {styles.backButton}
                >
                    <Text style = {styles.buttonText}>înapoi</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style = {styles.forwardButton}
                >
                    <Text style = {styles.buttonText}>înainte</Text>
                </Pressable>
            </View>
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

    backButton:{
        marginTop:600,
        marginLeft:15,
        marginRight:250,
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:6,
        elevation:3,
        backgroundColor:"#9933ff"
      },

      forwardButton:{
        marginTop: -50,
        marginLeft:250,
        marginRight:15,
        alignItems:'baseline',
        justifyContent:'flex-end',
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


})