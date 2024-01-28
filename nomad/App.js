import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraComponent from './components/Camera';
import Profile from './components/Profile'; // Make sure you have the correct path to the Profile component
import Explore from './components/Explore'; // Make sure you have the correct path to the Explore component
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav.js';
import Gallery from './components/Gallery.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Camera" component={CameraComponent} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
