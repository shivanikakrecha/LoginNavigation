import React, { Component } from 'react';
import {View, Text, ListView } from 'react-native';
import StyleSheet from "../css/innercss"

export default class ClickedItem extends Component
{
    static navigationOptions =
        {
            title: 'Selected Item'
        };

    render()
    {
        return(
            <View style = { StyleSheet.container2 }>
                /* here we get clicked item from the renderlist tems */
                <Text style = { StyleSheet.text }>You Selected: { this.props.navigation.state.params.item }</Text>
            </View>
        );
    }
}

