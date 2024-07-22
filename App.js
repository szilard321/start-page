import React, { useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import { Video } from 'expo-av';

export default function App() {
  const videoRef = useRef(null);

  
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
if (!fontsLoaded) {
    return null; 
  }

  const background = require('./assets/myvideo.mp4');

    const handleLoad = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.playAsync();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={background}
          ref={videoRef}
          useNativeControls={false}
          resizeMode="cover" 
          isLooping={true} 
          onLoad={handleLoad} 
          style={styles.backgroundVideo}
        />
      </View>
      <View style={styles.overlayContainer}>
        <View style={styles.header}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Button pressed")}>
              <Text style={styles.textFont2}>Log</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.textFont1}>Sample</Text>
          <Text style={styles.welcome}>Welcome!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject, 
    zIndex: -1, 
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: '6%',
    paddingRight: '5%',
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFont1: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 20,
    textAlign: 'center',
    color: 'yellow',
  },
  textFont2: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 20,
    textAlign: 'center',
    color: 'yellow',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  welcome: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'yellow',
  }
});
