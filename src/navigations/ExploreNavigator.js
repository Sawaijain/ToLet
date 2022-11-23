/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';
import AccountScreen from '../screens/AccountScreen/index';
import TabNavigator from './TabNavigator';
import SearchResult from '../screens/SearchResult/index';
import MapScreen from '../screens/MapScreen';
// import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'SearchResults'}
                component={TabNavigator}
                options={{
                    headerShown: false,
                    // headerTitleAlign: 'left',
                    // headerStyle: {
                    //     backgroundColor: '#b948d9',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                    // title: 'Search your destination',
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;