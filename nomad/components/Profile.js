import React from 'react';
import { View, Text, StyleSheet, Image , ScrollView} from 'react-native';
import Nav from "./Nav";
import Post from "./Post";
export const profilePosts = [
    {
      user: "John Doe",
      description: "Exploring the Arc de Triomphe!",
      coords: "48.8738° N, 2.2950° E",
      likes: 0,
      imageuri: "arcdetriumph.png",
    },
    {
      user: "John Doe",
      description: "Visiting the Concord!",
      coords: "48.8588° N, 2.2944° E",
      likes: 0,
      imageuri: "concord.png",
    },
    {
      user: "John Doe",
      description: "Eiffel Tower views!",
      coords: "48.8584° N, 2.2945° E",
      likes: 0,
      imageuri: "etower.jpeg",
    },
    {
      user: "John Doe",
      description: "Grand Palais architecture!",
      coords: "48.8661° N, 2.3125° E",
      likes: 0,
      imageuri: "grandpalais.png",
    },
   
    {
      user: "John Doe",
      description: "Opera Garnier elegance!",
      coords: "48.8718° N, 2.3311° E",
      likes: 0,
      imageuri: "operagarnier.png",
    },
  ];
export default function Profile({ navigation }) {
  // Check if route.params is defined
  
  return (
    <View style={styles.container}>
      {/* Profile Photo and Name */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/John_Doe.png')} // Replace with the actual path
          style={styles.profileImage}
        />
        <Text style={styles.text}>John Doe</Text>
      </View>

      {/* Posts */}
      <ScrollView>
        {profilePosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>

      {/* Navigation Bar */}
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});