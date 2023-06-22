import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { background, text } from './src/theme/colors'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },
  text: {
    color: text,
  },
})
