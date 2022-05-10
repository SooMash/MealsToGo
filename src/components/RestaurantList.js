import React, { StyleSheet, Text, View } from 'react-native'

export const RestaurantList = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurant List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 16,
  },
})

export default RestaurantList
