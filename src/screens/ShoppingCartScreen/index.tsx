import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import Button from "../../components/Button"
import products from "../../data/cart"
import { useNavigation } from '@react-navigation/native'


const ShoppingCartScreen = () => {

    const totalPrice = products.reduce(
        (summedPrice, product) =>
            (summedPrice + product.item.price + product.quantity), 0);
    const navigation = useNavigation();

    const onCheckout = () => {
        navigation.navigate('Address')
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <CartProductItem key={index} cartItem={item} />
                }
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Subtotal ({products.length}) items :
                            <Text style={{ color: '#e47911' }}>${totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button text='Proceed to checkout'
                            onPress={onCheckout}
                            containerStyle={{ backgroundColor: "#f7e300", borderColor: '#c7b702' }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default ShoppingCartScreen


const styles = StyleSheet.create({
    page: {
        marginTop: 25,
        padding: 5
    }
})
