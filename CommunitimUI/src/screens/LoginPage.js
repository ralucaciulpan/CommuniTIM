
import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
export default function LoginPage(){
    const [text, setText] = React.useState("");
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
                <Text style={styles.welcome_text}>
                    Bine ai venit pe CommuniTIM!
                </Text >
                <Text style = {styles.fieldText}>utilizator:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    />
                </View>
                <Text style = {styles.fieldText}>parolă:</Text>
                <View style = {styles.passwordFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    />
                </View>
                <Pressable style = {styles.loginButton}
                >
                    <Text style = {styles.buttonText}>loghează-te</Text>
                </Pressable>
              </View>
          </View>
    )
}
  const {height} = Dimensions.get('window');
  const windowWidth = Dimensions.get('window').width;
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
        marginBottom:40
      },
      usernameField:{
        fontSize:20,
      },
      passwordField:{
        fontSize:20,
        borderTopLeftRadius:50
      },
      usernameFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        width:windowWidth-50,
        height:50,
        marginBottom:50
    },
      passwordFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        width:windowWidth-50,
        height:50
     },
      fieldText:{
        color:'#696969',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
        alignSelf: 'flex-start'
      },
      loginButton:{
        marginTop:50,
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
      }
  });