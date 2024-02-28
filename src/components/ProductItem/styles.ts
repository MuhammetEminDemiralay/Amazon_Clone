import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%',
        margin : 5
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'cover'
    },
    rightContainer: {
        padding: 10,
        width: '100%',
        flex: 3
    },
    title: {
        fontWeight: '600',
        fontSize: 18
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
    raitingsContainer: {
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center'
    },
})


export default styles