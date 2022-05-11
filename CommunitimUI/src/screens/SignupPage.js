import {StyleSheet,Text,View,Pressable,Image, Dimensions,Button,SafeAreaView} from 'react-native';
import React from 'react';
export default function SignupPage(){
    return(
        <View style= {styles.container}>
            <SafeAreaView style={styles.header}>

            </SafeAreaView>

            <SafeAreaView style={styles.footer}>
                
            </SafeAreaView>
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
    }
})