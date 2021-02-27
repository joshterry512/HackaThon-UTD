import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from "react-native";
import firebase from 'firebase';

class LoadingScreen extends Component {
    
    firebase.auth().onAuthStateChanged(function(user)
    {
        //if the user is authenticated then take the user to the login screen
        if(user) 
        {
            this.props.navigate('DashboardScreen');
        }
        else
        {
            this.props.navigation.navigate('LoginScreen');
        }
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    }
)