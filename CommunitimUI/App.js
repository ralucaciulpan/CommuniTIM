import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import CategoryPage from './src/screens/CategoryPage';
import ActionPage from './src/screens/ActionPage';
import ProblemPage from './src/screens/ProblemPage';
import LightProblemPage from './src/screens/lightProblemPage';
import OtherProblemPage from './src/screens/OtherProblemPage';
import AddressPage from './src/screens/AddressPage';
import MapPage from './src/screens/MapPage';
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
        name="screen_home"
        component = {HomePage}
       />
         <Stack.Screen
        name="screen_address"
        component={AddressPage}
       />
         <Stack.Screen 
        name="screen_map"
        component = {MapPage}
       />
         <Stack.Screen
        name="screen_category"
        component={CategoryPage}
       />
         <Stack.Screen
        name="screen_lightProblem"
        component={LightProblemPage}
       />

        <Stack.Screen
        name="screen_otherProblem"
        component={OtherProblemPage}
       />

      <Stack.Screen
        name="screen_problem"
        component={ProblemPage}
       />

       <Stack.Screen
        name="screen_action"
        component={ActionPage}
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

