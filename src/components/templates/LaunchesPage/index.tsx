import React, { FC, ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import LaunchesList from 'components/organisms/LaunchesList'

const GET_LAUNCHES = gql`
  query GetLaunchList {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
  } rocket {
        rocket_name
      }
  } }
`

type LaunchesPageProps = {
    navigation: any,
}

const LaunchesPageStyles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d0e0e3'}
  }
);

const LaunchesPage: FC<LaunchesPageProps> = ({ navigation }): ReactElement => {
  const { data, loading } = useQuery(GET_LAUNCHES);
  if (loading) {
    return <AppLoading />
  }
  return (
      <View style={LaunchesPageStyles.container}>
        <LaunchesList launches={data.launchesPast} navigation={navigation} />
      </View>
    )
};
export default LaunchesPage;
