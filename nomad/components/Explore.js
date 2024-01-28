import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Nav from './Nav';

export default function Explore({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the explore page</Text>
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
});
