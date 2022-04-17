import {StyleSheet,Text,View,Pressable} from 'react-native';
import React from 'react';

export default function HomePage({navigation}){
    return(
      <View style = {styles.container}>
        <Text>
          This is the HomePage.
        </Text>
        <View style = {styles.header}>
          <Text>
            This is the header.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text>
            This is the footer.
          </Text>
        </View>
      </View>
      
    )
  }

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
      paddingHorizontal:30
    },
  });