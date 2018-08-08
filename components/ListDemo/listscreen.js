import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, ListView, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import RenderList from "./renderlist";
import ClickedItem from "./clickeditem";


var ListviewScreen;
export default ListviewScreen = createBottomTabNavigator({

    /*here navigation is for listview component when we click on list option we
     */
        List: { screen: RenderList,
            navigationOptions: () => ({
                tabBarLabel: 'Browse',
            })
        },
        Item: { screen: ClickedItem }
    },
    {
    tabBarPosition: 'top',
    tabBarOptions: {
        style: {
            padding: 15,
            marginTop: 15,
        },
        labelStyle: {
            fontSize: 16,
            marginTop: 0,
        },
    }});

