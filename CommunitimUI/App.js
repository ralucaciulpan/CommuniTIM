import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
const Stack = createStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
        name="screen_home"
        component = {HomePage}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

