import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile({ route }) {
  const { capturedImages } = route.params;

  return (
    <View style={styles.container}>
      <Text style = {styles.text}> This is your profile page{"\n"} </Text>

      <Text style={styles.text}>Captured Images:</Text>
      <View>
        {capturedImages.map((image, index) => (
          <View key={index} style={styles.imageItem}>
            <Text style={styles.imageText}>{image.filename}</Text>
            <Image source={{ uri: image.uri }} style={styles.capturedImage} />
          </View>
        ))}
      </View>
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
  imageItem: {
    marginBottom: 20,
  },
  imageText: {
    fontSize: 16,
    marginBottom: 5,
  },
  capturedImage: {
    width: 100,
    height: 100,
  },
});
