import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from "./styles"
import product from "../../data/product"
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import { useRoute } from '@react-navigation/native'


const ProductScreen = () => {

    const [selectOption, setSelectOption] = useState(product.options ? product.options[0] : null)
    const [quantity, setQuantity] = useState(1)
    const route = useRoute();
    console.log(route.params)


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
                from {product.price}
                {
                    product.oldPrice &&
                    <Text style={styles.oldPrice}>$17.201</Text>
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
            <Button containerStyle={{ backgroundColor: '#e3c905' }} text={"Add To Cart"} onPress={() => { console.warn("Add to cart") }} />
            <Button text={"Buy Now"} onPress={() => { console.warn("Buy now") }} />
        </ScrollView>
    )
}

export default ProductScreen
