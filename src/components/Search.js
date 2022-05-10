import React, { StyleSheet, useState, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

const Search = () => {
  return (
    <View style={styles.container}>
      <Searchbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 16,
  },
})

export default Search
