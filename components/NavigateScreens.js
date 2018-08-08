import React  from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./home";
import LoginScreen from "./Login";
import ListviewScreen from "./ListDemo/listscreen";


var NavigateScreens;
export default NavigateScreens = createStackNavigator(
    //create navigation screens
    {
        First: { screen: LoginScreen },//for main screen we have used first. Here its only type of variable.
        Second: { screen: HomeScreen },//second screen reference
        List : {screen: ListviewScreen} //using for navigate internal navigation for listview component.
    });

