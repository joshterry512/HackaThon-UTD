import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';
import {createAppContainer, createSwitchNavigator } from 'react-navigation' ;
import firebase from 'firebase' ;
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig)


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{color: '#888', fontSize: 18}}>
        Hello World
      </Text>
    </View>
  );
 //return <AppNavigator />;
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
