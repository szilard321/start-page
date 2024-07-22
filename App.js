import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import Video from 'react-native-video';


export default function App() {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => Alert.alert("apasat")} >
          <Text style={styles.textFont2} >log</Text>
        </Pressable>
      </View>
    </View>
   
    <View style={styles.content}>
      <Text style={styles.textFont1}>Sample</Text>
      <Text style={styles.welcome}>Welcome!</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  },
  welcome: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'yellow',
    paddingLeft: '7.5%',
    paddingTop: '95%',
  },
  backgroundVideo: {
    width: '100%',
    height: 300,
  }
});
