import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import CategoryPage from './CategoryPage';

export default function LightProblemPage({navigation}){
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const categoryHandler = () =>{
        navigation.navigate('screen_category')
      }
      const addressHandler = () =>{
        navigation.navigate('screen_address')
      }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Selectează problema:
                </Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked1}
                onValueChange={setChecked1}
                color={isChecked1 ? "#9933ff" : undefined}
                disabled = {isChecked2 || isChecked3 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Lampă de iluminare defectă</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
                color={isChecked2 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked3 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Lampă de iluminare cazută</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked3}
                onValueChange={setChecked3}
                color={isChecked3 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked2 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Lampă de iluminare lipsă</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked4}
                onValueChange={setChecked4}
                color={isChecked4 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked3 || isChecked2 ? true : false}
                />
                <Text style={styles.paragraph}>Fire de curent căzute</Text>
            </View>
            
            <Pressable 
                onPress={categoryHandler}
                style = {styles.backButton}>
            <Text style = {styles.buttonText}>înapoi</Text>
            </Pressable>


            <Pressable style = {styles.forwardButton}
            onPress={addressHandler}>
                <Text style = {styles.buttonText}>înainte</Text>
            </Pressable>
        
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },

    problem_text:{
        marginTop: 100,
        marginBottom: 40,
        alignSelf: 'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

    backButton:{
        marginTop:180,
        marginLeft:15,
        marginRight:250,
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:6,
        elevation:3,
        backgroundColor:"#9933ff"
      },

      forwardButton:{
        marginTop: -50,
        marginLeft:250,
        marginRight:15,
        alignItems:'baseline',
        justifyContent:'flex-end',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:6,
        elevation:3,
        backgroundColor:"#9933ff"
      },
      
      buttonText:{
        color:"#fff", 
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20,
      },


      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
      },
      paragraph: {
        fontSize: 22,
      },
      checkbox: {
        margin: 40,
      }
})