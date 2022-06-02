import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView,TextInput} from 'react-native';
import React from 'react';
export default function ActionPage({navigation}){
    const categoryHandler = () =>{
        navigation.navigate('screen_category')
      }
    const homepageHandler = () =>{
        navigation.navigate('screen_home')
    }
    const mappageHandler = () =>{
        navigation.navigate('screen_map')
    }

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
                        <Pressable
                        onPress={categoryHandler}>
                        <Image 
                            style={styles.plus}
                            source={require('../utils/plusSign.png')}
                        />
                        <Text style={styles.plusText}>Raportează o problemă</Text>
                        </Pressable>
                    </View>

                    <View style={styles.div1button2}>
                        <Pressable onPress={mappageHandler}>
                        <Image 
                            style={styles.settings}
                            source={require('../utils/map.png')}
                        />
                        <Text style={styles.settingsText}>Vezi harta</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.div2}>
                    <View style={styles.div2button1}>
                         <Image 
                            style={styles.roads}
                            source={require('../utils/road.png')}
                        />
                        <Text style={styles.roadsText}>Vezi probleme existente cu străzile</Text>

                    </View>
                    <View style={styles.div2button2}>
                        <Image 
                            style={styles.streetLamp}
                            source={require('../utils/streetLamp.png')}
                        />
                        <Text style={styles.streetLampText}>Vezi probleme existente cu iluminarea stradală</Text>

                    </View>
                </View>
                <View style={styles.div3}>
                    <View style={styles.div3button1}>
                    <Image 
                            style={styles.streetLamp}
                            source={require('../utils/other.png')}
                        />
                    <Text style={styles.streetLampText}>Vezi alte probleme existente</Text>
                    </View>

                    <View style={styles.div3button2}>
                    <Pressable
                        onPress={homepageHandler}>
                    <Image 
                            style={styles.streetLamp}
                            source={require('../utils/home.png')}
                        />   
                    <Text style={styles.streetLampText}>Înapoi la HomePage</Text>  
                    </Pressable> 
                    </View>    
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
        marginTop: 100,
        marginBottom: 40,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
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
        borderRadius:8,
        margin:4,
        alignItems:'center',
    },
    div1button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        borderRadius:8,
        margin:4,
        alignItems:'center'
    },
    div2button1:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        borderRadius:8,
        margin:4,
        alignItems:'center',
    },
    div2button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        borderRadius:8,
        margin:4,
        alignItems:'center',
    },
    div3button1:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:5,
        borderRadius:8,
        margin:4,
        alignItems:'center',
    },
    div3button2:{
        flex:1,
        backgroundColor:"#fff",
        borderWidth:4,
        borderRadius:8,
        margin:4,
        alignItems:'center',
    },
    plus:{
        resizeMode:'stretch',
        marginTop:25,
        alignSelf:'center'
    },
    plusText:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:25,
        alignSelf:'center'
    },
    settings:{
        resizeMode:'stretch',
        marginTop:25,
        alignSelf:'center'
    },
    settingsText:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:25,
        alignSelf:'center'
    },
    roads:{
        resizeMode:'stretch',
        marginTop:25,
        alignSelf:'center'
    },
    roadsText:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:25,
        alignSelf:'center',
        textAlign:'center'
    },
    streetLamp:{
        resizeMode:'stretch',
        marginTop:25,
        alignSelf:'center'
    },
    streetLampText:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:25,
        alignSelf:'center',
        textAlign:'center'
    }
})