import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView,TextInput} from 'react-native';
import React ,{useState,useEffect} from 'react';
import axios from "axios";
import Constants from "expo-constants"

export default function SignupPage(){
    const [name,onChangeName] = useState("");
    const [password,onChangePassword] = useState("");
    const [email,onChangeEmail] = useState("");

    const submitCredentials = async (event) =>{
      try {
        const response = await axios.post('http://192.168.0.213:8080/users/add', {
          username:name,
          password:password,
          email:email
        });
        if (response.status === 200) {
          alert(` You have created: ${JSON.stringify(response.data)}`);
        } else {
          throw new Error("An error has occurred");
        }
      } catch (error) {
        alert("An error has occurred" +error + name + password + email);
      }
    };
    
    return(
        <View style= {styles.container}>
            <SafeAreaView style={styles.header}>
                <Image 
                    style={styles.logo}
                    source={require('../utils/logo.png')}
                    resizeMode='stretch'
                />
            </SafeAreaView>

            <View style={styles.footer}>
                <Text style={styles.welcome_text}>
                    Creează un cont.
                </Text>
                <Text style = {styles.fieldText}>utilizator:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    onChangeText={onChangeName}
                    value={name}
                    />
                </View>

                <Text style = {styles.fieldText}>parolă:</Text>
                <View style = {styles.passwordFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={password}
                    />
                </View>

                <Text style = {styles.fieldText}>mail:</Text>
                <View style = {styles.mailFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    onChangeText={onChangeEmail}
                    value={email}
                    />
                </View>

                <Pressable 
                style = {styles.loginButton}
                >
                    <Text onPress={submitCredentials} style = {styles.buttonText}>Creează</Text>
                </Pressable>
                <Text> {name} {password} {email}</Text>
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
      alignItems:'center',
    },
    logo:{
        marginBottom:25
    },
    welcome_text:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:30,
        color:"#000"
      },
      usernameField:{
        fontSize:20,
      },
      passwordField:{
        fontSize:20
      },
      usernameFieldContainer:{
          borderLeftWidth:3,
          borderRightWidth:3,
          borderTopWidth:3,
          borderBottomWidth:3,
          borderColor:'#696969',
          width:windowWidth-50,
          height:40,
          marginBottom:25,
          borderRadius:8
      },
      passwordFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderColor:'#696969',
        width:windowWidth-50,
        height:40,
        marginBottom:25,
        borderRadius:8
    },
    mailFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderColor:'#696969',
        width:windowWidth-50,
        height:40,
        borderRadius:8
    },
      fieldText:{
          color:'#696969',
          fontSize:15,
          fontWeight:'bold',
          marginBottom:15,
          alignSelf:'flex-start'
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
})