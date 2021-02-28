import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyFavoriteMusicScreen from "../screens/MyFavoriteMusic/myFavoriteMusicScreen"
import MyProfileScreen from "../screens/MyProfile/myProfileScreen"

const Tab = createBottomTabNavigator();

export default function LoggedInNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My favorite music" component={MyFavoriteMusicScreen} />
        <Tab.Screen name="Profile" component={MyProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}