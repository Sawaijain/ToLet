/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearch from '../screens/DestinationSearch';
import GuestScreen from '../screens/GuestScreen';
import SearchResult from '../screens/SearchResult/index';
import HomeTabNavigator from './HomeTabNavigator';
import WishlistScreen from '../screens/WishlistScreen/index';
import SignUpScreen from '../screens/SignupScreen/index';
import LoginScreen from '../screens/LoginScreen/index';
import ProfileForm from '../components/ProfileForm/index';
import DescriptionScreen from '../screens/DescriptionScreen/index';
import HostDetail from '../screens/HostScreens/HostDetails/index';
import HelpScreen from '../screens/HelpScreen/index';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen/index';
import HostForm from '../screens/HostScreens/HostForm/index';
import StatusScreen from '../screens/HostScreens/StatusScreen';
import MapScreen from '../screens/MapScreen';
import PreviewScreen from '../screens/HostScreens/PreviewScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearch}
                    options={{
                        // headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "Search your destination"
                    }}
                />

                <Stack.Screen
                    name={"Guests"}
                    component={GuestScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "For how many days?"
                    }}
                />

                <Stack.Screen
                    name={"Post"}
                    component={SearchResult}
                    options={{
                        headerShown: false,
                        title: "Accommodation"
                    }}
                />
                <Stack.Screen
                    name={"SignupScreen"}
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"LoginScreen"}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"ProfileForm"}
                    component={ProfileForm}
                    options={{
                        headerShown: true,
                        title: 'Profile'
                    }}
                />
                <Stack.Screen
                    name={"DescriptionScreen"}
                    component={DescriptionScreen}
                    options={{
                        headerShown: true,
                        title: 'Description',
                    }}
                />
                <Stack.Screen
                    name={"HostDetailScreen"}
                    component={HostDetail}
                    options={{
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "Hosting your house!"
                    }}
                />
                <Stack.Screen
                    name={"HelpScreen"}
                    component={HelpScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "Help"
                    }}
                />
                <Stack.Screen
                    name={"SettingScreen"}
                    component={SettingScreen}
                    options={{
                        // headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "Setting"
                    }}
                />
                <Stack.Screen
                    name={"TermofServiceScreen"}
                    component={TermsOfServiceScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        title: "Terms of Service"
                    }}
                />
                <Stack.Screen
                    name={"HostFormScreen"}
                    component={HostForm}
                    options={{
                        headerStyle: {
                            backgroundColor: '#755ED2',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            // textTransform: 'uppercase',
                            fontWeight: '700',
                        },
                        title: "Fill out this Form"
                    }}
                />
                <Stack.Screen
                    name={"StatusScreen"}
                    component={StatusScreen}
                    options={{
                        headerShown: true,
                        title: 'Status',
                    }}
                />
                <Stack.Screen
                    name={"MapScreen"}
                    component={MapScreen}
                    options={{
                        headerShown: true,
                        title: 'Map',
                    }}
                />
                <Stack.Screen
                    name={"PreviewScreen"}
                    component={PreviewScreen}
                    options={{
                        headerShown: true,
                        title: 'Preview',
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
