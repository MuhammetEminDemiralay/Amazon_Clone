import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import styles from "./styles"
import product from "../../data/product"
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify/datastore'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { CartProduct, Product } from '../../models'

const ProductScreen = () => {

    const [selectOption, setSelectOption] = useState<string | undefined>(undefined);
    const [quantity, setQuantity] = useState(1)
    const route = useRoute();
    // console.log(route.params)
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const navigation = useNavigation();
    useEffect(() => {
        if (!route.params?.id) {
            return
        }
        DataStore.query(Product, route.params.id).then(setProduct)
    }, [route.params?.id])


    useEffect(() => {
        if (product?.options) {
            setSelectOption(product.options[0]);
        }
    }, [product])

    if (!product) {
        return (
            <ActivityIndicator />
        )
    }

    const onAddToCart = async () => {

        const userData = fetchUserAttributes();

        if (!product || !userData) {
            return;
        }

        const newCartProduct = new CartProduct({
            userSub: '123456789123456789',
            quantity,
            option: selectOption,
            productID: product.id,
        });

        await DataStore.save(newCartProduct);
        navigation.navigate('Shooping');
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ padding: 10, marginTop: 25 }}>
            <Text style={styles.title}>{product.title}</ Text>
            <ImageCarousel images={product.images} />
            <Picker
                selectedValue={selectOption}
                onValueChange={(itemValue) =>
                    setSelectOption(itemValue)
                }
            >
                {
                    product.options.map((option, index) => (
                        <Picker.Item label={option} value={option} key={index} />
                    ))
                }
            </Picker>

            <Text style={styles.price}>
                from {product.price?.toFixed(2)}
                {
                    product.oldPrice &&
                    <Text style={styles.oldPrice}>{product.oldPrice.toFixed(2)}</Text>
                }
            </Text>
            <Text style={styles.description}>
                {
                    product.description
                }
            </Text>
            <View>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
            <Button containerStyle={{ backgroundColor: '#e3c905' }} text={"Add To Cart"} onPress={onAddToCart} />
            <Button text={"Buy Now"} onPress={() => { console.warn("Buy now") }} />
        </ScrollView>
    )
}

export default ProductScreen
