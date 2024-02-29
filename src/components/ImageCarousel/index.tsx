import React, { useCallback, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: string[] }) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const onFlatlistUpdate = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);

    return (
        <View style={styles.root}>
            <FlatList                
                data={images}
                renderItem={({ item, index}) => (
                    <Image key={index} style={[styles.image, { width: width - 40 }]} source={{ uri: item }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 20}
                snapToAlignment={'center'}
                decelerationRate={'normal'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
                
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View key={index} style={[styles.dot, { backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' }]} />
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel


const styles = StyleSheet.create({
    root: {

    },
    image: {
        height: 250,
        margin: 10,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 8
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: '#ededed',
        borderWidth: 1,
        borderColor: '#c9c9c9'
    }
})