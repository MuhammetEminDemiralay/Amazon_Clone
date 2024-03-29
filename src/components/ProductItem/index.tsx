import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ProductDetails', {id : item.id});
    }

    return (
        <Pressable onPress={onPress}>
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
                        <Text>{item.ratings.toFixed(0)}</Text>
                    </View>
                    <Text style={styles.price}>
                        from {item.price.toFixed(2)}
                        {
                            item.oldPrice &&
                            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
                        }
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ProductItem
