import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button} from 'react-native';
import React from 'react';
 
export default function HomePage({navigation}){

    const loginHandler = () =>{
      navigation.navigate('screen_login')
    }
    const signupHandler = () =>{
      navigation.navigate('screen_signup')
    }
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image 
            source={require('../utils/logo.png')}
            resizeMode='stretch'
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.welcome_text}>
            Fii la curent cu toate problemele din oraș.
          </Text >
          <Pressable 
          onPress={loginHandler}
          style = {styles.loginButton}>
            <Text style = {styles.buttonText}>Intră în cont</Text>
          </Pressable>
          <Pressable 
            onPress={signupHandler}
          >
            
            <Text style = {styles.signupText}>Nu ai cont încă? Creează unul.</Text>
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
      backgroundColor: '#9933ff',
    },
    header:{
      flex:2,
      justifyContent: 'center',
      alignItems:'center'
    },
    footer:{
      flex:1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:50,
      paddingHorizontal:30,
      alignItems:'center'
    },
    logo:{
      height:logo_height,
      width:logo_height,
    },
    welcome_text:{
      fontSize:30,
      fontWeight:'bold',
    },
    loginButton:{
      marginTop:35,
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:12,
      paddingHorizontal:32,
      borderRadius:6,
      elevation:3,
      backgroundColor:"#9933ff"
    },
    buttonText:{
      color:"#fff", 
      fontWeight:'bold',
      fontSize:20,
    },
    signupText:{
      color:"#9933ff",
      fontSize:15,
      fontWeight:'700',
      marginTop:20
    }
  });