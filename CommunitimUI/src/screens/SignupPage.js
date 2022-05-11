import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView,TextInput} from 'react-native';
import React from 'react';
export default function SignupPage(){
    return(
        <View style= {styles.container}>
            <SafeAreaView style={styles.header}>
                <Image 
                    style={styles.logo}
                    source={require('../utils/placeholderlogo.png')}
                    resizeMode='stretch'
                />
            </SafeAreaView>

            <SafeAreaView style={styles.footer}>
                <Text style={styles.welcome_text}>
                    Bine ai venit pe CommuniTIM!
                </Text>
                <Text style = {styles.fieldText}>username:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    />
                </View>

                <Text style = {styles.fieldText}>password:</Text>
                <View style = {styles.passwordFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    />
                </View>

                <Text style = {styles.fieldText}>mail:</Text>
                <View style = {styles.mailFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    />
                </View>
            </SafeAreaView>
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
      alignItems:'center'
    },
    logo:{
        marginBottom:25
    },
    welcome_text:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:30
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
          marginBottom:25
      },
      passwordFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderColor:'#696969',
        width:windowWidth-50,
        height:40,
        marginBottom:25
    },
    mailFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderColor:'#696969',
        width:windowWidth-50,
        height:40
    },
      fieldText:{
          color:'#000',
          fontSize:15,
          fontWeight:'bold',
          marginBottom:15,
          alignSelf: 'flex-start'
      }
})