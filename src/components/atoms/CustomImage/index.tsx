import React, { FC, ReactElement } from 'react'
import {
  Image,
  View
} from 'react-native';
import IconButton from 'components/atoms/IconButton'

type CustomImageProps = {
    src: any,
    withFavorite: boolean,
    style: object,
    containerStyle: object,
}

const CustomImage: FC<CustomImageProps> = ({ src, withFavorite, style, containerStyle}): ReactElement => {
  let isFavorite = false;

  const addFavorite = (src: string): void => {
  }
  const removeFavorite = (src: string): void => {
  }

  return (
    <View style={containerStyle}>
      <Image
          source={src}
          style={style}
      />
      {
        withFavorite && (
            <IconButton 
                handleOnPress= {() => {
                    if (isFavorite) removeFavorite(src);
                    else addFavorite(src);
                }} 
                style={{ position: 'absolute', top: 10, right: 10 }}
                iconSize={32}
                iconColor={'black'}
                iconName={isFavorite?'ios-heart':'heart-outline'}
            />
        )
      }
    </View>
  )
};
export default CustomImage;