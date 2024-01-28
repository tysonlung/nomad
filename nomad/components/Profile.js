import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Nav from "./Nav";

export default function Profile({ navigation }) {
  // Check if route.params is defined

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your profile page{"\n"}</Text>
      <Nav navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});