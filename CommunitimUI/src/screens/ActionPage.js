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
                <View style={styles.div1}>
                    <View style={styles.div1button1}>
                        <Image 
                            style={styles.plus}
                            source={require('../utils/plusSign.png')}
                        />
                        <Text style={styles.plusText}>Raportează o problemă</Text>
                    </View>

                    <View style={styles.div1button2}>

                    </View>

                </View>
                <View style={styles.div2}>
                    <View style={styles.div2button1}></View>
                    <View style={styles.div2button2}></View>
                </View>
                <View style={styles.div3}>
                    <View style={styles.div3button1}></View>
                    <View style={styles.div3button2}></View>    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
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
    },
    div1:{
        flex:2,
        flexDirection:"row",
        backgroundColor:"#fff",
    },
    div2:{
        flex:2,
        flexDirection:"row",
        backgroundColor:"#fff"
    },
    div3:{
        flex:2,
        flexDirection:"row"
    },
    div1button1:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        margin:4,
        alignItems:'center'
    },
    div1button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        margin:4
    },
    div2button1:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        margin:4
    },
    div2button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        margin:4
    },
    div3button1:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        margin:4
    },
    div3button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:4,
        margin:5
    },
    plus:{
        resizeMode:'stretch',
        marginTop:25
    },
    plusText:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:25,
        alignSelf:'center'
    }
})