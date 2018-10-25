import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function DeckCard ({ children, onPress, numberOfQuestions, highestScore, style={} }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{children}</Text>
      </TouchableOpacity>
      <Text>Number of Cards in this deck: {numberOfQuestions}</Text>
      <Text>Your highest score: {highestScore}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    margin: 10,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
