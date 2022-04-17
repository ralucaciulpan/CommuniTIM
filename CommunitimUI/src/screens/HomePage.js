import {StyleSheet,Text,View,Pressable,Image, Dimensions} from 'react-native';
import React from 'react';

export default function HomePage({navigation}){
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text>
            
          </Text>
          <Image 
            source={require('../utils/placeholderlogo.png')}
            resizeMode='stretch'
          />
        </View>
        <View style={styles.footer}>
          <Text>
            This is the footer.
          </Text>
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
      paddingHorizontal:30
    },
    logo:{
      height:logo_height,
      width:logo_height,
    }
  });