import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from "../../components/ProductItem"
import products from "../../data/products"
import { DataStore } from '@aws-amplify/datastore'
import { Product } from '../../models'


const HomeScreen = ({ searchValue }: { searchValue: string }) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     const result = await DataStore.query(Product);
        //     setProducts(result)
        // }
        // fetchData()

        DataStore.query(Product).then(setProducts)
    }, [])

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
