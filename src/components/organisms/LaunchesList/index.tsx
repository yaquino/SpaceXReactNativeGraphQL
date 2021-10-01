import React, { FC, ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
} from 'react-native';
import LaunchCard from 'components/molecules/LaunchCard'

type LaunchesListProps = {
    launches: any,
    navigation: any,
}

const LaunchesListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0e0e3',
  },
  sectionListStyle: { 
    paddingHorizontal: 10 
  }
});

const LaunchesList: FC<LaunchesListProps> = ({ launches, navigation }): ReactElement => {
  return (
    <View style={LaunchesListStyles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={LaunchesListStyles.sectionListStyle}
          stickySectionHeadersEnabled={false}
          sections={[{
            title: "Last Launches",
            data: launches,
          }]}
          renderItem={({ item }) => {
            return <LaunchCard launch={item} navigation={navigation} />;
          }}
        />
      </SafeAreaView>
    </View>
  )
};
export default LaunchesList;