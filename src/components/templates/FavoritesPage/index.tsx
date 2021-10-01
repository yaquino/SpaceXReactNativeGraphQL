import React, {useContext} from 'react'
import { 
    StyleSheet,
    View,
    SectionList,
    SafeAreaView 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomImage from 'components/atoms/CustomImage';
import { FavoritesContext } from 'stores/favoritesContext';

const FavoritesPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d0e0e3',
    },
    sectionList: { paddingHorizontal: 10 },
    customImage: { flex: 1, borderRadius: 10, height: 340, width: 340, margin: 5 }
    });

const FavoritesPage = () => {
    const userFavoritesContext = useContext(FavoritesContext);
    const images = userFavoritesContext.userFavoritesInfo.favoritesList;

    const favoritesTitle=[{
        title: "Favorite Images Launches",
        data: images,
      }];

    return (
        <View style={FavoritesPageStyles.container}>
            <StatusBar style="light" />
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                    contentContainerStyle={FavoritesPageStyles.sectionList}
                    stickySectionHeadersEnabled={false}
                    sections={favoritesTitle}
                    renderItem={({ item }) => {
                        return (
                            <View style={FavoritesPageStyles.customImage}>
                                <CustomImage
                                    src={item}
                                    withFavorite={true}
                                    style={{ height: 340, width: 340 }} 
                                    containerStyle={{}}
                                />
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        </View>
      )

};
export default FavoritesPage;