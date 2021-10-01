import React, { FC, ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import LaunchDetails from 'components/organisms/LaunchDetails'

type LaunchDetailPageProps = {
    route: any,
}

const LaunchDetailPageStyles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d0e0e3'}
  }
);

const LaunchDetailPage: FC<LaunchDetailPageProps>  = ({ route }): ReactElement => {
  const launch=route.params && route.params.launch;
  
  return (
      <View style={LaunchDetailPageStyles.container}>
        <LaunchDetails 
          launch={launch}
        />
      </View>
    )
};
export default LaunchDetailPage;