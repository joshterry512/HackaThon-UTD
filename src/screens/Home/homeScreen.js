import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';

import authHandler from "../../utils/authenticationHandler";

class HomeScreen extends Component {
    state = {  }
    render() {
        return (
            <View>
                <text>helloworld</text>
                <Button onPress={() => authHandler.onLogin()} title="Press to login"/>
            </View>
        );
    }
}

export default HomeScreen;