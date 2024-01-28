import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{post.user}</Text>
        <Text style={styles.coords}>{post.coords}</Text>
      </View>
      <Text style={styles.description}>{post.description}</Text>
      <Image source={{ uri: post.imageuri }} style={styles.postImage} />
      <View style={styles.interactions}>
        <TouchableOpacity>
          <Text style={styles.likes}>{post.likes} Likes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212', // Dark mode background color
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    color: '#61dafb', // Twitter blue
    fontSize: 16,
    fontWeight: 'bold',
  },
  coords: {
    color: '#fff', // White color for coordinates
  },
  description: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    color: '#61dafb',
  },
});

export default Post;
