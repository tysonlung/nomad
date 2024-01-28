import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Nav from './Nav';
import Post from './Post';
export const explorePosts = [
  {
    user: "Chili",
    description: "Enjoying a spicy day! 🔥 #SpicyLife",
    coords: "30.6280° N, 96.3344° W",
    likes: 0,
    imageuri: "chili.png", // Replace with the actual image URI
  },
  {
    user: "Dixie",
    description: "Country vibes in Dixie! 🤠 #SouthernCharm",
    coords: "30.6280° N, 96.3344° W",
    likes: 0,
    imageuri: "dixie.png", // Replace with the actual image URI
  },
  {
    user: "Zach",
    description: "Exploring the city with Zach! 🏙️ #UrbanExplorer",
    coords: "30.6280° N, 96.3344° W",
    likes: 0,
    imageuri: "zach.png", // Replace with the actual image URI
  },
  {
    user: "Zilker",
    description: "Beautiful day at Zilker Park! 🌳 #NatureLover",
    coords: "30.2672° N, 97.7431° W",
    likes: 0,
    imageuri: "zilker.png", // Replace with the actual image URI
  },
];



export default function Explore({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>This is the explore page</Text>
      <Text style={styles.text}>user submitted landmarks near you{"\n"}</Text>
      <ScrollView>
        {explorePosts.map((post, index) => (
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
  header: {
  fontSize: 24,
  }
});
