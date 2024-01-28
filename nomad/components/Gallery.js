import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Nav from "./Nav";




export default function Profile({ route }) {
  // Check if route.params is defined
  if (!route.params) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: Route parameters not available.</Text>
      </View>
    );
  }

  const { capturedImages } = route.params;

  // Check if capturedImages is defined
  if (!capturedImages) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: Captured Images not available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Captured Images: {"\n"}</Text>
      <ScrollView>
        {capturedImages.map((image, index) => (
          <View key={index} style={styles.imageItem}>
            <Text style={styles.imageText}>{image.filename}</Text>
            <Image source={{ uri: image.uri }} style={styles.capturedImage} />
          </View>
        ))}
      </ScrollView>
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