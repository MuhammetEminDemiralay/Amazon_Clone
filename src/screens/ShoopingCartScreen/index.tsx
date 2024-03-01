import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import Button from "../../components/Button"

import products from "../../data/cart"
import product from '../../data/product'

const ShoopingCartScreen = () => {

    const totalPrice = products.reduce(
        (summedPrice, product) =>
            (summedPrice + product.item.price + product.quantity), 0);
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
                            onPress={() => console.warn("Go to checkouy")}
                            containerStyle={{ backgroundColor: "#f7e300", borderColor: '#c7b702' }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default ShoopingCartScreen


const styles = StyleSheet.create({
    page: {
        marginTop: 25,
        padding: 5
    }
})
