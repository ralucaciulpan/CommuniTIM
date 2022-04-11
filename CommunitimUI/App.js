import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA(){
  return(
    <View>
      <Text>
        Screen A
      </Text>
    </View>
  )
}
export default function App() {
  return (
   <NavigationContainer>
      <StackNavigator>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        />
      </StackNavigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
