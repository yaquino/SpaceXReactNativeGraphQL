import React, { FC, ReactElement, useContext } from 'react'
import {
  Image,
  View
} from 'react-native';
import IconButton from 'components/atoms/IconButton'
import { FavoritesContext } from 'stores/favoritesContext'

type CustomImageProps = {
    src: any,
    withFavorite: boolean,
    style: object,
    containerStyle: object,
}

const CustomImage: FC<CustomImageProps> = ({ src, withFavorite, style, containerStyle}): ReactElement => {
  const userFavoritesContext = useContext(FavoritesContext);
  const favoritesList = userFavoritesContext.userFavoritesInfo.favoritesList;
  const isFavorite = favoritesList && favoritesList.length > 0 && favoritesList.find((f: string)=> f=== src);

  const addFavorite = (src: string): void => {
    userFavoritesContext.updateFavoritesInfo({
      type: 'SET_FAVORITES',
      payload: {
        favoritesList: [...favoritesList, src]
      }
    })
  }
  const removeFavorite = (src: string): void => {
    userFavoritesContext.updateFavoritesInfo({
      type: 'SET_FAVORITES',
      payload: {
        favoritesList: favoritesList.filter((f: string) => f !== src)
      }
    })
  }
  
  return (
    <View style={containerStyle}>
      {src && 
        <>
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
        </>
      }
    </View>
  )
};
export default CustomImage;