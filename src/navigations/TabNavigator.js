/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult/index';
// import SearchResultsMap from '../screens/SearchResultsMap';
import MapScreen from '../screens/MapScreen/index';
import { useRoute } from "@react-navigation/native";
import dummyData from '../assets/dummyData/feed';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = (props) => {



    //   useEffect(() => {
    //     const fetchPosts = async () => {
    //       try {

    //         const postsResult = await API.graphql(
    //           graphqlOperation(listPosts, {
    //             filter: {
    //               and: {
    //                 maxGuests: {
    //                   ge: guests
    //                 },
    //                 latitude: {
    //                   between: [
    //                     viewport.southwest.lat,
    //                     viewport.northeast.lat,
    //                   ],
    //                 },
    //                 longitude: {
    //                   between: [
    //                     viewport.southwest.lng,
    //                     viewport.northeast.lng,
    //                   ],
    //                 }
    //               }
    //             }
    //           })
    //         )

    //         setPosts(postsResult.data.listPosts.items);
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     }

    //     fetchPosts();
    //   }, [])

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#755ED2',
                tabBarIndicatorStyle: {
                    backgroundColor: '#755ED2',
                },
                swipeEnabled: false,
            }}
        >
            <Tab.Screen name={"list"} component={SearchResult} />
            <Tab.Screen name={"map"} component={MapScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
