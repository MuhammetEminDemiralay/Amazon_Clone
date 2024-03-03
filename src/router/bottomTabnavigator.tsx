import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#ffbd7d',
                tabBarActiveTintColor: '#e47911'
            }}
        >
            <Tab.Screen
                name='home'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='ShoopingCart'
                component={ShoppingCartStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='More'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="more-horizontal" size={24} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNav
