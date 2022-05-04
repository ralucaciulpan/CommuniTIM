
import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView} from 'react-native';
import React from 'react';
export default function LoginPage(){
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {styles.header}>
                <Image 
                    style = {styles.logo}
                    source={require('../utils/logo.png')}
                    resizeMode='stretch'
                />
            </SafeAreaView>

            <View style = {styles.footer}>
                <Pressable>
                <Text style={styles.welcome_text}>
                    Bine ai venit pe CommuniTIM!
                </Text >
                </Pressable>
            </View>
        </View>
    )
}
const {height} = Dimensions.get('window');
  const logo_height = height*0.28;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header:{
      backgroundColor: '#fff',
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    footer:{
      flex:2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:50,
      paddingHorizontal:30,
      alignItems:'center'
    },
    logo:{
        marginBottom:250
    },
    welcome_text:{
        fontSize:30,
        fontWeight:'bold',
      },
  });