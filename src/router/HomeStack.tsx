import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
interface HeaderComponenetProps {
    searchValue: string;
    setSearchValue: () => void;
}

const HeaderComponent = ({ searchValue, setSearchValue }: HeaderComponenetProps) => {
    return (
        <SafeAreaView style={{
            backgroundColor: 'skyblue',

        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="search" size={20} color="black" />
                <TextInput
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder='Seacrh'
                    style={{
                        width: '100%',
                        margin: 10,
                        padding: 5,
                        backgroundColor: '#fff',
                        height: 40,
                    }} />
            </View>
        </SafeAreaView>
    )
}


const HomeStack = () => {

    const [searchValue, setSearchValue] = useState();

    return (

        <Stack.Navigator
            screenOptions={{
                header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
            }}
        >
            <Stack.Screen
                options={{ title: "Home" }}
                name='HomeScreen'>
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            <Stack.Screen
                component={ProductScreen}
                name='ProductDetails' />
        </Stack.Navigator>
    )
}

export default HomeStack
