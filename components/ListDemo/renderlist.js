import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import StyleSheet from "../css/innercss"


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//create datasource for changedrow.

export default class RenderList extends Component
{
    static navigationOptions =
        {
            title: 'List Items'
        };

    constructor()
    {
        super();
        this.state = { dataSource: ds.cloneWithRows(['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September', 'October', 'November',
                'December', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday',
                'Sunday']) };
    }

    clickedItemText(clickedItemValue)
    {
        this.props.navigation.navigate('Item', { item: clickedItemValue });
    }

    render()
    {
        return(
            <View style = { StyleSheet.container1 }>
                <ListView
                    dataSource = { this.state.dataSource }
                    renderRow = {( rowData ) =>
                        <TouchableOpacity style = { StyleSheet.item } activeOpacity = { 0.4 } onPress = { this.clickedItemText.bind(this, rowData)}>
                            <Text style = { StyleSheet.text }>{ rowData }</Text>
                        </TouchableOpacity>
                    }
                    renderSeparator = {() =>
                        <View style = { StyleSheet.separator }/>
                    }/>
            </View>
        );
    }
}

