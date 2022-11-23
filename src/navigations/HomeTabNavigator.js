/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../screens/HomeScreen/index';
import WishlistScreen from '../screens/WishlistScreen/index';
import LoginScreen from '../screens/LoginScreen/index';
// import ProfileScreen from '../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AccountScreen from '../screens/AccountScreen/index';
import StatusScreen from '../screens/HostScreens/StatusScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { useSelector } from 'react-redux';

// import PostScreen from "../screens/PostScreen";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {

    const [isHost, setIsHost] = useState(true);
    const { theme } = useSelector(state => state.themeReducer);

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme ? '#fff' : "#f26389",
                tabBarActiveBackgroundColor: theme ? 'rgba(31, 29, 54,0.8)' : null,
                tabBarInactiveBackgroundColor: theme ? 'rgba(31, 29, 54,0.8)' : null,
                tabBarStyle: [
                    {
                        display: "flex",
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                name={'Explore'}
                component={ExploreNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="search" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Wishlist'}
                component={WishlistScreen}
                options={{
                    // headerShown: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme ? '#3D2C8D' : '#755ED2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    ),
                }}
            />
            {
                isHost ?
                    <Tab.Screen
                        name={' '}
                        component={StatusScreen}
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: theme ? '#3D2C8D' : '#755ED2',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerTitle: 'Hosted Room Details',
                            tabBarIcon: ({ color }) => (
                                <View style={{ borderRadius: 30, overflow: 'hidden', marginBottom: 32, backgroundColor: theme ? "#f0f0f0" : '#231E23', padding: 10, }}>
                                    <Image source={require('../assets/images/logo.png')}
                                        style={{
                                            width: 40,
                                            height: 40,
                                        }}
                                        resizeMode="center"
                                    />
                                </View>
                            ),
                        }}
                    />
                    : null
            }
            <Tab.Screen
                name={'Notification'}
                component={NotificationScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme ? '#3D2C8D' : '#755ED2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => (
                        <Feather name="message-square" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Account'}
                component={AccountScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme ? '#3D2C8D' : '#755ED2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ color }) => (
                        <EvilIcons name="user" size={25} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
};

export default HomeTabNavigator;
