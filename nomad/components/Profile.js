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
      imageuri: "~/assets/arcdetriumph.png",
    },
    {
      user: "Alice Smith",
      description: "Visiting the Concord!",
      coords: "48.8588° N, 2.2944° E",
      likes: 0,
      imageuri: "../assets/concord.webp",
    },
    {
      user: "Bob Johnson",
      description: "Eiffel Tower views!",
      coords: "48.8584° N, 2.2945° E",
      likes: 0,
      imageuri: "../assets/etower.png",
    },
    {
      user: "Eva Williams",
      description: "Grand Palais architecture!",
      coords: "48.8661° N, 2.3125° E",
      likes: 0,
      imageuri: "../assets/grandpalais.png",
    },
    {
      user: "Michael Brown",
      description: "Louvre Museum wonders!",
      coords: "48.8606° N, 2.3376° E",
      likes: 0,
      imageuri: "../assets/louvre.png",
    },
    {
      user: "Sophie Davis",
      description: "Opera Garnier elegance!",
      coords: "48.8718° N, 2.3311° E",
      likes: 0,
      imageuri: "../assets/operagarnier.png",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your profile page{"\n"}</Text>
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