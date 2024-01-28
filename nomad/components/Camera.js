import React, { useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Circle from "react-native-vector-icons/Entypo"

export default function CameraComponent({ navigation, route }) {
  const username = "Temp"; // Assuming you receive the username as a parameter
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImages, setCapturedImages] = useState([]);
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      const location = await getLocation(); // Assuming you have a function to get the location

      // Format the filename
      const filename = `${username}-${location.latitude}-${location.longitude}.jpg`;

      setCapturedImages(prevImages => [...prevImages, { uri, filename }]);
    }
  };

  function toggleCameraType() {
    setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  }

  function exitCamera() {
    // Navigate to the Profile screen when the "Exit Camera" button is pressed
    navigation.navigate('Profile', { capturedImages });
  }

  function goToExplore() {
    // Navigate to the Explore screen
    navigation.navigate('Explore');
  }

  // Dummy function for getting location (replace with your actual implementation)
  const getLocation = async () => {
    return {
      latitude: 123.456, // Replace with the actual latitude
      longitude: 789.012, // Replace with the actual longitude
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainerTop}>
        <Button title="Go to Explore" onPress={goToExplore} />
      </View>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton} onPress={takePicture}>
          <Circle name="circle" size={65} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={exitCamera}>
            <Text style={styles.text}>Exit Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedImages.length > 0 && (
        <View style={styles.imageListContainer}>
          <FlatList
            horizontal
            data={capturedImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.imageItem}>
                <Image source={{ uri: item.uri }} style={styles.capturedImage} />
                {/* <Text style={styles.imageText}>{item.filename}</Text> */}
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainerTop: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end', // Align items to the bottom
      position: 'absolute',
      bottom: 20, // Adjust this value for vertical positioning
      left: 0,
      right: 0,
      margin: 20,
    },
    circleButton: {
      borderRadius: 50,
      padding: 20,
    },
    button: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: 5,
      padding: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    imageListContainer: {
      position: 'absolute',
      bottom: 120, // Adjust this value to avoid overlap
      left: 0,
      right: 0,
    },
    imageItem: {
      marginHorizontal: 5,
      alignItems: 'center',
    },
    capturedImage: {
      width: 100,
      height: 100,
      marginBottom: 5,
    },
    imageText: {
      fontSize: 12,
    },
  });
