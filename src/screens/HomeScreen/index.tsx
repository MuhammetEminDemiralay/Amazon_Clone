import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from "../../components/ProductItem"

import products from "../../data/products"

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList

                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item , index}) =>
                    <ProductItem key={index} item={item} />

                }
            />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})
