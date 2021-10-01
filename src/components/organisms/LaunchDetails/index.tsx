import React, { FC, ReactElement } from 'react'
import { View, StyleSheet } from "react-native";
import ImageCarousel from 'components/molecules/ImageCarousel'
import LaunchDescription from 'components/molecules/LaunchDescription'

type LaunchDetailsProps = {
    launch: any,
}

const LaunchDetailsStyles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 },
    detailsContainer: { backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" },
    carousel:{ height: 300, width: 300 }
  }
);

const LaunchDetails: FC<LaunchDetailsProps> = ({ launch }): ReactElement => {
    const missionName= launch.mission_name;
    const launchDate= launch.launch_date_local;
    const launchSite= launch.launch_site.site_name_long;
    const articleLink = launch.links && launch.links.article_link
    const images = launch.links && launch.links.flickr_images;
    const rocket = launch.rocket;
    const launchDetails = {missionName, launchDate, launchSite, articleLink, rocket};

    return (
        <View style={LaunchDetailsStyles.container}>
            <View style={LaunchDetailsStyles.detailsContainer}>
                <View style={{ flex: 1 }}>
                        <ImageCarousel 
                            images={images} 
                            style={LaunchDetailsStyles.carousel}
                            withFavorite={true} 
                        />
                        <LaunchDescription launch = {launchDetails}/>
                </View>
            </View>
      </View>
      )

};
export default LaunchDetails;
