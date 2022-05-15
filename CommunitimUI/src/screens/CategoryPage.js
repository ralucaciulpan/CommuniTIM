import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
export default function CategoryPage(){
    return (
        <View>
            <Text style={styles.category_text}>
                Selectează categoria:
            </Text>
        </View>



    )
}
const styles = StyleSheet.create({
    category_text:{
        marginTop: 90,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    }
});