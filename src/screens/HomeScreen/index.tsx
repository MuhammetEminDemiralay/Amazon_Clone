import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from "../../components/ProductItem"
import products from "../../data/products"
import auth from 'aws-amplify/auth'

const HomeScreen = ({ searchValue }: { searchValue: string }) => {



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
