import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from 'react-native'

import { Searchbar } from 'react-native-paper'
import { RestaurantInfo } from '../components/restaurant-info.component'

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.dynamicSafeArea}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  dynamicSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    // below: no need to check if android bc StatusBar.currentHeight is null in iOS
    marginTop: StatusBar.currentHeight,
  },
  search: {
    // backgroundColor: 'green',
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 16,
  },
})
