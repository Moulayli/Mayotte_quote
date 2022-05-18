import * as React from 'react';
import { Button, View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer ,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {  MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import HomeScreen from './componant/HomeScreen';
import DetailsScreen from './componant/DetailsScreen';
import ApropoScreen from './componant/ApropoSrceen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#726665',
    background: '#ffebbe',
    card: '#ffebbe',
    text: '#aa8c60',
    border: '#726665',
    notification: '#DEDCE2',
    //primary: 'black',
    //background:'yellow',

  }
};


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer  theme={MyTheme} >
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Citation" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Partager une citation " component={DetailsScreen} 
         options={{
          tabBarLabel: 'Contribution',
          tabBarIcon: ({color}) => (
            <AntDesign name="clouduploado" size={26} color={color} />
          ),
        }} />
        <Tab.Screen name="À propos" component={ApropoScreen} 
         options={{
          tabBarLabel: 'Infos',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="info-circle" size={26} color={color} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#567d73',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;