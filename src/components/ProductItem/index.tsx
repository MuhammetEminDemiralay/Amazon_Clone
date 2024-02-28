import React from 'react'
import { View, Text, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'

interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number
    };
}

const ProductItem = ({ item }: ProductItemProps) => {

    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <View style={styles.raitingsContainer}>
                        {
                            [0, 0, 0, 0, 0,].map((el, i) => (
                                <FontAwesome
                                key={`${item.id}-${i}`}
                                    name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                    size={18}
                                    color="#e47911" />
                            ))
                        }
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from {item.price}
                        {
                            item.oldPrice &&
                            <Text style={styles.oldPrice}>$17.201</Text>
                        }
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductItem
