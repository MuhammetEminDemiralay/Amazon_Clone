import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from "../../components/ProductItem"

import products from "../../data/products"

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
                keyExtractor={({id}) => id}
                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <ProductItem item={item} />

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
