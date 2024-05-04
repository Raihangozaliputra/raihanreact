import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profil from './screens/Profil';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from './screens/Contact';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Tab.Navigator>
      <Tab.screens name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
      <Tab.screens name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      
      }} />

     <Tab.screens name='Contact' component={Contact} options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={26} />
          ),
      
      }} />

    </Tab.Navigator>
   </NavigationContainer>

);
};
  

export default App

const styles = StyleSheet.create({});