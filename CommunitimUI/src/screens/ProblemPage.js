import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function ProblemPage(){
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Selectează problema:
                </Text>
            </View>


            <View style={styles.section}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                <Text style={styles.paragraph}>Normal checkbox</Text>
            </View>
            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#9933ff" : undefined}
                />
            </View>

            <Pressable style = {styles.backButton}>
                <Text style = {styles.buttonText}>înapoi</Text>
            </Pressable>

            <Pressable style = {styles.forwardButton}>
                <Text style = {styles.buttonText}>înainte</Text>
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

    backButton:{
        marginTop:470,
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
      },


      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
      },
      paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 20,
      }
})