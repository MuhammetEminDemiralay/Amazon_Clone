import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from '../../components/Button';
import { signOut } from 'aws-amplify/auth'

const MenuScreen = () => {

    return (
        <SafeAreaView>
            <Button text='Sing out' onPress={signOut} />
        </SafeAreaView>
    )
}

export default MenuScreen
