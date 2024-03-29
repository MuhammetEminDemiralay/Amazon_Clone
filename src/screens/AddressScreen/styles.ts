import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root : {
        padding : 10
    },
    row : {
        marginVertical : 5
    },
    label : {
        fontSize : 15,
        fontWeight : '600'
    },
    input : {
        borderWidth : 1,
        borderColor :  "black",
        backgroundColor : '#fff',
        padding : 5,
        borderRadius : 4,
        height : 35,
        marginVertical : 5
    },
    errorLabel : {
        color : 'red'
    }
})

export default styles;