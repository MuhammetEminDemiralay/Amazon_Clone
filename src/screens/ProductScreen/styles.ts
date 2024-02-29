import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root : {
        padding : 10,
        backgroundColor : '#fff'
    },
    title : {

    },
    price: {
        fontWeight: '500',
        fontSize: 18
    },
    oldPrice: {
        fontWeight: "normal",
        fontSize: 12,
        textDecorationLine: 'line-through'
    },
    description : {
        marginVertical : 10,
        lineHeight : 20
    }
})

export default styles;