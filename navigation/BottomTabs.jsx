import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QRscreen from '../screens/QRscreen';
// import Icon from '@react-native-vector-icons/ant-design'
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        display: 'flex',
        position: 'absolute',
        bottom: 20,
        left: 25,
        right: 25,
        elevation: 5,
        backgroundColor: '#5856D6',
        borderRadius: 25,
        height: 50,
      },
      tabBarShowLabel: false,
      headerShown: false,

      //routing icons for each screen
      tabBarIcon: ({ focused }) => {
        let iconName;
  
        // Dynamically set the icon based on the route name
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'QR') {
          iconName = 'checkcircle';
        } else if (route.name === 'Chat') {
          iconName = 'wechat';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
  
        return (
          <Icon
            name={iconName}
            size={25}
            color={focused ? 'white' : '#9594e5'}
          />
        );
      },

      
    })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='QR' component={QRscreen}/>
        <Tab.Screen name='Chat' component={ChatScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})