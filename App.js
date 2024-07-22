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
      <View style={styles.overlayContainer} /*asta e pentru ca vid-ul sa fie in background*/ >     
        <View style={styles.header}> 
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Button pressed")}>
              <Text  /*pana aici e pentru buton, chenarul e strict pentru refrence */ style={styles.textFont2}>Head in!</Text>
            </Pressable >
          </View>
        </View >
        
        <View  style={styles.header}>
          <Text style={styles.textFont1}>pac-man?</Text>
          </View>
          <View style={styles.salut}>
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
    paddingTop: '15%',
    paddingRight: '5%',
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
  },
 
  textFont1: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 20,
   textAlign: 'left',
    color: 'yellow',
  },
  textFont2: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 15,
    textAlign: 'center',
    color: 'yellow',
  },
  salut: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '6%',
  },
  welcome: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'yellow',
  }
});
