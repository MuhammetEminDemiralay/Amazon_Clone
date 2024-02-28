import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"
import product from "../../data/product"
import { Picker } from '@react-native-picker/picker'

const index = () => {

    const [selectOption, setSelectOption] = useState(product.options ? product.options[0] : null)

    console.log(selectOption);


    return (
        <View>
            <Text style={styles.title}>{product.title}</Text>

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
        </View>
    )
}

export default index
