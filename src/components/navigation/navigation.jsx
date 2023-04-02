import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../../screens/home/home.screen';
import { SettingsScreen } from '../../screens/Settings/settings.screen';
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Home: "md-home",
  Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'darkred',
    tabBarInactiveTintColor: 'darkblue',    
  };
};

export const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = { createScreenOptions } >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}