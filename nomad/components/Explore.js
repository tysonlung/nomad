import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function Explore({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>You fuckin suck</Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
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
