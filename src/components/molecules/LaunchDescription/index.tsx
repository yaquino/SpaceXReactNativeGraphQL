import React, { FC, ReactElement } from 'react'
import { View } from "react-native";
import CustomText from 'components/atoms/CustomText'

type LaunchDescriptionProps = {
    launch: any,
}

const LaunchDescription: FC<LaunchDescriptionProps>  = ({ launch }): ReactElement => {
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 5, width: 300, height: 350, justifyContent: "space-around" }}>
            <CustomText style={"Title"} text={"Mission Name"} url={""}/>
            <CustomText style={"Detail"} text={launch.missionName} url={""}/>
            <CustomText style={"Title"} text={"Launch Site"} url={""}/>
            <CustomText style={"Detail"} text={launch.launchSite} url={launch.articleLink}/>
            <CustomText style={"Title"} text={"Rocket"} url={""}/>
            <CustomText style={"Detail"} text={launch.rocket.rocket_name} url={""}/>
            <CustomText style={"Title"} text={"Lauch Date"} url={""}/>
            <CustomText style={"Detail"} text={launch.launchDate} url={""}/>
        </View> 
      )
};
export default LaunchDescription;
