
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
                <Text style={styles.fieldText}>Username:</Text>
                <TextInput
                style={styles.usernameField}
                placeholder='username'
                />
                <Text style={styles.fieldText}>Password:</Text>
                <TextInput
                style={styles.passwordField}
                placeholder='password'
                />
               
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
        marginBottom:70
      },
      usernameField:{
        fontSize:20,
        paddingBottom:70
        
      },
      passwordField:{
        fontSize:20,
        borderTopLeftRadius:50
      },
      fieldContainer:{
          borderLeftWidth:4,
          borderRightWidth:4,
          borderTopWidth:4,
          borderBottomWidth:4,
      },
      fieldText:{
          color:'#696969',
          fontSize:20,
          fontWeight:'bold',
          marginBottom:15,
          alignSelf: 'flex-start'
      }
  });