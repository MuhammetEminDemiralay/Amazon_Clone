import React from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import Button from "../../components/Button"
import products from "../../data/cart"
import { useNavigation } from '@react-navigation/native'
import { CartProduct, Product } from '../../models'
import { useEffect, useState } from 'react'


const ShoppingCartScreen = () => {
    const navigation = useNavigation();
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])



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
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Subtotal ({cartProducts.length}) items :
                            {/* <Text style={{ color: '#e47911' }}>${cartProducts.totalPrice.toFixed(2)}</Text> */}
                        </Text>
                        <Button text='Proceed to checkout'
                            onPress={() => console.log()}
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
