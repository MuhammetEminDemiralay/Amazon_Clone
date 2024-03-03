import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';


const Stack = createStackNavigator();

const ShoppingCartStack = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                options={{ title: "Shopping cart" }}
                component={ShoppingCartScreen}
                name='cart' />
            <Stack.Screen
                options={{ title: "Address" }}
                component={AddressScreen}
                name='Address' />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack
