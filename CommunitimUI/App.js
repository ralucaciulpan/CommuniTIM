import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import CategoryPage from './src/screens/CategoryPage';
import ActionPage from './src/screens/ActionPage';

const Stack = createStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions ={
         {
           headerShown:false
         }
       }>

         <Stack.Screen
        name="screen_category"
        component={CategoryPage}
       />
       
       <Stack.Screen
        name="screen_action"
        component={ActionPage}
       />

       <Stack.Screen 
        name="screen_home"
        component = {HomePage}
       />

      <Stack.Screen 
         name="screen_login"
         component={LoginPage}
       />

       <Stack.Screen
        name="screen_signup"
        component={SignupPage}
       />

  
     </Stack.Navigator>
   </NavigationContainer>
  );
}

