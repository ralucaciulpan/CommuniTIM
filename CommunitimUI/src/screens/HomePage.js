import {StyleSheet,Text,View,Pressable} from 'react-native';
import React from 'react';

export default function HomePage({navigation}){
    return(
      <View style = {styles.container}>
        <Text>
          This is the HomePage.
        </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });