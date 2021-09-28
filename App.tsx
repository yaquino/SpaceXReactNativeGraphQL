import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LaunchesPage from 'components/templates/LaunchesPage';
import FavoritesPage from 'components/templates/FavoritesPage';
import LaunchDetailPage from 'components/templates/LaunchDetailPage' 

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-community/async-storage';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

function HomeTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Launches') {
            return (
              <Ionicons
                name={ focused ? 'rocket' : 'rocket-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Favorites') {
            return (
              <Ionicons
                name={focused ? 'ios-heart' : 'heart-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#76a5af',
    })}>
      <Tab.Screen name="Launches" component={LaunchesPage} />
      <Tab.Screen name="Favorites" component={FavoritesPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false))
  }, [])

  if (loadingCache) {
    return <AppLoading />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={HomeTabs}
            options={{ title: 'SpaceX Mission Launches' }}
          />
          <RootStack.Screen 
            name="LaunchDetail" 
            component={LaunchDetailPage}
            options={{ title: 'Mission Detail' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
