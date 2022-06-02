import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import CategoryPage from './CategoryPage';
import axios from "axios";
export default function OthertProblemPage({navigation}){
    const category = "Altele";
    const [subcategory, setSubcategory] = useState("");
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [latitude,onChangeLatitude] = useState("");
    const [longitude,onChangeLongitude] = useState("");
    const categoryHandler = () =>{
        navigation.navigate('screen_category')
      }
      const addressHandler = () =>{
        navigation.navigate('screen_address')
      }

      const submitCredentials = async (event) =>{
        try {
          const response = await axios.post('http://192.168.1.193:8080/problems/add', {
            category:category,
            subcategory:subcategory,
            latitude:latitude,
            longitude:longitude
          });
          if (response.status === 200) {
            alert("You have posted the problem succesfully.");
            navigation.navigate('screen_home');
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
          alert(error);
        }
      };
      const lat=parseFloat(latitude);
      const lon=parseFloat(longitude);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.problem_text}>
                    Selectează problema și introdu adresa:
                </Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                onValueChange={()=>{isChecked1 ? setChecked1(false):setChecked1(true);isChecked1 ? setSubcategory("Capac de canal lipsa"): setSubcategory(""),console.log(subcategory)}}
                value={isChecked1}
                color={isChecked1 ? "#9933ff" : undefined}
                disabled = {isChecked2 || isChecked3 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Capac de canal lipsă</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                onValueChange={()=>{isChecked2 ? setChecked2(false):setChecked2(true);isChecked2 ? setSubcategory("Cade tencuiala"): setSubcategory(""),console.log(subcategory)}}
                value={isChecked2}
                color={isChecked2 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked3 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Cade tencuiala</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                onValueChange={()=>{isChecked3 ? setChecked3(false):setChecked3(true);isChecked3 ? setSubcategory("Trotuar spart"): setSubcategory(""),console.log(subcategory)}}
                value={isChecked3}
                color={isChecked3 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked2 || isChecked4 ? true : false}
                />
                <Text style={styles.paragraph}>Trotuar spart</Text>
            </View>

            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                onValueChange={()=>{isChecked4 ? setChecked4(false):setChecked4(true);isChecked4 ? setSubcategory("Copac căzut"): setSubcategory(""),console.log(subcategory)}}
                value={isChecked4}
                color={isChecked4 ? "#9933ff" : undefined}
                disabled = {isChecked1 || isChecked3 || isChecked2 ? true : false}
                />
                <Text style={styles.paragraph}>Copac căzut</Text>
            </View>

            <Text style = {styles.fieldText}>latitudine:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    onChangeText={onChangeLatitude}
                    value={latitude}
                    />
                </View>
                <Text style = {styles.fieldText}>longitudine:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    onChangeText={onChangeLongitude}
                    value={longitude}
                    />
                </View>
            
            <Pressable 
                onPress={categoryHandler}
                style = {styles.backButton}>
            <Text style = {styles.buttonText}>înapoi</Text>
            </Pressable>


            <Pressable style = {styles.forwardButton}
            onPress={submitCredentials}>
                <Text style = {styles.buttonText}>postează</Text>
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
        textAlign:'center',
        fontSize:35,
        fontWeight:'bold',
        color: "#9933ff"
    },

    backButton:{
        marginTop:80,
        marginLeft:15,
        marginRight:250,
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        paddingVertical:12,
        paddingHorizontal:25,
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
        paddingHorizontal:25,
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
        fontSize: 18
      },
      checkbox: {
        margin: 15
      },
      usernameField:{
        fontSize:20,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },

      passwordField:{
        fontSize:20,
        borderTopLeftRadius:50,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },

      usernameFieldContainer:{
        marginTop:15,
        marginLeft:20,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRadius:8,
        width:windowWidth-50,
        height:50,
        marginBottom:-15,
        borderColor:'#696969'
    },

    fieldText:{
        marginLeft:20,
        marginTop: 60,
        color:'#696969',
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
        alignSelf: 'flex-start'
      }
})