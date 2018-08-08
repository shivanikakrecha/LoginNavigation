import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container1:
        {
            flex: 1
        },

    container2:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15
        },

    item:
        {
            padding: 15
        },

    text:
        {
            fontSize: 15
        },

    separator:
        {
            height: 2,
            backgroundColor: 'rgba(0,0,0,0.5)'
        }

});
