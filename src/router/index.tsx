import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabnavigator';

const Root = createStackNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen component={BottomTabNav} name='HomeTabs' />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator
