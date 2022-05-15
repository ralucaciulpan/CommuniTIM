import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView,TextInput} from 'react-native';
import React from 'react';
export default function ActionPage(){
    return(
        
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Selectează o acțiune:
                </Text>
            </View>
            <View style={styles.body}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontWeight:'bold',
        color:"#9933ff",
        fontSize:25,
        marginTop:30
    },
    body:{
        flex:4,
        backgroundColor:'#302',
    }
})