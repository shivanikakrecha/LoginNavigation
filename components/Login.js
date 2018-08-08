import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; //install package
import { View, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield'; //install package
import StyleSheet from "../static/css/common";


export default class LoginScreen extends React.Component {

    static navigationOptions =  {
        //set title on phonescreen on the top view.
        title: 'LoginDemo',
    };

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: '',
            name: ''
        }
    }

    changePwdType = () => {
        /*for icon eye in the password field when we click on this its toggle value of password
        property with the hide and show. */
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true,

            }
        }
        // set new state value
        this.setState(newState)

    };

    validateEmptyFiled = () => {
        //check field is empty or not.
        const { name } = this.state;
        const { password } = this.state;

        if ( name === '' || password === ''){
            alert("fill field")
        }

        else {
            //it can navigate with second screen on click login button event.
            this.props.navigation.navigate('Second');
        }

    }

    render() {
        return (
            <View>
                <View>
                    <TextField
                        label='Name'
                        onChangeText={name => this.setState({name})}

                    />
                </View>
                <View>
                    <TextField {...this.props}
                               onChangeText={password => this.setState({password})}
                               // secureTextEntry={this.state.password} // this will be set value of password which we initialized into state.
                    />
                    /* It shows the EYE icon with the password field. */
                    <Icon style={StyleSheet.icon}
                          name={this.state.icEye}
                          size={this.props.iconSize}
                          color={this.props.iconColor}
                          onPress={this.changePwdType}/>
                </View>
                <Button title="LOGIN" onPress={ this.validateEmptyFiled }/>

            </View>
        );
    }
}


LoginScreen.defaultProps = {
    iconSize: 25,
    label: 'Password',
    iconColor: '#1696DB'
};
/*
LoginScreen.defaultProps = {
    // here LoginScreen is the name of this class.
    iconSize: 25,
    label: 'Password',
};

You can use this method too. While you wanna use this method you have to declare its like
 <TextField {...this.props} secureTextEntry={this.state.password}/>
 using {...this.props} dont need to declare manually lable.
*/
