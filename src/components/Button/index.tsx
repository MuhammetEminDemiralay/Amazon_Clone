import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
    text: string,
    onPress: () => void;
    containerStyle? : object;
}

const Button = ({ text, onPress, containerStyle }: ButtonProps) => {
    return (
        <Pressable style={[styles.root, containerStyle]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    root : {
        alignItems :'center',
        justifyContent : 'center',
        backgroundColor : '#e47911',
        marginVertical : 10,
        height : 35,
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#000814'
    },
    text : {
        fontSize : 16,
        fontWeight : '500'
    }
})