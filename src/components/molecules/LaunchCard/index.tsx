import React, { FC, ReactElement } from 'react'
import { StyleSheet, View, Button } from "react-native";
import CustomImage from 'components/atoms/CustomImage'
import CustomText from 'components/atoms/CustomText'

type LaunchCardProps = {
    launch: any,
    navigation: any,
}

const LaunchCardStyles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 },
    contentContainer: { backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" },
    imageRow: { flex: 1, flexDirection: "row" },
    
        imageContainer: { height: 150, width: 155 },
        imageStyle: { height: 150, width: 155 }
    

  });

const LaunchCard: FC<LaunchCardProps> = ({ launch, navigation }): ReactElement => {
    const missionName= launch.mission_name;
    const launchDate= launch.launch_date_local;
    const images = launch.links && launch.links.flickr_images;

    return (
        <View style={LaunchCardStyles.container}>
            <View style={LaunchCardStyles.contentContainer}>
                <View style={LaunchCardStyles.imageRow}>
                    {images && images.length > 0 && (
                        <CustomImage 
                            src={images[0]} 
                            withFavorite={false} 
                            style={LaunchCardStyles.imageContainer} 
                            containerStyle={LaunchCardStyles.imageStyle}
                        />
                    )}
                    <View style={{ paddingHorizontal: 10, paddingVertical: 5, width: 155, justifyContent: "space-around" }}>
                        <CustomText style={"TitleCard"} text={missionName} url={""}/>
                        <CustomText style={"Detail"} text={launchDate} url={""}/>
                        <Button title="Details" onPress={() => navigation.navigate('LaunchDetail', {launch: launch})}/>
                    </View>
                </View>
            </View>
      </View>
      )

};
export default LaunchCard;
