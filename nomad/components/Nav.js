// Nav.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Nav = ({ navigation }) => {
  const navigateToCamera = () => {
    navigation.navigate('Camera');
  };

  const navigateToExplore = () => {
    navigation.navigate('Explore'); // Replace 'Home' with the actual name of your home screen
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Replace 'Profile' with the actual name of your profile screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_container} onPress={navigateToExplore}>
        <Entypo style={styles.icons} name="magnifying-glass" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon_container} onPress={navigateToCamera}>
        <AntDesign style={styles.icons} name="camerao" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon_container} onPress={navigateToProfile}>
        <AntDesign style={styles.icons} name="home" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 4,
  },
  icons: {
    width: 50,
    margin: 5,
    alignItems: 'center',
  },
  icon_container: {
    alignItems: 'center',
  },
});

export default Nav;
