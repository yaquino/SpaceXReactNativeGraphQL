import React, { FC, ReactElement } from 'react'
import { FlatList, View } from 'react-native';
import CustomImage from 'components/atoms/CustomImage';

type ImageCarouselProps = {
    images: any,
    style: object,
    withFavorite: boolean,
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images, style, withFavorite}): ReactElement => {
    return (
        <View style={style} >
<           FlatList
                data={images}
                style={{ flex: 1 }}
                renderItem={({ item }) => {
                    return (
                    <CustomImage
                        src={item}
                        withFavorite={withFavorite}
                        style={{ height: 300, width: 300 }} 
                        containerStyle={{}}                
                    />)
                }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
            />  
        </View>
    )
};
export default ImageCarousel;