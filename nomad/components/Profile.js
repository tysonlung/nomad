import React from 'react';
import { View, Text, StyleSheet, Image , ScrollView} from 'react-native';
import Nav from "./Nav";
import Post from "./Post";

export default function Profile({ navigation }) {
  // Check if route.params is defined
  const postList = [
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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back John Doe{"\n"}</Text>
      <ScrollView>
        {postList.map((post, index) => (
          console.log(post),
          <Post key={index} post={post} />
        ))}
      </ScrollView>
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