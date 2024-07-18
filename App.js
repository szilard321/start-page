import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function App() {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.textFont1} onPress={()=>Alert.alert("apasat")}>log</Text>
      </Pressable>
      </View>
      <View>
        <Text style={styles.textFont1}>Sample Ceva</Text>
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
  buttonContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    paddingTop: '6%',
  },
  buttonText: {
    color: 'black', 
  },
  textFont1: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'yellow',
  },
  welcome:{
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'yellow',
    paddingLeft:'7.5%',
   paddingTop: '95%'
  }
});
