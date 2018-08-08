import React from 'react';
import { View, Button, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions =  {
        //set title on phonescreen on the top view.
        title: 'HomeScreen',
    };
    render(){
        return(
            <View>
                <Text>Hello</Text>
                <Button title="ListView" onPress={ () => {this.props.navigation.navigate('List')}}/>
                /* On press event it navigate the list variable which is declared in the
                 NavigateScreen.js */
            </View>
        )
    }

}
