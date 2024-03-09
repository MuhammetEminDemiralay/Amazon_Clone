import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from "../../components/ProductItem"
import products from "../../data/products"
import { Product } from '../../models'


const HomeScreen = ({ searchValue }: { searchValue: string }) => {

    const [products, setProducts] = useState<Product[]>([]);


    return (

        <View style={styles.page}>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <ProductItem key={index} item={item} />
                }
            />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
})
