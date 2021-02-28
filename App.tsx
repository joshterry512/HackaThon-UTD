import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, Button, View, Alert, Image, SafeAreaView} from 'react-native';
import wavelogo from './assets/images/wavelogo.png';
import { useFonts } from 'expo-font';
import backgroundlogin from './assets/images/backgroundlogin.png';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.container}>
        <Image source={wavelogo}  style={styles.image} resizeMode = {"cover"}
        /> 
        <Text style ={styles.text1}>Welcome to WaveRider.</Text>
        <Text style ={styles.text2}>To make things easier for you, we'll link WaveRider to your Spotify account.
        Happy listening! </Text>
        </View>
        <Button title = "Login with Spotify" onPress = {() => Alert.alert('Button pressed')}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    height : 50,
    width : 305,
    position: 'absolute',
      top: 125
  },
  text1 : {
    color: '#ffff',
    fontFamily: 'System',
    fontWeight: '700',
    fontStyle: 'italic',
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200,
    position: 'absolute',
      top: 15
  },
  text2 : {
    color: '#ffff',
    fontFamily: 'System',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:234,
    marginLeft: 50,
    marginRight:50,
    position: 'absolute',
      top: 15
  },
  title: {
    textAlign: 'center',
    alignItems: 'flex-end',
    marginVertical: 8,
    marginBottom: '50',
    position: 'absolute',
      top: '5'
  },
});